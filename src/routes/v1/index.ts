import { Router, ErrorRequestHandler } from 'express'
import { isCelebrateError } from 'celebrate'

import userRoutes from './User'

const routes = Router()

const errors: ErrorRequestHandler = (err, _req, res, next) => {
  if (!isCelebrateError(err)) {
    return next(err)
  }

  if (err.details) {
    const details = err.details.get('body')?.details

    return res.status(400).json({
      error: details?.reduce((accErrors, { message, context }) => ({
        ...accErrors,
        message,
        field: context?.label
      }), {})
    })
  }

  return res.status(500).json(err)
}

routes.use('/users', userRoutes)
routes.use(errors)

export default routes
