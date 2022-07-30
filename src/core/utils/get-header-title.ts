export const getHeaderTitle = (uri: string): string => {
  const dataTitle = {
    '/transacoes': 'Transações',
    '/perfil': 'Meu perfil',
    '/minha-carteira': 'Minha carteira',
    '/informacoes-pessoais': 'Informacoes pessoais',
  };

  return dataTitle?.[uri] || '';
};
