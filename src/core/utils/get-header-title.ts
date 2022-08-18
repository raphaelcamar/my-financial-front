export const getHeaderTitle = (uri: string): string => {
  const dataTitle = {
    '/transacoes': 'Transações',
    '/perfil': 'Meu perfil',
    '/minha-carteira': 'Minha carteira',
    '/informacoes-pessoais': 'Informacoes pessoais',
    '/recorrencias-mensais': 'Recorrências Mensais',
    '/tags': 'Tags',
  };

  return dataTitle?.[uri] || '';
};
