import { inject } from '@adonisjs/core'
import HomeService from '#services/home_service'
import GithubService from '#services/github_service'
import { HttpContext } from '@adonisjs/core/http'
// import { homeValidator } from '#validators/home_validator'
// import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class HomeController {
  constructor(
    private homeService: HomeService,
    private githubService: GithubService
  ) {}

  async index({ request }: HttpContext) {
    const response = await this.githubService.createRepository('test')
    console.log(response)
    // const payload = await request.validateUsing(homeValidator)
    return this.homeService.all()
  }
}
