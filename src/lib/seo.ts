import { useEffect } from "react";

type MetaTag =
  | { name: string; content: string }
  | { property: string; content: string };

interface SeoOptions {
  title?: string;
  description?: string;
  canonical?: string;
  meta?: MetaTag[];
}

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, canonical, meta = [] }: SeoOptions) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta(`meta[name="description"]`, "name", "description", description);
    if (canonical) setLink("canonical", canonical);
    for (const m of meta) {
      if ("name" in m) setMeta(`meta[name="${m.name}"]`, "name", m.name, m.content);
      else setMeta(`meta[property="${m.property}"]`, "property", m.property, m.content);
    }
  }, [title, description, canonical, JSON.stringify(meta)]);
}
