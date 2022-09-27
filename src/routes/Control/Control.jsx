import { useCallback } from 'react'

import './Control.css'
import { useSocketIo } from '../../hooks/useSocketIo'

function Control() {
  const { socket, isConnected } = useSocketIo()

  const onNext = useCallback(() => {
    socket.emit("command", "next");
  }, [socket]);
  
  const onPrev = useCallback(() => {
    socket.emit("command", "prev");
  }, [socket]);

  return (
    <div>
      Status: { isConnected ? 'connected' : 'disconnected' }
      <div class="controller">
        <button class="controller__nav" onClick={onPrev}>
          PREV
        </button>
        <button class="controller__nav" onClick={onNext}>
          NEXT        </button>
      </div>
    </div>
  )
}

export default Control;