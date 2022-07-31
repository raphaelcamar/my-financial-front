import React from 'react';
import { Container, Letter } from './styles';

interface IAvatar {
  url?: string;
  size?: number;
}

export const Avatar: React.FC<IAvatar> = ({ url, size }) => {
  const isValidUrl = (testUrl: string): boolean => {
    const reg = /http/;
    return reg.test(testUrl);
  };

  return <>{isValidUrl(url) ? <Container src={url} size={size} /> : <Letter size={size}>{url?.[0]}</Letter>}</>;
};
