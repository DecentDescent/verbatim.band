import Head from "next/head";

export default (props) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>Verbatim</title>
    <meta
      name="description"
      content="Tata Bojs je česká alternativní hudební skupina, vznikla v roce 1988. Zakládajícími členy jsou Mardoša a Milan Cais, ve stálé sestavě hrají i Vladimír Bár, Dušan Neuwerth a Jiří Hradil. Jejich Nanoalbum získalo v roce 2004 čtyři Zlaté anděly."
    />
    <meta property="og:title" content="Verbatim" />
    <meta
      property="og:description"
      content="Tata Bojs je česká alternativní hudební skupina, vznikla v roce 1988. Zakládajícími členy jsou Mardoša a Milan Cais, ve stálé sestavě hrají i Vladimír Bár, Dušan Neuwerth a Jiří Hradil. Jejich Nanoalbum získalo v roce 2004 čtyři Zlaté anděly."
    />
    <meta property="og:image" content="/static/og_image.jpg" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta property="og:type" content="website" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/favicon/safari-pinned-tab.svg"
      color="#2e9dc6"
    />
    <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#2b5797" />
    <meta
      name="msapplication-config"
      content="/static/favicon/browserconfig.xml"
    />
    <meta name="theme-color" content="#ffffff" />
    <link rel="stylesheet" type="text/css" href="/static/styles.css" />
  </Head>
);
