import React, { ReactElement, useState } from 'react';
import { Button } from '@raphaelcamar/ui-lib';
import {
  BodyTable,
  Container,
  FirstRow,
  HeaderTable,
  IconIndicator,
  Line,
  Row,
  THead,
  WrapperActionTableButtons,
  WrapperBody,
} from './styles';
import { Icon, Tbody, Td, TextEllipsis, Typography } from '@/core/ui/components/atoms';
import { IconButton } from '@/core/ui/components/molecules';

export const TableTransactions = (): ReactElement => {
  const [transactions, setTransactions] = useState();

  return (
    <Container>
      <HeaderTable>
        <Typography size="xlarge" weight={700}>
          Transações
        </Typography>
        <Button>Adicionar</Button>
      </HeaderTable>
      <BodyTable>
        <THead>
          <Td withoutLine>
            <Typography weight={600} color="grey" shade={800}>
              Tipo
            </Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600} color="grey" shade={800}>
              Observação
            </Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600} color="grey" shade={800}>
              Status
            </Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600} color="grey" shade={800}>
              Tópico
            </Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600} color="grey" shade={800}>
              Valor
            </Typography>
          </Td>
          <Td withoutLine>
            <Typography weight={600} color="grey" shade={800}>
              Ações
            </Typography>
          </Td>
        </THead>
        <Tbody>
          <WrapperBody>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
            <Row>
              <FirstRow>
                <Line />
                <IconIndicator>
                  <Icon icon="wallet" color="grey" shade="50" size={16} />
                </IconIndicator>
              </FirstRow>
              <Typography type="p">
                <TextEllipsis>Observação da transaçãoasdasdasdas a dsdasadsdasas dasdasd</TextEllipsis>
              </Typography>
              <Typography type="p" color="success">
                Concluído
              </Typography>
              <Typography type="p">Saúde</Typography>

              <Typography type="p">R$ 510,30</Typography>

              <WrapperActionTableButtons>
                <IconButton
                  onClick={() => null}
                  icon="pen"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
                <IconButton
                  onClick={() => null}
                  icon="trash"
                  color="grey"
                  shade="200"
                  padding={[9, 9]}
                  iconProps={{ color: 'primary', shade: '500', size: 12 }}
                />
              </WrapperActionTableButtons>
            </Row>
          </WrapperBody>
        </Tbody>
      </BodyTable>
    </Container>
  );
};
