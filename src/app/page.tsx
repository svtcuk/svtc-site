import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

type ApproachProps = {
  icon: string;
  title: string;
  desc: string;
};

function Approach({ icon, title, desc }: ApproachProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}

type TestimonialProps = {
  quote: string;
  name: string;
  org?: string;
};

function Testimonial({ quote, name, org }: TestimonialProps) {
  return (
    <Card className="rounded-2xl h-full">
      <CardContent className="pt-6">
        <p className="italic">“{quote}”</p>
        <p className="mt-4 text-sm text-slate-600">
          {name}
          {org ? ` — ${org}` : ""}
        </p>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-slate-900">
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-[Nunito] font-bold text-[#4b2e1d]">
          Specialist Sexual Violence Training & Consultancy
        </h1>
        <p className="mt-4 text-lg font-[Poppins]">
          Empowering professionals to respond effectively and compassionately to
          survivors of sexual violence.
        </p>
        <Link href="/#contact" className="inline-block mt-8">
          <span className="rounded-2xl bg-[#d0893e] hover:bg-[#c39b6a] text-black px-5 py-3 font-[Poppins]">
            Contact us
          </span>
        </Link>
      </div>
    </main>
  );
}
