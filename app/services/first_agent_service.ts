import { architecturePromptTemplate } from '../templates/architecture_prompt_template.js'

export default class FirstAgentService {
  constructor() {}

  public async all(input: {
    actual_state: string
    industry: string
    environment: string
    cloud: string
  }) {
    const prompt = await architecturePromptTemplate.format(input)
    return {
      ...input,
      prompt,
    }
  }
}
