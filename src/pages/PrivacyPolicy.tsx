import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const PrivacyPolicy = () => {
  useSEO({ title: "Privacy Policy — Tapan & Partners", description: "Privacy policy for Tapan & Partners website, covering data collection, cookies, and your GDPR rights." });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-light text-foreground mb-12">Privacy Policy</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-sm">
          <p>Last updated: February 19, 2026</p>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">1. Who We Are</h2>
            <p>
              Tapan & Partners is an architecture firm based in Budapest, Hungary (1056, Irányi u. 18).
              You can reach us at{" "}
              <a href="mailto:admin@tapanpartners.com" className="underline text-foreground hover:text-foreground/80">
                admin@tapanpartners.com
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">2. What Data We Collect</h2>
            <p>
              This website does not require registration and does not collect personal data such as names,
              emails, or payment information through the site itself. The only data collected is anonymous
              usage data through Google Analytics (see below) and any information you voluntarily provide
              via our contact form.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">3. Google Analytics</h2>
            <p>
              We use Google Analytics (measurement ID: G-WRGK8MG29G) to understand how visitors interact
              with our website. Google Analytics collects anonymous data such as:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Pages visited and time spent on each page</li>
              <li>Approximate geographic location (country/city level)</li>
              <li>Browser type, device, and operating system</li>
              <li>Referring website or search terms</li>
            </ul>
            <p>
              This data is processed by Google LLC. For more information, see{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-foreground/80"
              >
                Google's Privacy Policy
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">4. Cookies</h2>
            <p>
              Cookies are small text files stored on your device. This website uses cookies only for
              Google Analytics. Analytics cookies are <strong className="text-foreground">not set</strong> unless
              you explicitly accept them via our cookie consent banner.
            </p>
            <p>
              You can change your cookie preferences at any time by clearing your browser's local storage
              or cookies for this site and revisiting.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">5. Your Rights (GDPR)</h2>
            <p>
              Under the EU General Data Protection Regulation, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Decline analytics cookies (via the consent banner)</li>
              <li>Request information about any personal data we hold</li>
              <li>Request deletion of your data</li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a href="mailto:admin@tapanpartners.com" className="underline text-foreground hover:text-foreground/80">
                admin@tapanpartners.com
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-foreground">6. Changes</h2>
            <p>
              We may update this policy from time to time. Any changes will be posted on this page with
              an updated revision date.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
