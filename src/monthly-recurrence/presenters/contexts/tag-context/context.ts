import { createContext, useContext } from 'react';
import { Tag, TagStatus } from '@/monthly-recurrence/domain/entities';

type PropsTagContext = {
  currentViewTag: TagStatus;
  loading?: boolean;
  tags: Tag[];
  create: (tag: Tag) => Promise<void>;
  getAllTags: () => Promise<void>;
  modifyTagStatus: (tagStatus: TagStatus, tagId: string) => Promise<void>;
  setCurrentViewTag: (viewTag: TagStatus) => Promise<void>;
};

export const TagContext = createContext<PropsTagContext>({} as PropsTagContext);

export const useTagContext = (): PropsTagContext => useContext(TagContext);
