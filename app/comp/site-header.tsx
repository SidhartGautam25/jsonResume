import Link from "next/link";

type SiteHeaderProps = {
  showLaunchButton?: boolean;
};

export function SiteHeader({ showLaunchButton = true }: SiteHeaderProps) {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-brand">
        codeResume
      </Link>
      <div className="nav-links">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/docs" className="nav-link">
          Docs
        </Link>
        <Link href="/editor?template=full" className="nav-link nav-link-strong">
          {showLaunchButton ? "Open Builder" : "Builder"}
        </Link>
      </div>
    </nav>
  );
}
