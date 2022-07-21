export type PackType = {
  id: string;
  title: string;
  cards: CardType[];
};

export type CardType = {
  id: string;
  title: string;
  content: string;
};
