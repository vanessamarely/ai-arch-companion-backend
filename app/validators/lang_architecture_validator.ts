import vine from '@vinejs/vine'

export const langArchitectureValidator = vine.compile(
  vine.object({
    actual_state: vine.string().minLength(10),
    industry: vine.string(),
    environment: vine.string(),
    cloud: vine.string(),
  })
)
