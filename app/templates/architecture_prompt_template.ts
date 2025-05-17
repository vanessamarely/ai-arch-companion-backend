import { PromptTemplate } from '@langchain/core/prompts'

export const architecturePromptTemplate = PromptTemplate.fromTemplate(
  `You are a solutions architect from a Software Vendor Company specialized in cloud native applications.

Please use "{actual_state}" as context for a company in the "{industry}" industry to propose a cloud native architecture to modernize the application for the "{environment}" environment, to be implemented in the "{cloud}" cloud provider.

The expected result includes:

1. Two architecture diagrams:
   - One for the functional application
   - One for the cloud infrastructure

2. Output format requirements:
   - Diagram previews in **PNG format**
   - Mermaid source diagrams as **.mermaid files**
   - The rationale as a **Markdown (.md) text file**
   - Infrastructure as code in a **Terraform template**, which should include:
     - Base infrastructure
     - VPCs and subnets
     - Security groups
     - IAM roles and policies (following the **least privilege principle**)
     - CI/CD pipelines using **GitHub Actions**

3. Based on the rationale, create an **Architectural Decision Record (ADR)** that includes:
   - **Problems to Solve**
   - **Analysis Made**
   - **Decisions to Solve the Problem**

Please format the response clearly using the following Markdown structure:

## Functional Application Architecture Diagram  
\`\`\`mermaid  
...  
\`\`\`

## Cloud Infrastructure Architecture Diagram  
\`\`\`mermaid  
...  
\`\`\`

## Rationale  
...

## Infrastructure as Code  
\`\`\`terraform  
...  
\`\`\`

## Architectural Decision Record  
### Problems to Solve  
...  
### Analysis Made  
...  
### Decisions to Solve the Problem  
...`
)
