export const metadata = {
  title: "Privacy Policy | Tech Variety Deals",
  description: "Privacy Policy for Tech Variety Deals",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl prose prose-slate dark:prose-invert">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p>
            At Tech Variety Deals, we collect information you provide directly to us when you use our website. 
            This may include your name, email address, and any other information you choose to provide when contacting us or subscribing to our newsletter.
            We also automatically collect certain information about your device and how you interact with our website through cookies and similar technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services.
            This includes responding to your comments, questions, and requests, and analyzing trends, usage, and activities in connection with our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Third-Party Links & Affiliate Disclosure</h2>
          <p>
            Our website contains links to third-party websites, primarily Amazon.com. We are a participant in the Amazon Services LLC Associates Program.
            When you click on these links and make a purchase, we may earn a commission. These third-party sites have their own separate and independent privacy policies.
            We therefore have no responsibility or liability for the content and activities of these linked sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Cookies</h2>
          <p>
            We use cookies to enhance your experience on our website. You can choose to disable cookies through your individual browser options.
            However, this may affect how you are able to interact with our site as well as other websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through our Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
