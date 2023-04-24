import { createContext, useContext } from 'react';
import { Socket } from 'socket.io-client';

export type SocketProps = {
  connection: Socket<any, any>;
};

export const SocketConnectionContext = createContext<SocketProps>({} as SocketProps);

export const useSocketContext = (): SocketProps => useContext(SocketConnectionContext);
