import vine from '@vinejs/vine'

export const homeValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3).maxLength(50),
    email: vine.string().email(),
  })
)
