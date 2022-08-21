import React, { useReducer, useState } from 'react';
import { CreateTag, GetAllTags, GetTagByStatus, ModifyStatusTag } from '@/tag/data/use-cases';
import { TagRepositoryData } from '@/tag/infra';
import { TagContext } from './context';
import { initialState, reducer } from './reducers';
import { fetchTags, fetchTagsByStatus } from './actions';
import { Tag, TagStatus } from '@/tag/domain/entities';
import { delay } from '@/core/utils';

export const TagProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllTags = async (): Promise<void> => {
    setLoading(true);
    await delay(2000);
    const tagRepository = new TagRepositoryData();
    const useCase = new GetAllTags(tagRepository);

    const result = await useCase.execute();

    setLoading(false);

    dispatch(fetchTags(result));
  };

  const modifyTagStatus = async (tagStatus: TagStatus, tagId: string): Promise<void> => {
    const tagRepository = new TagRepositoryData();
    const useCase = new ModifyStatusTag(tagRepository, tagStatus, tagId, state.tags);

    const updatedTags = await useCase.execute();
    dispatch(fetchTags(updatedTags));
  };

  const setCurrentViewTag = async (viewTag: TagStatus): Promise<void> => {
    dispatch(fetchTagsByStatus(viewTag));
    setLoading(true);

    const tagRepository = new TagRepositoryData();
    const useCase = new GetTagByStatus(tagRepository, viewTag);

    await delay(500);
    const tags = await useCase.execute();

    setLoading(false);
    dispatch(fetchTags(tags));
  };

  const create = async (tag: Tag): Promise<void> => {
    dispatch(fetchTagsByStatus('active'));

    const tagRepository = new TagRepositoryData();
    const useCase = new CreateTag(tagRepository, tag);

    const createdTag = await useCase.execute();

    if (createdTag) {
      setCurrentViewTag('active');
    }
  };

  return (
    <TagContext.Provider
      value={{
        currentViewTag: state.currentViewTag,
        tags: state.tags,
        loading,
        create,
        getAllTags,
        modifyTagStatus,
        setCurrentViewTag,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};
