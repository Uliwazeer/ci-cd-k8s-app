const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('🚀 CI/CD App Deployed via Jenkins + K8s'));
app.get('/metrics', (req, res) => res.send('app_metrics{status="ok"} 1'));

app.listen(port, () => console.log(`App listening on port ${port}`));