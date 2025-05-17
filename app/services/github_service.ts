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
    const response = await this.octokit.request('POST /orgs/{org}/repos', {
      org: this.owner,
      name,
    })
    return response.data
  }
}
