// app/models/agent_interaction.ts

import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AgentInteraction extends BaseModel {
  public static table = 'agent_interactions'

  @column({ isPrimary: true })
  public id!: number

  @column()
  public prompt!: string

  @column()
  public intermediate!: string

  @column()
  public answer!: string

  @column()
  public context!: object

  @column({ columnName: 'created_at' })
  public createdAt!: Date

  @column({ columnName: 'updated_at' })
  public updatedAt!: Date
}
