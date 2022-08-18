import React, { useReducer } from 'react';
import { TagContext } from './context';
import { initialState, reducer } from './reducers';

export const TagProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllTags = (): Promise<void> =>
    // TODO
    null;

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
