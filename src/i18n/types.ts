export type Language = "en" | "hu" | "tr";

export interface Translations {
  [key: string]: string | Translations;
}
