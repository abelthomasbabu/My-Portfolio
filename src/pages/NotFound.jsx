import { Link } from "react-router-dom";

export const NotFound = () => (
  <div className="mx-auto max-w-[1040px] px-4 py-24 sm:px-6">
    <h1 className="font-pixel text-3xl uppercase">Page not found</h1>
    <p className="mt-4 text-muted">
      <Link to="/" className="underline decoration-muted/50 hover:text-accent">
        Back to the home page
      </Link>
    </p>
  </div>
);
