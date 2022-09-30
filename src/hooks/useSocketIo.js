import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import io from 'socket.io-client';

const socket = io('https://socket-oakley.onrender.com');

export const useSocketIo = () => {
  const { room } = useParams()
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('pretending to connect into...', room)
      socket.emit('room', room);

      // socket.join(room);
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
