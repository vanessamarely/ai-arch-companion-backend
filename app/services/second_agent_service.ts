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
      temperature: 0.9,
      openAIApiKey: process.env.OPENAI_API_KEY,
    })

    this.pipeline = RunnableSequence.from([
      (input: { prompt: string }) => input.prompt,
      model,
      new StringOutputParser(),
    ])
  }

  public async all(input: { prompt: string }) {
    const result = await this.pipeline.invoke(input)
    return {
      ...input,
      answer: result,
    }
  }
}
