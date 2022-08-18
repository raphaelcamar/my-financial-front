import { createContext, useContext } from 'react';
import { Tag } from '@/tag/domain/entities';

type PropsTagContext = {
  tags: Tag[];
  getAllTags: () => Promise<void>;
};

export const TagContext = createContext<PropsTagContext>({} as PropsTagContext);

export const useTagContext = (): PropsTagContext => useContext(TagContext);
