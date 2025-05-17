export default class SecondAgentService {
  constructor() {}

  public async all(input: { prompt: string; intermediate: string; context?: any }) {
    const finalAnswer = `Agente 2 respondió basado en: "${input.intermediate}"`
    return { ...input, answer: finalAnswer }
  }
}
