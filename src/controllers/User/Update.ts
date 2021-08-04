import { ControllerFunction } from '../../@types'

import updateUserService from '../../services/User/Update'

const update: ControllerFunction = async (request, response) => {
  const { userId: id } = request.params
  const { first_name, last_name, telephones, email } = request.body

  try {
    const user = await updateUserService({ first_name, last_name, telephones, email, id })

    return response.status(201).json(user)
  } catch (err) {
    const { message } = err

    return response.status(400).json({ error: message })
  }
}

export default update
