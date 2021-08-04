import { v4 as uuid } from 'uuid'

import connection from '../../database/connection'
import * as userRepository from '../../repositories/User'

interface IUserRequest {
  first_name: string
  last_name: string
  telephones: string[]
  email: string
}

export default async ({ first_name, last_name, telephones, email }: IUserRequest) => {
  const userAlreadyExists = await userRepository.findOne(connection, { email })

  if (userAlreadyExists) throw new Error('User already exists')

  const id = uuid()
  const user = await userRepository.create({ first_name, last_name, telephones, email, id }, connection)

  return user
}
