import { Router } from 'express'

import * as userController from '../../controllers/User'
import { createUserValidator, updateUserValidator } from '../../validations/User'

const routes = Router()

routes.get('/', userController.index)
routes.get('/:userId', userController.show)
routes.post('/', createUserValidator, userController.create)
routes.patch('/:userId', updateUserValidator, userController.update)
routes.delete('/:userId', userController.remove)

export default routes
