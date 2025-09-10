import { Briefcase, Stethoscope, Scissors, Wrench, Store, Building } from "lucide-react";
import Section from "@/components/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ClientsSection() {
  const clients = [
    {
      icon: <Briefcase className="h-6 w-6 text-purple-600" />,
      title: "Professional Services",
      desc: "Lawyers, accountants, consultants — automate scheduling, intake, and client follow-ups.",
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-purple-600" />,
      title: "Healthcare Providers",
      desc: "Doctors, dentists, therapists — streamline patient booking, reminders, and intake forms.",
    },
    {
      icon: <Scissors className="h-6 w-6 text-purple-600" />,
      title: "Beauty & Wellness",
      desc: "Salons, spas, personal trainers — manage appointments and customer engagement automatically.",
    },
    {
      icon: <Wrench className="h-6 w-6 text-purple-600" />,
      title: "Trades & Home Services",
      desc: "Plumbers, electricians, contractors — automate calls, job scheduling, and follow-ups.",
    },
    {
      icon: <Store className="h-6 w-6 text-purple-600" />,
      title: "Retail & E-commerce",
      desc: "Small shops and online stores — connect inventory, chatbots, and email flows with ease.",
    },
    {
      icon: <Building className="h-6 w-6 text-purple-600" />,
      title: "Real Estate",
      desc: "Agents and property managers — automate lead capture, showings, and inquiry responses.",
    },
  ];

  return (
    <Section id="clients" className="py-16 md:py-24">
      <div className="text-center mb-10">
        <span className="block text-base font-semibold text-purple-600">Who we work with</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-purple-900">
          Clients that benefit most
        </h2>
        <p className="mt-3 text-purple-700/70 max-w-2xl mx-auto">
          Our automations help service-based businesses save hours every week. Here are some of the
          industries we serve.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {clients.map((c, i) => (
          <Card
            key={i}
            className="rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                {c.icon}
                <CardTitle className="text-purple-800">{c.title}</CardTitle>
              </div>
              <CardDescription className="mt-2 text-purple-600">{c.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
