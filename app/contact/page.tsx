"use client";

import { useState } from "react";
import { Send, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a question, suggestion, or partnership inquiry? We&apos;d love to
            hear from you.
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div className="p-6 bg-card border rounded-xl flex items-start gap-4">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email Us</h3>
              <p className="text-sm text-muted-foreground">
                hello@techvarietydeals.com
              </p>
            </div>
          </div>
          <div className="p-6 bg-card border rounded-xl flex items-start gap-4">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Social Media</h3>
              <p className="text-sm text-muted-foreground">
                DM us on Twitter @TechVarietyDeals
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="text-center p-12 bg-primary/5 border border-primary/10 rounded-xl">
            <div className="text-4xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
            <p className="text-muted-foreground">
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 bg-card border rounded-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option>General Inquiry</option>
                <option>Product Suggestion</option>
                <option>Partnership / Sponsorship</option>
                <option>Bug Report</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
