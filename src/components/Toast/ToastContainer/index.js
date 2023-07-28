import React, { useCallback, useEffect, useState } from 'react';
import { Container } from './styles';
import { ToastMessage } from '../ToastMessage';
import { toastEventManager } from '../../../utils/toast';

export function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(), type, text, duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((id) => {
    setMessages((prevState) => prevState.filter((m) => m.id !== id));
  }, []);

  return (
    <Container tabIndex={0} role="button">
      {
        messages.map((message) => (
          <ToastMessage
            key={message.id}
            message={message}
            onRemoveMessage={handleRemoveMessage}
          />
        ))
      }
    </Container>
  );
}
