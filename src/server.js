const express = require('express');
const { addEntry, listEntries, editEntry, deleteEntry, searchEntries } = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.post('/api/entries', addEntry);
app.get('/api/entries', listEntries);
app.put('/api/entries/:id', editEntry);
app.delete('/api/entries/:id', deleteEntry);
app.get('/api/search', searchEntries);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});