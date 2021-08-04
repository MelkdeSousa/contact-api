import connection from '../../database/connection'
import * as userRepository from '../../repositories/User'

export default async (id: string) => {
  const userAlreadyExists = await userRepository.findOne(connection, { id })

  if (!userAlreadyExists) throw new Error('user not exists')

  await userRepository.removeById(connection, id)
}
