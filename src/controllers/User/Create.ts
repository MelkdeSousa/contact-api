import { ControllerFunction } from '../../@types'

import createUserService from '../../services/User/Create'

const create: ControllerFunction = async (request, response) => {
  const { first_name, last_name, telephones, email } = request.body

  try {
    const user = await createUserService({ first_name, last_name, telephones, email })

    return response.status(201).json(user)
  } catch (err) {
    const { message } = err

    return response.status(400).json({ error: message })
  }
}

export default create
