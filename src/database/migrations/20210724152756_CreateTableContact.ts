import { Knex } from 'knex'

export const up = async (knex: Knex): Promise<void> => {
  return knex.schema.createTable('users', table => {
    table.uuid('id').primary().notNullable()
    table.string('first_name', 255).notNullable()
    table.string('last_name', 255).notNullable()
    table.string('email', 255).notNullable()
    table.json('telephones').notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export const down = async (knex: Knex): Promise<void> => {
  return knex.schema.dropTable('users')
}
