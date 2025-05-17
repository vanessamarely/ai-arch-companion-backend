import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import FirstAgentService from '#services/first_agent_service'
import SecondAgentService from '#services/second_agent_service'
import AgentInteraction from '#models/agent_interaction'
import { langPromptValidator } from '#validators/lang_prompt_validator.ts'

@inject()
export default class LangGraphsController {
  constructor(
    private firstAgentService: FirstAgentService,
    private secondAgentService: SecondAgentService
  ) {}

  // POST /agents/process
  async handle({ request }: HttpContext) {
    const payload = await request.validateUsing(langPromptValidator)

    const firstResult = await this.firstAgentService.all(payload)
    const finalResult = await this.secondAgentService.all(firstResult)

    await AgentInteraction.create({
      prompt: payload.prompt,
      intermediate: firstResult.intermediate,
      answer: finalResult.answer,
      context: payload.context || {},
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return finalResult
  }

  // GET /agents/history
  async history() {
    const interactions = await AgentInteraction.query().orderBy('created_at', 'desc').limit(10)

    return interactions
  }
}
