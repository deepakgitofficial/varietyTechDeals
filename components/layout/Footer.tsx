import Link from "next/link";
import logo from "../../public/techvariety-logo.png";
import { ExternalLink, Github, ShoppingBag, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src={logo} alt="TechVariety Logo" className="w-32" />
            </Link>import logo from "../../public/techvariety-logo.png";
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Your trusted source for the best Amazon tech deals, reviews, and buying guides. Curated daily for tech enthusiasts.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-3 flex flex-col">
              <li><Link href="/categories/mobiles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mobiles & Tablets</Link></li>
              <li><Link href="/categories/laptops" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Laptops & PCs</Link></li>
              <li><Link href="/categories/gaming" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gaming Gear</Link></li>
              <li><Link href="/categories/audio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Headphones & Audio</Link></li>
              <li><Link href="/categories/wearables" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Smartwatches</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 flex flex-col">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog & News</Link></li>
              <li><Link href="/sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 flex flex-col">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/affiliate-disclosure" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Tech Variety Deals. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/50 px-3 py-2 rounded-md">
            <ExternalLink className="w-3 h-3" />
            <span>As an Amazon Associate I earn from qualifying purchases.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
