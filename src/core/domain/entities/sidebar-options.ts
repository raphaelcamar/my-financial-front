import { AvailableIcons } from './available-icons';

export interface ISidebaroption {
  isAccordion?: boolean;
  icon: AvailableIcons;
  title: string;
  path?: string;
  accordionItems?: Omit<ISidebaroption, 'accordionItems' | 'isAccordion'>[];
}

export enum SIZES {
  width = 286,
  marginLeft = 87,
}
