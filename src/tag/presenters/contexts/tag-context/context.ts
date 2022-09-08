import { createContext, useContext } from 'react';
import { Tag, TagStatus } from '@/tag/domain/entities';

type PropsTagContext = {
  currentViewTag: TagStatus;
  loading?: boolean;
  tags: Tag[];
  create: (tag: Tag) => Promise<void>;
  getAllTags: () => Promise<void>;
  modifyTagStatus: (tagStatus: TagStatus, tagId: string) => Promise<void>;
  setCurrentViewTag: (viewTag: TagStatus) => Promise<void>;
  deleteTag: (tagId: string) => Promise<void>;
};

export const TagContext = createContext<PropsTagContext>({} as PropsTagContext);

export const useTagContext = (): PropsTagContext => useContext(TagContext);
