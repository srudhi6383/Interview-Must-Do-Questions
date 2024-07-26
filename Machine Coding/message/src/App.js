import React, { useState, useRef, useEffect } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    'Hello!',
    'How are you?',
    'I am good, thanks!',
    'What about you?'
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleAddMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <div style={{ 
        height: '300px', 
        overflowY: 'auto', 
        border: '1px solid #ccc', 
        padding: '10px' 
      }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            {message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ marginTop: '10px' }}>
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder="Type a message" 
          style={{ width: '70%', padding: '5px' }} 
        />
        <button 
          onClick={handleAddMessage} 
          style={{ padding: '5px 10px', marginLeft: '10px' }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

const App = () => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Chat Window</h1>
    <ChatWindow />
  </div>
);

export default App;
