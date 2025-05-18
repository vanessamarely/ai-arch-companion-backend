export function parseAnswer(answer: string) {
  const extract = (title: string, codeLang?: string) => {
    const blockRegex = codeLang
      ? new RegExp(`## ${title}\\s*\`\`\`${codeLang}\\s*([\\s\\S]*?)\`\`\``, 'i')
      : new RegExp(`## ${title}\\s*([\\s\\S]*?)(?=\\n##|$)`, 'i')
    const match = answer.match(blockRegex)
    return match ? match[1].trim() : null
  }

  return {
    functionalDiaggitram: extract('Functional Application Architecture Diagram', 'mermaid'),
    infrastructureDiagram: extract('Cloud Infrastructure Architecture Diagram', 'mermaid'),
    rationale: extract('Rationale'),
    terraform: extract('Infrastructure as Code', 'terraform'),
    architecturalDecisionRecord: extract('Architectural Decision Record'),
  }
}
