export const metadata = {
  title: "Affiliate Disclosure | Tech Variety Deals",
  description: "Important affiliate disclosure statement for Tech Variety Deals.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl prose prose-slate dark:prose-invert">
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
        Affiliate Disclosure <span className="text-yellow-500">⚠️</span>
      </h1>
      
      <div className="space-y-6">
        <div className="p-6 bg-secondary/30 rounded-lg border border-border">
          <p className="font-medium text-lg mb-0 text-foreground">
            Tech Variety Deals is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated sites.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-3">What does this mean for you?</h2>
          <p>
            When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. This happens at <strong>absolutely no additional cost to you</strong>. The price you pay for the product remains exactly the same whether you use our affiliate link or go directly to the vendor's website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Why do we use affiliate links?</h2>
          <p>
            Running a website like Tech Variety Deals requires significant time and resources—including hosting costs, content creation, research, and maintenance. Affiliate commissions help support our operations and allow us to continue providing free, high-quality content, reviews, and deals to our readers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Objective and Independence</h2>
          <p>
            Our primary goal is to provide honest, accurate, and objective information to help you make informed purchasing decisions. We only recommend products that we genuinely believe deliver value to our readers. The inclusion of affiliate links does not influence the objectivity of our reviews or product recommendations. 
          </p>
          <p>
            While we may receive compensation for pointing you toward particular products, we do not accept payment in exchange for positive reviews. Our opinions are our own.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Amazon Associate Disclaimer</h2>
          <p>
            As an Amazon Associate, we earn from qualifying purchases. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Questions?</h2>
          <p>
            If you have any questions regarding our affiliate relationships or how we make money, please feel free to reach out to us via our Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
