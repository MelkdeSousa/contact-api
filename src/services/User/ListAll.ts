import connection from '../../database/connection'
import * as userRepository from '../../repositories/User'

export default async () => {
  try {
    const users = await userRepository.find(connection)

    return users
  } catch (error) {
    throw new Error('could not list users')
  }
}
