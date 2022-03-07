const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your pages.
  const links = [
    { url: "/", changefreq: "daily", priority: 0.2 },
    { url: "/home", changefreq: "daily", priority: 0.1 },
    { url: "/experience", changefreq: "daily", priority: 0.4 },
    { url: "/about", changefreq: "daily", priority: 0.3 },
    { url: "/projects", changefreq: "daily", priority: 0.6 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
