require('dotenv').config();
const express = require('express');
const Groq = require('groq-sdk');
const cors = require('cors');

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

app.post('/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'No message' });
  }

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful FAQ bot for a seed/pesticide shop in UP, India. Answer in short Hindi/English mix."
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "llama-3.3-70b-versatile", 
      temperature: 0.7,
      max_tokens: 500
    });

    const reply = completion.choices[0].message.content;
    console.log('✓ Response generated successfully');
    res.json({ reply });
  } catch (error) {
    console.error('AI error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => res.send('Backend OK'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend http://localhost:${PORT}`));