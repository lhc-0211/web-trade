export function getBrowserPreferredLang(): "vi" | "en" | "other" {
  const langs = navigator.languages || [navigator.language || "en"];

  const primary = (langs[0] || "en").toLowerCase().split("-")[0];

  if (primary === "vi") return "vi";
  if (primary === "en") return "en";
  return "vi";
}
