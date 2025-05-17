export const firstAgentNode = async (input: any) => {
  const prompt = input.prompt
  const response = `First agent processed: "${prompt}"`

  return {
    intermediateResult: response,
    ...input,
  }
}
