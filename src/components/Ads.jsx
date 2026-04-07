import { useEffect } from "react";

export default function AdBlock() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-XXXX"
      data-ad-slot="YYYY"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}