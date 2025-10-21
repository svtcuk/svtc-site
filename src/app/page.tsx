export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>SVTC</h1>
      <p>
        Static export test.{" "}
        <a href="/thanks" style={{ textDecoration: "underline" }}>
          Go to /thanks
        </a>
      </p>
    </main>
  );
}
