export interface ISidebaroption {
  isAccordion: boolean;
  icon: string;
  title: string;
  path: string;
  accordionItems?: Omit<ISidebaroption, 'accordionItems' | 'isAccordion'>[];
}

export enum SIZES {
  width = 286,
}
