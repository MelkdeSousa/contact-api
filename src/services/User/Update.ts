import connection from '../../database/connection'
import * as userRepository from '../../repositories/User'

interface IUserRequest {
  first_name?: string
  last_name?: string
  telephones?: string[]
  email?: string
  id: string
}

export default async ({ first_name, last_name, telephones, email, id }: IUserRequest) => {
  const userAlreadyExists = await userRepository.findOne(connection, { id })

  if (!userAlreadyExists) throw new Error('user not exists')

  const user = await userRepository.update(connection, { first_name, last_name, telephones, email, id }, { id })

  return user
}
