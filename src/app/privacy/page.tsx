import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Privacy Policy — NumKhor" };

export default function PrivacyPage() {
  return (
    <LegalLayout title="NumKhor Privacy Policy" updated="August 8, 2026">
      <p>
        NumKhor (&ldquo;the app,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) is a taxi-matching app for Bhutan. This
        policy explains what we collect, why, and how you can control or delete it. NumKhor is operated by{" "}
        <strong>Kinzang Dorji</strong>, Bhutan — contact:{" "}
        <a href="mailto:numkhorlo@gmail.com">numkhorlo@gmail.com</a>.
      </p>

      <h2>What we collect</h2>
      <p>
        <strong>Account information</strong> — When you sign in with Google or Apple, we receive your name and
        email address from that provider. We do not support anonymous or guest accounts: a persistent identity is
        required so that warnings and bans can be attached to an account, protecting other users.
      </p>
      <p>
        <strong>Location</strong> — With your permission, we collect your device&apos;s precise location while
        you&apos;re actively using the app to request or fulfill a ride (foreground only — we do not track your
        location when the app is closed or backgrounded). A passenger&apos;s pickup location is shared with nearby
        drivers so they can respond; a driver&apos;s live location is shared with a passenger whose ride they&apos;ve
        responded to.
      </p>
      <p>
        <strong>Camera and photos (drivers only)</strong> — To verify you&apos;re eligible to drive commercially in
        Bhutan, we require a photo of your driving license, which is manually reviewed. If you subscribe after your
        free trial period, you may also upload a payment screenshot for manual verification.
      </p>
      <p>
        <strong>Driver and vehicle details (drivers only)</strong> — License number, CID (Citizenship Identity
        Card) number, vehicle make/model/plate. These are read from your license photo and entered by our admin
        during manual review — you don&apos;t need to type them yourself.
      </p>
      <p>
        <strong>Ride activity</strong> — Ride requests, pickup locations/addresses, timestamps, and outcomes
        (completed, cancelled, expired). If a driver reports that a passenger wasn&apos;t at the pickup location,
        that&apos;s recorded against the passenger&apos;s account; repeated reports may lead to a warning or ban.
      </p>
      <p>
        <strong>Payment information (drivers only, after the free trial)</strong> — A bank transfer screenshot and
        optional bank journal number, submitted for manual verification against our bank statement. We do not
        collect card numbers or bank credentials directly — payment happens through your own banking app, and you
        only send us proof of that transfer.
      </p>
      <p>
        <strong>Crash and diagnostic data</strong> — If enabled, we use Sentry to collect crash reports and basic
        device/app diagnostics when something goes wrong, so we can fix it. This does not include your ride content
        or documents.
      </p>

      <h2>Why we collect it</h2>
      <ul>
        <li>To match passengers with nearby, verified drivers.</li>
        <li>
          To verify that drivers hold a valid Bhutanese driving license (commercial driving in Bhutan requires
          citizenship in practice, which the license/CID verification confirms).
        </li>
        <li>
          To prevent abuse — no-show reports, warnings, and bans exist to protect other users, not to build a
          public reputation score (report counts are never shown to other users).
        </li>
        <li>To verify subscription payments once the free trial period ends.</li>
        <li>To keep the app working reliably (crash reporting).</li>
      </ul>

      <h2>Who can see your data</h2>
      <ul>
        <li>
          <strong>Nearby drivers/passengers</strong> see only what&apos;s needed to complete a ride: pickup
          location, live location during an active ride, vehicle details (for drivers), and name.
        </li>
        <li>
          <strong>NumKhor&apos;s admin</strong> (the app operator) can see driver verification documents, no-show
          reports, warnings/bans, and subscription receipts, for manual review purposes only.
        </li>
        <li>
          <strong>Service providers</strong>: Supabase (our backend host — database, authentication, file storage)
          and, for driver license photos, Google Cloud Vision (best-effort OCR text suggestion only, not an
          automatic decision — a human always reviews the actual photo). Sentry, if crash reporting is enabled.
        </li>
        <li>We do not sell your data, and we do not use it for advertising.</li>
      </ul>

      <h2>How long we keep it</h2>
      <p>
        Your data is retained while your account is active. If you delete your account (see below), your profile,
        ride history, and uploaded documents are permanently deleted, aside from anything we&apos;re required to
        retain for fraud prevention or legal compliance.
      </p>

      <h2>Your rights</h2>
      <ul>
        <li>
          <strong>Access/correction</strong>: contact us at{" "}
          <a href="mailto:numkhorlo@gmail.com">numkhorlo@gmail.com</a> if
          you need to see or correct what we hold about you.
        </li>
        <li>
          <strong>Deletion</strong>: you can permanently delete your account and all associated data directly from
          the app — open the <strong>Profile</strong> tab and tap <strong>Delete account</strong>. This is
          immediate and cannot be undone. See our{" "}
          <a href="/delete-account">account deletion page</a> for details, or if you&apos;re unable to access the
          app, email <a href="mailto:numkhorlo@gmail.com">numkhorlo@gmail.com</a> and we&apos;ll delete it
          manually.
        </li>
      </ul>

      <h2>Children</h2>
      <p>NumKhor is not intended for use by anyone under 18.</p>

      <h2>Security</h2>
      <p>
        Your session is stored using your device&apos;s secure keychain (iOS Keychain / Android Keystore), not
        plain storage. Driver documents and payment screenshots are stored in access-controlled storage, viewable
        only by you and admin reviewers via time-limited signed links — never publicly accessible.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We&apos;ll update the &ldquo;Last updated&rdquo; date above when this policy changes. Continued use of the
        app after a change means you accept the update.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data:{" "}
        <a href="mailto:numkhorlo@gmail.com">numkhorlo@gmail.com</a>
      </p>
    </LegalLayout>
  );
}
