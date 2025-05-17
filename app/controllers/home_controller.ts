import { inject } from '@adonisjs/core'
import GithubService from '#services/github_service'
import { HttpContext } from '@adonisjs/core/http'
// import { homeValidator } from '#validators/home_validator'
// import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class HomeController {
  constructor(private githubService: GithubService) {}

  async index({ request }: HttpContext) {
    const response = await this.githubService.createRepository(request.input('name'))
    await this.githubService.pushFileToRepository(response.name, 'README.md', 'Hello, world!')
    return response
  }
}
