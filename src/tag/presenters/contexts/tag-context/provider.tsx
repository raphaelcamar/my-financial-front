import React, { useReducer } from 'react';
import { GetAllTags, GetTagByStatus, ModifyStatusTag } from '@/tag/data/use-cases';
import { TagRepositoryData } from '@/tag/infra';
import { TagContext } from './context';
import { initialState, reducer } from './reducers';
import { fetchTags, fetchTagsByStatus } from './actions';
import { TagStatus } from '@/tag/domain/entities';

export const TagProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllTags = async (): Promise<void> => {
    const tagRepository = new TagRepositoryData();

    const useCase = new GetAllTags(tagRepository);
    const result = await useCase.execute();

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

    const tagRepository = new TagRepositoryData();
    const useCase = new GetTagByStatus(tagRepository, viewTag);

    const tags = await useCase.execute();
    dispatch(fetchTags(tags));
  };

  return (
    <TagContext.Provider
      value={{
        tags: state.tags,
        currentViewTag: state.currentViewTag,
        setCurrentViewTag,
        getAllTags,
        modifyTagStatus,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};
