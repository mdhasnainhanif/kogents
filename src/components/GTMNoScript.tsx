"use client";

import { useEffect } from "react";

export default function GTMNoScript() {
  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        const iframe = document.createElement("iframe");
        iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-TDRT95RZ";
        iframe.height = "0";
        iframe.width = "0";
        iframe.style.display = "none";
        iframe.style.visibility = "hidden";
        document.body.prepend(iframe);
      }, 20000); // 10s delay
    };

    // If already loaded, run immediately; otherwise wait for load.
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}
