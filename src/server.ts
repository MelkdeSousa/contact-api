import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import { PORT } from './config/environment'
import routesV1 from './routes/v1'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/', routesV1)

app.get('/', (_, res) => res.json({ message: 'welcome to Contact API' }))

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
