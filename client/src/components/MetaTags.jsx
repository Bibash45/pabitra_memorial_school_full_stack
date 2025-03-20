import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const MetaTags = () => {
  const { page } = useParams();
  const [meta, setMeta] = useState({
    title: "Pabitra School",
    description: "Pabitra School",
    image: "https://pabitraschool.onrender.com/assets/pabitralogo1-CAlD7-Tg.png",
    url: window.location.href,
  });

  useEffect(() => {
    fetch(`https://pabitraschool.onrender.com/${page}`)
      .then((res) => res.json())
      .then((data) => {
        setMeta(data);
      })
      .catch((err) => console.error("Error fetching meta tags:", err));
  }, [page]);

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
