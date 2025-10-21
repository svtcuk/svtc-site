export const metadata = {
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
