export interface Link {
  title: string;
  routeTo: string;
}

export type Links = { [key: string]: Link[] };
