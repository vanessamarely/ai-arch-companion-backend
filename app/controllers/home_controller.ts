import { inject } from '@adonisjs/core'
import HomeService from '#services/home_service'
import { homeValidator } from '#validators/home_validator'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class HomeController {
  constructor(private homeService: HomeService) {}

  async index({ request }: HttpContext) {
    // const payload = await request.validateUsing(homeValidator)
    return this.homeService.all()
  }
}
