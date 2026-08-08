import type { ReactNode } from "react";

interface Props {
  title: string;
  updated: string;
  children: ReactNode;
}

// Shared typography wrapper for the Privacy/Terms/Delete Account pages —
// plain, legible legal-document styling, no marketing chrome.
export function LegalLayout({ title, updated, children }: Props) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold text-ink">{title}</h1>
      <p className="mt-2 text-sm text-fade">Last updated: {updated}</p>
      <div className="prose-legal mt-8">{children}</div>
    </main>
  );
}
