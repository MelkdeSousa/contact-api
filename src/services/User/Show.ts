import connection from '../../database/connection'
import * as userRepository from '../../repositories/User'

export default async (id: string) => {
  const user = await userRepository.findOne(connection, { id })

  if (!user) throw new Error('user not exists')

  return user
}
