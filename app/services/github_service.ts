import { inject } from '@adonisjs/core'
import { Octokit } from 'octokit'
import env from '#start/env'

@inject()
export default class GithubService {
  private octokit: Octokit
  private owner: string

  constructor() {
    this.octokit = new Octokit({
      auth: env.get('GITHUB_TOKEN'),
    })
    this.owner = env.get('GITHUB_OWNER', 'teamdebuggies')
  }

  async createRepository(name: string) {
    const response = await this.octokit.rest.repos.createForAuthenticatedUser({
      name,
      description: 'This is a test repository',
      private: false,
    })
    return response.data
  }
}
