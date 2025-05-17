export const secondAgentNode = async (input: any) => {
  const processed = input.intermediateResult
  const finalAnswer = `Second agent response based on: "${processed}"`

  return {
    answer: finalAnswer,
    ...input,
  }
}
