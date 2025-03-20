import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const MetaTags = (page) => {
  console.log(page,"<-------------------- Page")
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    if (!page) return; 
    fetch(`https://pabitraschool.onrender.com/api/meta/${page}`)
      .then((res) => res.json())
      .then((data) => {
        setMeta(data);
      })
      .catch((err) => console.error("Error fetching meta tags:", err));
  }, [page]);

  if (!meta) return null;
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="1940546513140752" />
    </Helmet>
  );
};

export default MetaTags;
