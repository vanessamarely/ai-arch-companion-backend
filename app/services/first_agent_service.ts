import { architecturePromptTemplate } from '../templates/architecture_prompt_template.js'

export default class FirstAgentService {
  constructor() {}

  public async all(input: {
    actual_state: string
    industry: string
    environment: string
    cloud: string
  }) {
    // Ensure the prompt includes a clear request for high-level architecture, diagrams in Mermaid, and Terraform code
    const prompt = await architecturePromptTemplate.format({
      ...input,
      request: `Generate a high-level cloud-native architecture for the provided legacy system. Include detailed functional and infrastructure diagrams in Mermaid format, and provide production-ready Terraform code for the proposed AWS infrastructure. All outputs must be actionable, specific, and tailored to the context.`,
    })
    return {
      ...input,
      prompt,
    }
  }
}
