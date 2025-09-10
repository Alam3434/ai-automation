"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ArrowRight } from "lucide-react";

// Adjust these imports to your paths
import Section from "@/components/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { InlineWidget } from "react-calendly";
import SectionPill from "./SectionPill";

export default function ContactFormSection() {
  const [state, handleSubmit] = useForm("xandvvlr"); // <-- your Formspree ID

  return (
    <Section id="contact" className="py-16 md:py-24">
      <div className="max-w-2xl">
      <SectionPill>Let&apos;s talk</SectionPill>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-purple-900">
          Book a free AI audit
        </h2>
        <p className="mt-3 text-purple-700/70">
          Tell us about your workflows. We will identify quick wins and send a plan within 48 hours.
        </p>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
        {/* Left: Contact form */}
        <Card className="rounded-2xl bg-white border border-purple-100 shadow-[8px_8px_18px_rgba(0,0,0,0.1),-8px_-8px_18px_rgba(255,255,255,0.9)]">
          <CardHeader>
            <CardTitle className="text-purple-800">Contact form</CardTitle>
            <CardDescription className="text-purple-600">
              We will reply within one business day.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {state.succeeded ? (
              <div className="p-6 rounded-xl bg-purple-50 border border-purple-100">
                <div className="font-medium text-purple-800">
                  Thanks! Your message has been received.
                </div>
                <p className="text-sm text-purple-700/80 mt-1">
                  We’ll follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                {/* Honeypot (spam trap) */}
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="text-sm text-purple-700/80">
                      Name
                    </label>
                    <Input id="name" name="name" required className="bg-white/90" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm text-purple-700/80">
                      Work email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-white/90"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="text-sm text-purple-700/80">
                    Company
                  </label>
                  <Input id="company" name="company" className="bg-white/90" />
                  <ValidationError prefix="Company" field="company" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-purple-700/80">
                    What would you like to automate?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="e.g., triaging inbound email, syncing CRM notes, summarizing support tickets…"
                    className="bg-white/90"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-purple-700/70">
                    By submitting, you agree to our privacy policy.
                  </div>
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white shadow-[6px_6px_14px_rgba(0,0,0,0.12),-6px_-6px_14px_rgba(255,255,255,0.9)] disabled:opacity-60"
                  >
                    {state.submitting ? "Sending…" : "Send message"}
                    {!state.submitting && <ArrowRight className="h-4 w-4" />}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Right: Calendly or any other content */}
        <Card className="rounded-2xl bg-white border border-purple-100 shadow-[8px_8px_18px_rgba(0,0,0,0.1),-8px_-8px_18px_rgba(255,255,255,0.9)]">
          <CardHeader>
            <CardTitle className="text-purple-800">Or grab a time</CardTitle>
            <CardDescription className="text-purple-600">
              Drop in directly on our calendar.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <CardContent>
              <InlineWidget
                url="https://calendly.com/aamiyo2003/coffee-chat"
                styles={{ height: 640 }}
                pageSettings={{
                  hideEventTypeDetails: false,
                  hideGdprBanner: true,
                  primaryColor: "7c3aed", // purple-600
                }}
          
                utm={{ utmSource: "website", utmMedium: "contact-card" }}
              />
            </CardContent>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
