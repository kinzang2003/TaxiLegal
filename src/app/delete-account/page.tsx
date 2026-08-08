import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Delete Your Account — NumKhor" };

export default function DeleteAccountPage() {
  return (
    <LegalLayout title="Delete your NumKhor account" updated="August 8, 2026">
      <p>
        You can permanently delete your NumKhor account and all associated data directly from the app, at any time
        — no need to contact support first.
      </p>

      <h2>How to delete your account</h2>
      <ul>
        <li>Open the NumKhor app and sign in.</li>
        <li>
          Go to the <strong>Profile</strong> tab (bottom navigation).
        </li>
        <li>
          Tap <strong>Delete account</strong> near the bottom of the screen.
        </li>
        <li>Confirm when asked.</li>
      </ul>
      <p>This takes effect immediately and cannot be undone.</p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your profile (name, email association, role).</li>
        <li>Your ride history — requests, pickup locations, timestamps.</li>
        <li>Driver verification documents, if you&apos;re a driver — your license photo and submitted details.</li>
        <li>Subscription payment screenshots, if you&apos;ve submitted any.</li>
        <li>Warnings, no-show reports, and any other account-linked records.</li>
      </ul>
      <p>
        See our <a href="/privacy">Privacy Policy</a> for the full picture of what we collect and why.
      </p>

      <h2>What&apos;s retained</h2>
      <p>
        Aside from anything we&apos;re required to keep for fraud prevention or legal compliance, nothing is
        retained after deletion.
      </p>

      <h2>Can&apos;t access the app?</h2>
      <p>
        If you&apos;re unable to sign in and delete your account yourself, email{" "}
        <a href="mailto:numkhorlo@gmail.com">numkhorlo@gmail.com</a> from the email address associated with
        your account and we&apos;ll delete it manually.
      </p>
    </LegalLayout>
  );
}
