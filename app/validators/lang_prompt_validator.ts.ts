import vine from '@vinejs/vine'

export const langPromptValidator = vine.compile(
  vine.object({
    prompt: vine.string().minLength(5),
    context: vine.object({}).optional(),
  })
)
