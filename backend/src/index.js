import express from 'express';
import cors from 'cors';
import itemRoutes from './routes/itemRoute.js';
import empresaRoutes from './routes/empresaRoute.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api', itemRoutes);
app.use('/api', empresaRoutes);

app.listen(port, () => (
    console.log(`listening on port ${port}`)
));
