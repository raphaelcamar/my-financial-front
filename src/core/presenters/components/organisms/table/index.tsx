/* eslint-disable no-nested-ternary */
import React from 'react';
import { Typography, Icon, TableContainer, Table, Tbody, THead, Th } from '@/core/presenters/components/atoms';
import { TitleGroup, WrapperIcons } from './styles';

export type TableHeadProps = {
  sorteable?: boolean;
  title: string;
  onClick?: () => void;
};

interface ITableData {
  dataTitles?: TableHeadProps[];
}

export const TableData: React.FC<ITableData> = ({ dataTitles, children }) => (
  <TableContainer>
    <Table>
      <THead>
        {dataTitles?.map(dataTitle => (
          <Th onClick={() => dataTitle?.onClick()}>
            <TitleGroup>
              <Typography size="small">{dataTitle.title}</Typography>
              {dataTitle?.sorteable && (
                <WrapperIcons>
                  <Icon icon="miniArrowUp" />
                  <Icon icon="miniArrowDown" />
                </WrapperIcons>
              )}
            </TitleGroup>
          </Th>
        ))}
      </THead>
      <Tbody>{children}</Tbody>
    </Table>
  </TableContainer>
);
