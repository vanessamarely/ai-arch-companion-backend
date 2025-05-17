import { ChatOpenAI } from '@langchain/openai'
import { RunnableSequence } from '@langchain/core/runnables'
import { StringOutputParser } from '@langchain/core/output_parsers'

/**
 * Second agent that uses LangChain v0.3+ with RunnableSequence and ChatOpenAI.
 * It generates a response based on the prompt created by the first agent.
 */
export default class SecondAgentService {
  private pipeline: RunnableSequence<any, any>

  constructor() {
    const model = new ChatOpenAI({
      temperature: 0.2, // Lower temperature for more deterministic output
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: 'gpt-4o', // Use GPT-4o for better reasoning and diagram generation
    })

    this.pipeline = RunnableSequence.from([
      (input: { prompt: string }) => input.prompt,
      model,
      new StringOutputParser(),
    ])
  }

  public async all(input: { prompt: string }) {
    // Ensure the prompt is passed as expected
    const result = await this.pipeline.invoke(input)
    return {
      ...input,
      answer: result,
    }
  }
}
