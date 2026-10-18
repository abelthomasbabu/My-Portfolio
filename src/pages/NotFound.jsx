import { Link } from "react-router-dom";

export const NotFound = () => (
  <div className="mx-auto max-w-[760px] px-4 py-24">
    <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
    <p className="mt-4 text-muted">
      <Link to="/" className="underline decoration-muted/50 hover:text-accent">
        Back to the home page
      </Link>
    </p>
  </div>
);
