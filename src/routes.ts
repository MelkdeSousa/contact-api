import { Router } from 'express'

const routes = Router()

routes.get('/', (_, res) => res.json({ message: 'welcome to Contact API' }))

export default routes
