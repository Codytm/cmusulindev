import { Link } from "../router";

export function NotFound() {
  return (
    <article className="page">
      <p className="page-kicker">404</p>
      <h1 className="page-title">Page not found</h1>
      <p className="page-lede">That path isn't part of the site.</p>
      <Link href="/" className="text-link">
        Back home
      </Link>
    </article>
  );
}
