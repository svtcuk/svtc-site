import Link from "next/link";

export default function Thanks() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Thank you — we’ve received your message.</h1>
      <p>
        <Link href="/" style={{ textDecoration: "underline" }}>
          Return to homepage
        </Link>
      </p>
    </main>
  );
}
