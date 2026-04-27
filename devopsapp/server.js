const express = require('express');
const app = express();

// Use PORT from environment (Kubernetes), fallback to 8080
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from DevOps App running on AKS!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

