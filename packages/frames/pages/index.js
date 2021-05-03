import Head from "next/head";

export default function Home() {
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <Head>
        <title>Frames for Bridged Appbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://appbox.bridged.xyz">Appbox</a> Frames
        </h1>

        <p>
          Get started by downloading{" "}
          <a href="https://github.com/bridgedxyz/appbox">frames sdk</a>
          <br />
          <code>yarn add @appbox.bridged.xyz/frames</code>
        </p>
        <br />
        <p>
          <a href="/flutter">
            <pre>/flutter</pre> Flutter Web app embedding `/flutter`
          </a>
        </p>
      </main>
    </div>
  );
}
