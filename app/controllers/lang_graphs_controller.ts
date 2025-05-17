import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import FirstAgentService from '#services/first_agent_service'
import SecondAgentService from '#services/second_agent_service'
import { langArchitectureValidator } from '#validators/lang_architecture_validator'
import AgentInteraction from '#models/agent_interaction'
import { parseAnswer } from '../utils/parse_answer.js'

@inject()
export default class LangGraphsController {
  constructor(
    private firstAgentService: FirstAgentService,
    private secondAgentService: SecondAgentService
  ) {}

  public async handle({ request }: HttpContext) {
    const payload = await request.validateUsing(langArchitectureValidator)

    const first = await this.firstAgentService.all(payload)
    const final = await this.secondAgentService.all({ prompt: first.prompt })
    const parsed = parseAnswer(final.answer)
    await AgentInteraction.create({
      prompt: first.prompt,
      intermediate: first.prompt,
      answer: final.answer,
      context: payload,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return {
      ...parsed,
      original: final.answer,
    }
  }
}
