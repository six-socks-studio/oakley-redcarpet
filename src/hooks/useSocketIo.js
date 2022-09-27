import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('https://socket-oakley.onrender.com');

export const useSocketIo = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on("connect_error", (error) => {
      console.log("an error has occurred into connection", error);
    });  

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  return {
    isConnected,
    lastPong,
    socket,
  }
}
