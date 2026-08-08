import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-bold text-ink">NumKhor legal &amp; account information</h1>
      <p className="mt-3 text-fade">
        NumKhor is a taxi-matching app for Bhutan. This site holds the documents and account
        information required alongside the app.
      </p>
      <ul className="mt-8 space-y-3">
        <li>
          <Link href="/privacy" className="font-semibold text-brand hover:underline">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/terms" className="font-semibold text-brand hover:underline">
            Terms &amp; Conditions
          </Link>
        </li>
        <li>
          <Link href="/delete-account" className="font-semibold text-brand hover:underline">
            Delete your account
          </Link>
        </li>
      </ul>
    </main>
  );
}
