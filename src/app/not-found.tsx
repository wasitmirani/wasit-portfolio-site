import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="dot-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="glow absolute -top-32 left-1/2 -z-10 h-[420px] w-[520px] -translate-x-1/2 opacity-60"
        aria-hidden="true"
      />

      <div className="container-page text-center">
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="mt-5 text-[2.5rem] sm:text-[3.25rem] font-semibold leading-[1.1] text-foreground">
          This page could
          <br />
          <span className="text-muted">not be found</span>
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-[14.5px] leading-relaxed text-muted">
          The link may be broken or the page may have moved.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </div>
  );
}
