import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  // protected tableName = 'users'
  // async up() {
  //   this.schema.createTable(this.tableName, (table) => {
  //     table.increments('id').notNullable()
  //     table.string('full_name').nullable()
  //     table.string('email', 254).notNullable().unique()
  //     table.string('password').notNullable()
  //     table.timestamp('created_at').notNullable()
  //     table.timestamp('updated_at').nullable()
  //   })
  // }
  // async down() {
  //   this.schema.dropTable(this.tableName)
  // }

  protected tableName = 'agent_interactions'
  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.text('prompt').notNullable()
      table.text('intermediate').notNullable()
      table.text('answer').notNullable()
      table.jsonb('context').nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
