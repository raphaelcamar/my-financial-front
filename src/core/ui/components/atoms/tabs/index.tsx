import React, { ReactElement, ReactNode, useState } from 'react';
import { Container, Item, TabContainer, TabItems } from './styles';
import { randomId } from '@/core/utils';

export type TabItem = {
  id: string;
  title: string;
  content: ReactNode;
};

type ITabs = {
  tabs: TabItem[];
};

export const Tabs = ({ tabs }: ITabs): ReactElement => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs?.[0]?.id);

  const firstItem = tabs?.[0]?.id;
  const lastItem = tabs?.at(-1).id;

  return (
    <Container>
      <TabItems>
        {tabs.map(tab => (
          <Item
            key={randomId()}
            firstItem={firstItem === tab.id}
            length={tabs.length}
            type="button"
            selected={selectedTab === tab.id}
            onClick={() => setSelectedTab(tab.id)}
            isLastItem={lastItem === tab.id}
          >
            {tab.title}
          </Item>
        ))}
      </TabItems>
      <TabContainer>
        {tabs.map(content => (
          <>{content.id === selectedTab && content.content}</>
        ))}
      </TabContainer>
    </Container>
  );
};
