export type IconsId =
  | "close"
  | "search";

export type IconsKey =
  | "Close"
  | "Search";

export enum Icons {
  Close = "close",
  Search = "search",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Close]: "61697",
  [Icons.Search]: "61698",
};
