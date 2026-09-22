import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  return (
    <section className="bg-bg pt-[80px] pb-[100px]">
      <div className="mx-auto max-w-[820px] px-12">
        <Link
          to="/games/holdout"
          className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.04em] text-muted transition-colors hover:text-accent"
        >
          &larr; Holdout
        </Link>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
          Legal
        </p>

        <h1 className="wrap-break-word mt-2 font-display uppercase leading-[0.9] tracking-[-0.03em] text-[clamp(36px,6vw,64px)]">
          Privacy Policy
        </h1>
        <p className="mt-2 font-mono text-[13px] uppercase tracking-[0.08em] text-muted">
          Holdout: Shoot To Survive
        </p>

        <div className="mt-12 space-y-10 text-[16px] leading-[1.7] text-ink">
          <p>
            1608 Studios (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;) operates the Holdout: Shoot To Survive mobile
            application (the &ldquo;App&rdquo;). This policy explains how we
            handle your information when you use our App.
          </p>

          <div>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.08em] text-muted">
              Information we collect
            </h2>
            <p className="mt-4">
              1608 Studios does not collect, store, or process any personal
              data from users of this App. We do not have access to any user
              data.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.08em] text-muted">
              Third-party advertising
            </h2>
            <p className="mt-4">
              Our App displays ads provided by Google AdMob. Google AdMob may
              independently collect certain data to serve advertisements,
              including:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted">
              <li>Device identifiers and advertising IDs</li>
              <li>IP address and approximate location</li>
              <li>App usage and interaction data</li>
            </ul>
            <p className="mt-4">
              This data is collected and managed solely by Google. We do not
              have access to or control over the data Google collects. For
              more information, please review{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-ink"
              >
                Google&rsquo;s Privacy Policy
              </a>
              .
            </p>
            <p className="mt-4">
              Our App also uses the Google User Messaging Platform (UMP) to
              manage your ad consent preferences in accordance with
              applicable privacy regulations.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.08em] text-muted">
              Children&rsquo;s privacy
            </h2>
            <p className="mt-4">
              Our App is not directed at children under the age of 13. We do
              not knowingly collect personal information from children under
              13. If you believe a child has provided personal information
              through our App, please contact us and we will take
              appropriate action.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.08em] text-muted">
              Your rights
            </h2>
            <p className="mt-4">
              Since we do not collect any personal data, there is no user
              data for us to provide, correct, or delete. For any data
              collected by Google AdMob, please refer to Google&rsquo;s
              Privacy Policy for information on exercising your rights.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.08em] text-muted">
              Changes to this policy
            </h2>
            <p className="mt-4">
              We may update this policy from time to time. We will notify
              you of any changes by updating the date at the top of this
              page. Continued use of the App after changes constitutes
              acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.08em] text-muted">
              Contact us
            </h2>
            <p className="mt-4">
              If you have any questions about this privacy policy, please
              contact us at:
            </p>
            <p className="mt-4">
              1608 Studios
              <br />
              Email:{' '}
              <a
                href="mailto:moks@1608studios.com"
                className="text-accent underline underline-offset-2 hover:text-ink"
              >
                moks@1608studios.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
