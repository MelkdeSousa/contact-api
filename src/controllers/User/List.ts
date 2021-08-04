import { ControllerFunction } from '../../@types'

import listUserService from '../../services/User/List'
import listAllUsersService from '../../services/User/ListAll'

const list: ControllerFunction = async (request, response) => {
  const { name = '', email = '', last_name = '', first_name = '' } = request.query as Record<string, string>

  const users = await listUserService({ name, email, last_name, first_name })

  if (!users.length) {
    const allUsers = await listAllUsersService()

    return response.status(200).json(allUsers)
  }

  return response.status(200).json(users)
}

export default list
