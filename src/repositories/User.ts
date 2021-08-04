import { Knex } from 'knex'

export interface IUser {
  id: string
  first_name: string
  last_name: string
  email: string
  telephones: string[] | string
  created_at: Date
  updated_at: Date
}

interface ICreateUser {
  id: string
  first_name: string
  last_name: string
  email: string
  telephones: string[]
}

interface IUpdateUser {
  first_name?: string
  last_name?: string
  email?: string
  telephones?: string[]
  id: string
}

export const create = async ({ id, email, first_name, last_name, telephones }: ICreateUser, connection: Knex) => {
  const [user] = await connection.transaction<IUser[]>(
    trx => connection<IUser>('users')
      .transacting(trx)
      .insert({
        id,
        email,
        first_name,
        last_name,
        telephones: JSON.stringify(telephones),
        created_at: new Date(),
        updated_at: new Date()
      })
      .then(async () => await trx.select('*').from<IUser>('users').where('id', '=', id))
      .then(trx.commit)
      .catch(trx.rollback)
  )

  if (!user) throw new Error('user not created')

  return user
}

export const find = async (connection: Knex) => {
  const users = await connection.transaction<IUser[]>(
    trx => connection<IUser>('users')
      .transacting(trx)
      .select('*')
      .then(trx.commit)
      .catch(trx.rollback)
  )

  return users
}

export const findOne = async (connection: Knex, where: Record<string, any>) => {
  const [user] = await connection.transaction<IUser[]>(
    trx => connection<IUser>('users')
      .transacting(trx)
      .select('*')
      .where(where)
      .then(trx.commit)
      .catch(trx.rollback)
  )

  return user
}

export const findBy = async (connection: Knex, where: Record<string, string>) => {
  const users = await connection.transaction<IUser[]>(
    trx => connection<IUser>('users')
      .transacting(trx)
      .select('*')
      .where(where)
      .then(trx.commit)
      .catch(trx.rollback)
  )

  return users
}

export const update = async (connection: Knex, { email, first_name, last_name, telephones, id }: IUpdateUser, where: Record<string, any>) => {
  const [user] = await connection.transaction<IUser[]>(
    trx => connection<IUser>('users')
      .transacting(trx)
      .where(where)
      .update({
        email,
        first_name,
        last_name,
        telephones: JSON.stringify(telephones),
        updated_at: new Date()
      })
      .then(async () => await trx.select('*').from<IUser>('users').where('id', '=', id))
      .then(trx.commit)
      .catch(trx.rollback)
  )

  if (!user) throw new Error('user not updated')

  return user
}

export const removeById = async (connection: Knex, id: string) => {
  await connection.transaction<IUser[]>(
    trx => connection<IUser>('users')
      .transacting(trx)
      .where('id', '=', id)
      .delete()
      .then(trx.commit)
      .catch(trx.rollback)
  )
}
