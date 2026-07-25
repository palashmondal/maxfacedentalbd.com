import { Fragment, type ReactNode } from "react";

/**
 * Fill `{token}` placeholders in a translated string with React nodes.
 * Lets a dictionary keep a natural, translatable sentence while the component
 * supplies interpolated (and optionally bolded) values.
 *
 *   tmpl(dict.hero.bio, { doctor: <strong>{site.doctor}</strong>, name: … })
 */
export function tmpl(
  text: string,
  map: Record<string, ReactNode>,
): ReactNode[] {
  const parts = text.split(/(\{[a-zA-Z0-9_]+\})/g);
  return parts.map((part, i) => {
    const match = part.match(/^\{([a-zA-Z0-9_]+)\}$/);
    if (match && match[1] in map) {
      return <Fragment key={i}>{map[match[1]]}</Fragment>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/** Plain-string version of {@link tmpl} for attributes / non-JSX contexts. */
export function fill(text: string, map: Record<string, string>): string {
  return text.replace(/\{([a-zA-Z0-9_]+)\}/g, (whole, key) =>
    key in map ? map[key] : whole,
  );
}
