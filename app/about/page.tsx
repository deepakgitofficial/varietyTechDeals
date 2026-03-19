import type { Metadata } from "next";
import { Award, Users, Zap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Tech Variety Deals — your trusted source for curated Amazon tech deals and expert reviews.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Tech Variety Deals
          </span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We&apos;re a team of tech enthusiasts dedicated to finding the best
          deals on Amazon. Our mission is simple: save you time and money by
          curating the top tech products and providing honest, in-depth reviews
          you can trust.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[
          {
            icon: Zap,
            title: "Daily Updates",
            desc: "Prices change constantly. We track them daily so you never miss a deal.",
          },
          {
            icon: Award,
            title: "Expert Reviews",
            desc: "Our team tests and reviews products hands-on before recommending them.",
          },
          {
            icon: Users,
            title: "Community First",
            desc: "Trusted by over 50,000 monthly readers making smarter tech purchases.",
          },
          {
            icon: Heart,
            title: "Honest & Unbiased",
            desc: "We list pros AND cons. Our affiliate model means you never pay more.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="p-6 bg-card border rounded-xl text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Story */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Tech Variety Deals started in 2024 as a passion project. We noticed
            that finding the best tech deals on Amazon was surprisingly
            difficult. Prices fluctuate, new products launch weekly, and
            marketing hype can be misleading.
          </p>
          <p>
            So we built a platform that cuts through the noise. Every product on
            our site is hand-selected by our editorial team. We research specs,
            read community reviews, test popular products, and track price
            history to ensure we&apos;re only recommending genuine deals.
          </p>
          <p>
            As an Amazon Associate, we earn from qualifying purchases — but this
            never influences our editorial choices. You pay the same price
            whether you click through our links or not. Our reputation depends
            on honest recommendations, and we take that seriously.
          </p>
        </div>
      </div>
    </div>
  );
}
