import { PromptTemplate } from '@langchain/core/prompts'

export const architecturePromptTemplate = PromptTemplate.fromTemplate(
  `You are a solutions architect from a Software Vendor Company specialized in cloud native applications.
Please use "{actual_state}" as context for a company in the "{industry}" industry to propose a cloud native architecture
to modernize the application for "{environment}" to be implemented in the "{cloud}" cloud provider.

The expected result: two diagrams, one for the functional application and another for the cloud infrastructure.
The two diagrams will be fed into Mermaid, please provide Mermaid code.

Additionally, please include the rationale of the proposed architecture diagrams and its components.`
)
