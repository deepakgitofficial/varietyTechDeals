export const metadata = {
  title: "Terms & Conditions | Tech Variety Deals",
  description: "Terms and Conditions for utilizing our website.",
};

export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl prose prose-slate dark:prose-invert">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing and using Tech Variety Deals, you accept and agree to be bound by the terms and provisions of this agreement. 
            If you do not agree to abide by these terms, please do not use this site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the website is our proprietary property. All source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site are owned or controlled by us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Affiliate Relationship</h2>
          <p>
            Tech Variety Deals is a participant in the Amazon Services LLC Associates Program. We review and link to products available on Amazon.com. We may earn a commission when you click on our links and make a purchase. 
            However, our reviews and recommendations are independent. The prices and availability of products are determined by Amazon and may change without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Accuracy of Information</h2>
          <p>
            While we strive to ensure that all information on the site is accurate and up to date, we make no warranties or representations regarding its completeness or accuracy. Prices, product descriptions, and availability are subject to change without notice. Always verify details on the seller's (e.g., Amazon) website before completing any purchase.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Disclaimer of Liability</h2>
          <p>
            Tech Variety Deals, its authors, and contributors shall not be held liable for any damages arising out of your use of our website or your interactions with third-party vendors linked from our site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Modifications</h2>
          <p>
            We reserve the right to revise these terms and conditions at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms and conditions.
          </p>
        </section>
      </div>
    </div>
  );
}
