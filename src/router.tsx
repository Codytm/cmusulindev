import {
  createContext,
  useContext,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

type LocationState = {
  path: string;
  hash: string;
};

type RouterValue = LocationState & {
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterValue | null>(null);

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

function readLocation(): LocationState {
  return {
    path: normalizePath(window.location.pathname),
    hash: window.location.hash,
  };
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<LocationState>(readLocation);

  useEffect(() => {
    const onPop = () => setLocation(readLocation());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }
    document.getElementById(id)?.scrollIntoView();
  }, [location]);

  function navigate(to: string) {
    const url = new URL(to, window.location.origin);
    const next = {
      path: normalizePath(url.pathname),
      hash: url.hash,
    };
    const current = readLocation();
    if (next.path === current.path && next.hash === current.hash) {
      const id = next.hash.replace("#", "");
      if (id) document.getElementById(id)?.scrollIntoView();
      return;
    }
    window.history.pushState({}, "", `${next.path}${next.hash}`);
    setLocation(next);
  }

  return (
    <RouterContext.Provider value={{ ...location, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const router = useContext(RouterContext);
  if (!router) {
    throw new Error("useRouter must be used inside RouterProvider");
  }
  return router;
}

export function Link({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const { navigate } = useRouter();
  const external = /^(https?:|mailto:|tel:)/.test(href);

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }
        event.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}
