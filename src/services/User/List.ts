import connection from '../../database/connection'
import * as userRepository from '../../repositories/User'

interface IFilters {
  name: string
  email: string
  last_name: string
  first_name: string
}

export default async ({ name = '', first_name, last_name, email }: IFilters) => {
  const [primaryName, ...restName] = name.split(' ')

  try {
    const usersByEmail = await userRepository.findBy(connection, { email })
    const usersByFirstName = await userRepository.findBy(connection, { first_name })
    const usersByLastName = await userRepository.findBy(connection, { last_name })
    const usersByName = await userRepository.findBy(connection, { first_name: primaryName, last_name: restName.join(' ') || '' })

    const users = [...usersByEmail, ...usersByFirstName, ...usersByLastName, ...usersByName]

    return users
  } catch (error) {
    throw new Error('could not list users')
  }
}
