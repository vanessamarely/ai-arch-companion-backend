export default class FirstAgentService {
  constructor() {}

  public async all(input: { prompt: string; context?: any }) {
    const intermediate = `Agente 1 procesó: "${input.prompt}"`
    return { ...input, intermediate }
  }
}
