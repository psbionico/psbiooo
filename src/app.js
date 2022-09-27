import express from 'express'
import indexRoutes from './routes'
const app = express()
app.set("port", process.env.PORT || 3000);

app.use(express.static('views'))
app.use(indexRoutes);
export default app;