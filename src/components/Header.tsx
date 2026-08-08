import Link from "next/link";

// Same ring + dot mark as the app (numkhor-app/components/Logo.tsx) — one
// brand identity across the app and this site, no image asset needed here
// either.
function Mark() {
  return (
    <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand">
      <span className="h-3 w-3 rounded-full border-2 border-paper" />
      <span className="absolute h-1.5 w-1.5 rounded-full bg-cta" />
    </span>
  );
}

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-ink">
          <Mark />
          NumKhor
        </Link>
        <nav className="flex gap-5 text-sm font-medium text-fade">
          <Link href="/privacy" className="hover:text-brand">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-brand">
            Terms &amp; Conditions
          </Link>
          <Link href="/delete-account" className="hover:text-brand">
            Delete Account
          </Link>
        </nav>
      </div>
    </header>
  );
}
