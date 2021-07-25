import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import { PORT } from './config/environment'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1/', routes)

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
