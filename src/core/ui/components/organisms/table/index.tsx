/* eslint-disable no-nested-ternary */
import React from 'react';
import { Typography, Icon, TableContainer, Table, Tbody, THead, Th, Td, Tr } from '@/core/ui/components/atoms';
import { TitleGroup, WrapperIcons } from './styles';
import { randomId } from '@/core/utils';

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
        <Tr>
          {dataTitles?.map(dataTitle => (
            <Td key={randomId()} onClick={() => dataTitle?.onClick()}>
              <TitleGroup>
                <Typography size="small">{dataTitle.title}</Typography>
                {dataTitle?.sorteable && (
                  <WrapperIcons>
                    <Icon icon="miniArrowUp" />
                    <Icon icon="miniArrowDown" />
                  </WrapperIcons>
                )}
              </TitleGroup>
            </Td>
          ))}
        </Tr>
      </THead>
      <Tbody>{children}</Tbody>
    </Table>
  </TableContainer>
);
