import Link from "next/link";

export default function Thanks() {
  return (
    <main className="min-h-screen bg-cream text-slate-900">
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-cocoa">
          Thank you — we’ve received your message.
        </h1>
        <p className="mt-4 text-lg">
          We’ll reply to the email you provided. For anything urgent, email{" "}
          <span className="font-semibold">hello@svtc.uk</span>.
        </p>
        <Link href="/" className="inline-block mt-8">
          <span className="rounded-2xl bg-gold hover:bg-sand text-black px-5 py-3">
            Return to homepage
          </span>
        </Link>
      </div>
    </main>
  );
}
