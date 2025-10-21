import type { Metadata } from "next";

import "./globals.css";
export const metadata: Metadata = {
  title: "SVTC",
  description: "Sexual Violence Training & Consultancy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
cat > src/app/page.tsx <<'TS'
export default function Home() {
  return (
    <main style={{padding:"2rem", fontFamily:"system-ui"}}>
      <h1>SVTC</h1>
      <p>Static export test. <a href="/thanks" style={{textDecoration:"underline"}}>Go to /thanks</a></p>
    </main>
  );
}
