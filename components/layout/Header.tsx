"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { ThemeSwitcher } from "../theme-switcher";
import { Button } from "../ui/button";
import { SearchModal } from "../ui/SearchModal";
//import logo form public folder with this name techvariety-logo.png
import logo from "../../public/techvariety-logo.png";
import Image from "next/image";

const mainNav = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Deals", href: "/products" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Global Ctrl+K / Cmd+K shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-background border-b border-transparent"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="">
              {/* <ShoppingBag className="w-5 h-5" /> */}
              <Image src={logo} alt="TechVariety Logo" className="" style={{ maxWidth: '120px' }} />
            </div>
            {/* <span className="font-bold text-lg tracking-tight">
              Tech<span className="text-primary">Variety</span>
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {mainNav.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 h-9 px-3 text-sm text-muted-foreground bg-muted/60 hover:bg-muted border rounded-lg transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline">Search...</span>
              <kbd className="hidden lg:inline-flex h-5 items-center gap-0.5 rounded border bg-background px-1.5 text-[10px] font-medium text-muted-foreground ml-2">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>

            {/* Mobile search icon */}
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </Button>

            <ThemeSwitcher />

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden animate-in slide-in-from-top-4 fade-in duration-300 border-b bg-background absolute top-16 left-0 w-full shadow-lg">
            <nav className="flex flex-col p-4 w-full">
              {mainNav.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-3 text-sm font-medium border-b border-border/50 last:border-0 ${pathname === link.href ? "text-primary" : "text-foreground"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Search Modal — rendered outside header to avoid z-index issues */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
