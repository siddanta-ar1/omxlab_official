/* Subscribe band. The system's input rule: 1px hairline border, paper-white
   interior, and on focus the border goes to pure black with no glow ring --
   so the focus style is a border swap plus an explicit outline-none. */

export function SubscribeBand() {
  return (
    <section
      data-anim=""
      className="w-full bg-paper-white border-b border-grid-hairline"
      aria-labelledby="subscribe-heading"
    >
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin py-space-3xl">
        <div className="border border-grid-hairline">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-grid-hairline">
            <div className="p-space-xl">
              <span className="text-micro-eyebrow uppercase text-text-muted block mb-space-xs">
                REGISTRY SUBSCRIPTION
              </span>
              <h2
                id="subscribe-heading"
                className="text-headline-lg-mobile md:text-headline-lg text-text-primary mb-space-md"
              >
                Receive each dispatch.
              </h2>
              <p className="text-body-default text-on-surface-variant max-w-md">
                System releases, research notes and compliance bulletins,
                issued from the Kathmandu studio as they are entered into the
                registry. No other correspondence.
              </p>
            </div>

            <div className="p-space-xl flex flex-col justify-center bg-studio-grey">
              <form className="flex flex-col sm:flex-row gap-space-sm">
                <div className="flex-1">
                  <label htmlFor="subscribe-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="subscribe-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="name@institution.org"
                    className="w-full bg-paper-white border border-grid-hairline rounded
                               px-space-md py-[10px] text-body-default text-text-primary
                               placeholder:text-text-muted outline-none
                               focus:border-text-primary focus:ring-0
                               transition-colors duration-100"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-action text-on-primary rounded-lg px-5 py-[10px] text-cta-button
                             uppercase shrink-0 transition-colors duration-100
                             hover:bg-swatch-foundry active:scale-[0.99]"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-space-md text-body-compact text-text-muted">
                Dispatch frequency averages 2 entries per month. Unsubscribe is
                carried in every issue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeBand;
