"use client"
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Zap, Bot, BarChart3, ShieldCheck, CalendarClock, Menu, X, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { InlineWidget, PopupButton } from "react-calendly";
import ContactSection from "@/components/ContactFormSection";
import ContactFormSection from "@/components/ContactFormSection";
import SectionPill from "@/components/SectionPill";
import ClientsSection from "@/components/ClientSection";


// --- Helpers ---

const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string }>> = ({ id, className, children }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className ?? ""}`}>{children}</section>
);

const Metric: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-2xl md:text-3xl font-bold tracking-tight text-purple-700">{value}</span>
    <span className="text-sm text-purple-400">{label}</span>
  </div>
);

const Pill: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm text-purple-700 bg-white border border-purple-100 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.07),inset_-6px_-6px_12px_rgba(255,255,255,0.9)]">
    {children}
  </span>
);

  // Test 1: Basic ROI calculation
  
// --- Main Site Component ---
export default function Site() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const leads = JSON.parse(localStorage.getItem("_leads") || "[]");
      leads.push({ ...form, createdAt: new Date().toISOString() });
      localStorage.setItem("_leads", JSON.stringify(leads));
      setSent(true);
    } catch (_) {
      setSent(true);
    }
  }

  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-b from-purple-100 via-white to-purple-50">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)]">
        <Section className="flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-items-center rounded-xl bg-purple-200 border shadow-inner">
              <Sparkles className="h-5 w-5 text-purple-700" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight text-purple-800">Aurora Automations</div>
              <div className="text-xs text-purple-500">AI for local busniness</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-purple-700 transition" href="#services">Services</a>
            <a className="hover:text-purple-700 transition" href="#cases">Case Studies</a>
            <a className="hover:text-purple-700 transition" href="#process">Process</a>
            <a className="hover:text-purple-700 transition" href="#about">About</a>
            <a className="hover:text-purple-700 transition" href="#contact">Contact</a>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
              <a href="#contact">Book a Free AI Audit</a>
            </Button>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border bg-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5 text-purple-600" /> : <Menu className="h-5 w-5 text-purple-600" />}
          </button>
        </Section>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t">
            <Section className="py-4 flex flex-col gap-3">
              {[
                ["Services", "#services"],
                ["Case Studies", "#cases"],
                ["Process", "#process"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href as string} onClick={() => setOpen(false)} className="py-2">
                  {label}
                </a>
              ))}
              <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white" onClick={() => setOpen(false)}>
                <a href="#contact">Book a Free AI Audit</a>
              </Button>
            </Section>
          </div>
        )}
      </header>

      {/* Hero */}
      <div
        id="home"
        className="relative overflow-hidden flex items-center justify-center min-h-screen"
      >
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.35, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute -inset-[10%]
              bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.12),transparent_35%),
                   radial-gradient(circle_at_70%_10%,rgba(168,85,247,0.10),transparent_35%),
                   radial-gradient(circle_at_50%_80%,rgba(124,58,237,0.12),transparent_40%)]"
          />
        </div>
              
        {/* Centered section */}
        <Section className="pt-16 md:pt-24 pb-6 md:pb-10 flex flex-col items-center text-center max-w-3xl">
          <Pill>
            Workflow Automations • Voice Agents • Website Building • Knowledgebases
          </Pill>
              
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-purple-900">
            AI that <span className="text-purple-600">saves hours</span> every week
          </h1>
              
          <p className="mt-4 text-lg text-purple-700/70">
            We build practical automations that plug into your tools and eliminate
            repetitive work. Start with a free, no-obligation AI audit.
          </p>
              
          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-[6px_6px_14px_rgba(0,0,0,0.12),-6px_-6px_14px_rgba(255,255,255,0.9)]"
            >
              <a href="#contact" className="inline-flex items-center gap-2">
                Book Free Audit <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/80 hover:bg-white text-purple-700 border-purple-200"
            >
              <a href="#services">Explore services</a>
            </Button>
          </div>
              
          {/* Metrics */}
          <div className="mt-8 flex justify-center gap-8 flex-wrap">
            <Metric label="Avg. time saved / employee" value="4–10 hrs/wk" />
            <Metric label="Delivery timeline" value="2–4 weeks" />
            <Metric label="Satisfaction" value="100% guarantee" />
          </div>
        </Section>
      </div>

      {/* Services */}
      <Section id="services" className="pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="max-w-3xl">
        <SectionPill>What we do</SectionPill>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-purple-900">Done-for-you AI automation services</h2>
          <p className="mt-3 text-purple-700/70">We design, build, and maintain automations across your stack. Start small, scale fast.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { icon: <Zap className="h-5 w-5" />, title: "Workflow Automation", desc: "Automate repetitive tasks across CRM, helpdesk, sheets, and email.", points: ["Zapier/n8n custom", "Slack & Teams", "Approvals & handoffs"] },
            { icon: <Globe className="h-5 w-5" />, title: "Websites for Businesses", desc: "Modern, responsive websites designed to showcase your business and drive growth.", points: ["Custom design & branding", "Fast & SEO-friendly", "Booking/contact integrations"] },
            { icon: <CalendarClock className="h-5 w-5" />, title: "Scheduling & Inbox", desc: "Smart triage, meeting scheduling, and concierge email flows.", points: ["Gmail/Outlook", "Calendly routing", "Ticket deflection"] },
            { icon: <Bot className="h-5 w-5" />, title: "Knowledge Agents", desc: "Answers from your docs, tickets, and Slack—securely, with guardrails.", points: ["Bedrock/OpenAI", "RAG over Slack/Confluence", "Secure IAM"] },
            { icon: <BarChart3 className="h-5 w-5" />, title: "Analytics & Reporting", desc: "Dashboards and alerts that make ops measurable and predictable.", points: ["ETL to BigQuery/Redshift", "KPI pipelines", "Anomaly alerts"] },
            { icon: <Cpu className="h-5 w-5" />, title: "Custom Integrations", desc: "Glue code for the tools you already use—no rip-and-replace.", points: ["Salesforce/HubSpot", "Shopify/Stripe", "Airtable/Notion"] },
          ].map((s, i) => (
            <Card key={i} className="rounded-2xl bg-white border border-purple-100 shadow-[8px_8px_18px_rgba(0,0,0,0.1),-8px_-8px_18px_rgba(255,255,255,0.9)] hover:shadow-[10px_10px_22px_rgba(0,0,0,0.12),-10px_-10px_22px_rgba(255,255,255,0.95)] transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-purple-700">{s.icon}<span className="font-semibold">{s.title}</span></div>
                <CardDescription className="text-purple-600">{s.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {s.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-purple-800"><Check className="h-4 w-4 mt-0.5 text-purple-600" /> {p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <ClientsSection/>

      {/* Case studies */}
      {/* <Section id="cases" className="py-16 md:py-24">
        <div className="max-w-3xl">
          <Pill>Proof &gt; promises</Pill>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-purple-900">Recent wins & measurable results</h2>
          <p className="mt-3 text-purple-700/70">A snapshot of the outcomes we deliver. Ask for full anonymized reports during your audit.</p>
        </div>
        <Tabs defaultValue="cs1" className="mt-8">
          <TabsList>
            <TabsTrigger value="cs1">Support deflection</TabsTrigger>
            <TabsTrigger value="cs2">Ops automations</TabsTrigger>
            <TabsTrigger value="cs3">Sales enablement</TabsTrigger>
          </TabsList>
          <TabsContent value="cs1" className="mt-6">
            <Card className="rounded-2xl bg-white border border-purple-100 shadow-[8px_8px_18px_rgba(0,0,0,0.1),-8px_-8px_18px_rgba(255,255,255,0.9)]">
              <CardHeader>
                <CardTitle className="text-purple-800">E‑commerce helpdesk agent</CardTitle>
                <CardDescription className="text-purple-600">RAG over FAQ, Zendesk macros, and order data.</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-4 gap-6">
                <Metric label="Ticket deflection" value="42%" />
                <Metric label="First response time" value="-71%" />
                <Metric label="CSAT" value="+1.2 pts" />
                <Metric label="Time to launch" value="3 weeks" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cs2" className="mt-6">
            <Card className="rounded-2xl bg-white border border-purple-100 shadow-[8px_8px_18px_rgba(0,0,0,0.1),-8px_-8px_18px_rgba(255,255,255,0.9)]">
              <CardHeader>
                <CardTitle className="text-purple-800">Logistics back-office automations</CardTitle>
                <CardDescription className="text-purple-600">Document parsing, invoice matching, and Slack approvals.</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-4 gap-6">
                <Metric label="Hours saved / mo" value="380" />
                <Metric label="Error rate" value="-63%" />
                <Metric label="Payback" value="&lt; 2 mo" />
                <Metric label="SLA compliance" value="99.5%" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cs3" className="mt-6">
            <Card className="rounded-2xl bg-white border border-purple-100 shadow-[8px_8px_18px_rgba(0,0,0,0.1),-8px_-8px_18px_rgba(255,255,255,0.9)]">
              <CardHeader>
                <CardTitle className="text-purple-800">Sales research co‑pilot</CardTitle>
                <CardDescription className="text-purple-600">Enrichment, summaries, and email drafts in HubSpot.</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-4 gap-6">
                <Metric label="Meeting volume" value="+28%" />
                <Metric label="Ramp time" value="-35%" />
                <Metric label="AEs assisted" value="25" />
                <Metric label="Time to launch" value="2 weeks" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Section> */}

      {/* Process */}
      <Section id="process" className="py-16 md:py-24">
        <div className="max-w-3xl">
        <SectionPill>How we work</SectionPill>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-purple-900">Fast, safe, outcomes‑first</h2>
          <p className="mt-3 text-purple-700/70">A clear path from idea → shipped automation, with security from day one.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-4 gap-5">
          {[
            { title: "Discovery", desc: "45‑min audit to identify 2–3 high‑ROI workflows.", badge: "Week 0" },
            { title: "Design", desc: "Data access, prompts, guardrails, and UX flows.", badge: "Week 1" },
            { title: "Build", desc: "Ship a vertical slice; iterate with stakeholders.", badge: "Weeks 2–3" },
            { title: "Launch", desc: "Enablement, dashboards, and fallbacks.", badge: "Week 4" },
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl bg-white border border-purple-100 shadow-[8px_8px_18px_rgba(0,0,0,0.1),-8px_-8px_18px_rgba(255,255,255,0.9)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-purple-800">{step.title}</CardTitle>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 border border-purple-200">{step.badge}</Badge>
                </div>
                <CardDescription className="text-purple-600">{step.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <Accordion type="single" collapsible className="mt-8">
          <AccordionItem value="item-1">
            <AccordionTrigger>What tools and models do you support?</AccordionTrigger>
            <AccordionContent>
              AWS Bedrock, OpenAI, Google Vertex; orchestration with custom code, Zapier, and n8n; integrations across Slack, HubSpot, Salesforce, Notion, Airtable, Gmail/Outlook, and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do you handle security and privacy?</AccordionTrigger>
            <AccordionContent>
              Principle of least privilege, encrypted secrets, audit logs, PII redaction, and opt‑in data retention. We follow SOC2‑friendly practices and provide a security brief.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What does pricing look like?</AccordionTrigger>
            <AccordionContent>
              Fixed‑fee pilots (2–4 weeks) with clear deliverables; optional retainers for maintenance. 
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* About */}
      <Section id="about" className="py-16 md:py-24">
        <div className="max-w-3xl">
        <SectionPill>About Us</SectionPill>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-purple-900">Builders who love boring problems</h2>
          <p className="mt-3 text-purple-700/70">We’re engineers and designers obsessed with making teams faster. We meet you where you are—no rip‑and‑replace—and ship solutions in weeks, not quarters.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          <Card className="rounded-2xl bg-white border border-purple-100 shadow-[8px_8px_18px_rgba(0,0,0,0.1),-8px_-8px_18px_rgba(255,255,255,0.9)]">
            <CardHeader>
              <CardTitle className="text-purple-800">Principles</CardTitle>
              <CardDescription className="text-purple-600">Safety first. Ship value weekly. Automate the measurable.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="rounded-2xl bg-white border border-purple-100 shadow-[8px_8px_18px_rgba(0,0,0,0.1),-8px_-8px_18px_rgba(255,255,255,0.9)]">
            <CardHeader>
              <CardTitle className="text-purple-800">Stack</CardTitle>
              <CardDescription className="text-purple-600">Bedrock • OpenAI • n8n • Slack • HubSpot • BigQuery • AWS</CardDescription>
            </CardHeader>
          </Card>
          <Card className="rounded-2xl bg-white border border-purple-100 shadow-[8px_8px_18px_rgba(0,0,0,0.1),-8px_-8px_18px_rgba(255,255,255,0.9)]">
            <CardHeader>
              <CardTitle className="text-purple-800">Guarantee</CardTitle>
              <CardDescription className="text-purple-600">If we don’t deliver measurable value in 30 days, you don’t pay.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <ContactFormSection/>
  

      {/* CTA */}
      <Section className="py-12">
        <div className="rounded-2xl p-8 md:p-10 bg-white border border-purple-100 shadow-[10px_10px_24px_rgba(0,0,0,0.12),-10px_-10px_24px_rgba(255,255,255,0.9)]">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-purple-900">Ready to reclaim your team’s time?</h3>
              <p className="mt-2 text-purple-700/70">Get a free automation plan tailored to your stack and workflows.</p>
            </div>
            <div className="flex md:justify-end items-center gap-3">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white shadow-[6px_6px_14px_rgba(0,0,0,0.12),-6px_-6px_14px_rgba(255,255,255,0.9)]"><a href="#contact">Book Free Audit</a></Button>
              <Button asChild variant="outline" size="lg" className="bg-white/80 hover:bg-white text-purple-700 border-purple-200"><a href="#services">See Services</a></Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-white/70">
        <Section className="py-10 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 grid place-items-center rounded-lg bg-purple-200 border shadow-inner"><Sparkles className="h-4 w-4 text-purple-700" /></div>
              <span className="font-semibold text-purple-800">Aurora Automations</span>
            </div>
            <p className="text-sm text-purple-700/80 mt-3 max-w-prose">We build practical AI automations for real teams. No hype—just shipped outcomes.</p>
          </div>
          <div>
            <div className="font-medium mb-3 text-purple-800">Company</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#process" className="hover:underline">Process</a></li>
              <li><a href="#cases" className="hover:underline">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3 text-purple-800">Contact</div>
            <ul className="space-y-2 text-sm text-purple-700/80">
              <li>hello@aurora‑automations.dev</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </Section>
        <Section className="pb-8 -mt-6 text-xs text-purple-700/70 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Aurora Automations. All rights reserved.</span>
          <div className="flex gap-3">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </Section>
      </footer>

    </div>
  );
}

