import React, { useState, useEffect, createContext, useContext } from 'react';
import type { MessageCommunicationContextProps } from './contracts';

export const MessageCommunicationContext = createContext<MessageCommunicationContextProps>(
  {} as MessageCommunicationContextProps
);
export const useMessageCommunicationContext = (): MessageCommunicationContextProps =>
  useContext(MessageCommunicationContext);

export const MessageCommunicationProvider = ({ children }) => {
  const [communicationActive, setCommunicationActive] = useState(false);

  const getCommunication = (event: MessageEvent) => {
    // console.log('Mensagem recebida:', event.data);
  };

  useEffect(() => {
    window.addEventListener('message', getCommunication);

    return () => {
      window.removeEventListener('message', getCommunication);
    };
  }, []);

  const postMessageBody = <T,>(payloadType: string, body: T) => {
    // if (!communicationActive) throw new Error('Could not make communication with the service');

    window.parent.postMessage(JSON.stringify({ payloadType, body }), 'http://127.0.0.1:5500/postMessage/index.html');
  };

  return (
    <MessageCommunicationContext.Provider value={{ postMessageBody }}>{children}</MessageCommunicationContext.Provider>
  );
};
