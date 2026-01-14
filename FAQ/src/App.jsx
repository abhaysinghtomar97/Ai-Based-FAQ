import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');       
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    try {
      const res = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMsg }), 
      });

      const data = await res.json();
      setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Error connecting to AI.' }]);
    }
  };


  return (
    <div className="container">
      <div className="header">
        <h1>Welcome to FQA</h1>
      </div>

      <div className="main">
        {messages.map((m, index) => (
          <div
            key={index}
            className={m.sender === 'user' ? 'msg user' : 'msg bot'}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="input_area">
        <form
          onSubmit={(e) => {
            e.preventDefault();  
            handleSend();
          }}
          style={{ display: 'contents' }} 
        >
          <div className="input_btn_area">
            <input
              type="text"
              value={input}
              onChange={handleChange}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Enter your query here"
            />
            <button
              type="button"
              className="send_btn"
              onClick={handleSend}
            >
              Send
            </button>

          </div>
        </form>
        <div className="quick-buttons">
          <button type="button" onClick={() => setInput("What are pesticide prices?")}>Pesticide Prices</button>
          <button type="button" onClick={() => setInput("Best seeds for wheat?")}>Best Wheat Seeds</button>
          <button type="button" onClick={() => setInput("Fertilizer usage?")}>Fertilizer Guide</button>
        </div>
      </div>

    </div>
  );
}

export default App; 
