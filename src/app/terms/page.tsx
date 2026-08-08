import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Terms & Conditions — NumKhor" };

export default function TermsPage() {
  return (
    <LegalLayout title="NumKhor Terms & Conditions" updated="August 8, 2026">
      <p>
        These terms govern your use of NumKhor, operated by <strong>Kinzang Dorji</strong>, Bhutan — contact:{" "}
        <a href="mailto:numkhorlo@gmail.com">numkhorlo@gmail.com</a>. By creating an account, you agree to
        them.
      </p>

      <h2>What NumKhor is</h2>
      <p>
        NumKhor is a broadcast-model matching platform: a passenger posts a ride request, and nearby online,
        verified drivers are notified — any of them can respond.{" "}
        <strong>NumKhor is not a taxi company, transportation carrier, or employer of drivers.</strong> We
        don&apos;t own vehicles, employ drivers, set fares, or dispatch/assign specific drivers to specific rides.
        We provide the app that connects independent drivers and passengers; the ride itself is an arrangement
        directly between them.
      </p>

      <h2>Eligibility</h2>
      <ul>
        <li>You must be at least 18 years old to use NumKhor.</li>
        <li>
          To drive on NumKhor, you must hold a valid Bhutanese driving license authorizing commercial passenger
          transport, and complete our license verification process. Commercial driving permits in Bhutan are
          generally issued only to Bhutanese citizens; your license and CID are reviewed accordingly.
        </li>
        <li>
          We may reject or revoke driver verification at our discretion — for example, an unclear photo, a
          document that doesn&apos;t match what&apos;s required, or signs of an already-registered license/CID.
        </li>
      </ul>

      <h2>Your account</h2>
      <ul>
        <li>
          One account per person. Signing in requires a real Google or Apple identity — we don&apos;t support
          anonymous accounts.
        </li>
        <li>You&apos;re responsible for keeping your account secure and for activity that happens through it.</li>
        <li>
          We may issue a warning or ban an account for misuse — including repeated passenger no-shows, driver
          misconduct, or fraudulent verification/payment submissions. Banning is enforced the next time your
          session refreshes; we don&apos;t claim to remotely terminate an already-open session instantly.
        </li>
      </ul>

      <h2>Rides</h2>
      <ul>
        <li>
          Ride details (pickup location, passenger count) are broadcast to nearby verified, online drivers. Any
          driver who responds may fulfill the ride — NumKhor does not select or guarantee a specific driver.
        </li>
        <li>
          Fares, payment for the ride itself, and the ride experience are arranged directly between passenger and
          driver, outside the app. NumKhor is not a party to that transaction.
        </li>
        <li>
          You&apos;re responsible for your own conduct and safety during a ride. NumKhor does not screen for
          insurance, vehicle condition, or driving history beyond the license/CID verification described above.
        </li>
      </ul>

      <h2>Payment for using NumKhor (drivers)</h2>
      <ul>
        <li>
          Driving on NumKhor is free for your first 6 months. After that, continuing to receive ride requests
          requires a Nu. 100/month subscription.
        </li>
        <li>
          You&apos;ll be notified in-app in advance of your free period ending, and no charge occurs without your
          explicit action to subscribe.
        </li>
        <li>
          Until an automated payment gateway is available, subscription payment is verified manually: you submit a
          bank transfer screenshot, and our admin cross-checks it against our bank statement before activating your
          subscription.
        </li>
      </ul>

      <h2>Disclaimer and limitation of liability</h2>
      <p>NumKhor is provided &ldquo;as is.&rdquo; To the fullest extent permitted by law:</p>
      <ul>
        <li>
          We do not guarantee ride availability, driver response times, or that any given ride request will be
          matched.
        </li>
        <li>
          We are not liable for the conduct, actions, or omissions of any driver or passenger, including
          accidents, disputes, loss, injury, or property damage arising from a ride arranged through the app.
        </li>
        <li>
          We are not liable for service interruptions, including but not limited to backend outages, location
          inaccuracy, or delayed notifications.
        </li>
      </ul>

      <h2>Termination</h2>
      <p>
        You may stop using NumKhor and delete your account at any time from the Profile tab in the app — this
        permanently erases your account and associated data (see our{" "}
        <a href="/privacy">Privacy Policy</a> for what that includes). We may suspend or terminate an account for
        violating these terms.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We&apos;ll update the &ldquo;Last updated&rdquo; date above when these terms change. Continued use of the
        app after a change means you accept the update.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of Bhutan.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href="mailto:numkhorlo@gmail.com">numkhorlo@gmail.com</a>
      </p>
    </LegalLayout>
  );
}
