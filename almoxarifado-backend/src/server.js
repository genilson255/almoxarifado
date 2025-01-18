const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const produtosRoutes = require('./routes/produtos');
const port = 1010;
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/produtos', produtosRoutes);
app.listen(port, () => {
    console.log(`O servidor esta rodando na porta ${port}`);
    
})




