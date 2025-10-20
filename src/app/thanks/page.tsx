import Link from "next/link";

export default function Thanks() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-slate-900">
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-[Nunito] font-bold text-[#4b2e1d]">
          Thank you — we’ve received your message.
        </h1>

        <p className="mt-4 text-lg font-[Poppins]">
          We’ll reply to the email you provided. For anything urgent, email{" "}
          <span className="font-semibold">hello@svtc.uk</span>.
        </p>

        <Link href="/" className="inline-block mt-8">
          <span className="rounded-2xl bg-[#d0893e] hover:bg-[#c39b6a] text-black px-5 py-3 font-[Poppins]">
            Return to homepage
          </span>
        </Link>
      </div>
    </main>
  );
}
