import { AvailableIcons } from '@/core/ui/components/atoms';

export interface ISidebaroption {
  isAccordion?: boolean;
  icon?: AvailableIcons;
  title: string;
  path?: string;
  soon?: boolean;
  accordionItems?: Omit<ISidebaroption, 'accordionItems' | 'isAccordion'>[];
}

export enum SIZES {
  width = 286,
  marginLeft = 87,
}
