import { ControllerFunction } from '../../@types'

import removeUserService from '../../services/User/Remove'

const remove: ControllerFunction = async (request, response) => {
  const { userId: id } = request.params

  try {
    await removeUserService(id)

    return response.status(200).json({ message: 'user removed successfully' })
  } catch (err) {
    const { message } = err

    return response.status(400).json({ error: message })
  }
}

export default remove
