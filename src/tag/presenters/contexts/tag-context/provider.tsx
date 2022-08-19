import React, { useReducer } from 'react';
import { GetAllTags } from '@/tag/data/use-cases';
import { TagRepositoryData } from '@/tag/infra';
import { TagContext } from './context';
import { initialState, reducer } from './reducers';
import { fetchTags } from './actions';

export const TagProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllTags = async (): Promise<void> => {
    const tagRepository = new TagRepositoryData();
    const useCase = new GetAllTags(tagRepository);

    const result = await useCase.execute();
    dispatch(fetchTags(result));
  };

  return (
    <TagContext.Provider
      value={{
        tags: state.tags,
        getAllTags,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};
