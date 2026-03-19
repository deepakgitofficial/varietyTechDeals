"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "./button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto relative z-10 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Never Miss a Deal
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Get the hottest tech deals, exclusive discounts, and expert reviews delivered straight to your inbox every week.
        </p>

        {submitted ? (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-primary font-semibold text-lg">🎉 You&apos;re subscribed!</p>
            <p className="text-muted-foreground text-sm mt-1">
              Check your inbox for a confirmation email.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
            <Button type="submit" size="lg" className="gap-2">
              <Send className="w-4 h-4" />
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-4">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
