import { ControllerFunction } from '../../@types'

import showUserService from '../../services/User/Show'

const show: ControllerFunction = async (request, response) => {
  const { userId: id } = request.params

  try {
    const user = await showUserService(id)

    return response.status(201).json(user)
  } catch (err) {
    const { message } = err

    return response.status(400).json({ error: message })
  }
}

export default show
