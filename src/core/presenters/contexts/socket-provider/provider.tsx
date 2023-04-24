import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';
import { useAccessContext } from '@/user/presenters';
import { SocketConnectionContext } from './context';

export const SocketProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const { user } = useAccessContext();

  const [socketConnection, setSocketConnection] = useState<Socket<any, any>>(null);

  useEffect(() => {
    if (user && !socketConnection) {
      const conn = io(process.env.BASE_URL, {
        reconnection: false,
        autoConnect: true,
        query: {
          userId: user._id,
          walletId: user.currentWallet?.id,
        },
      }).connect();

      setSocketConnection(conn);
    }
  }, [user, socketConnection]);

  return (
    <SocketConnectionContext.Provider value={{ connection: socketConnection }}>
      {children}
    </SocketConnectionContext.Provider>
  );
};
