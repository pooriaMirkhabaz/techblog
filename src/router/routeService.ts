import { Application, Router } from 'express'
import RouterEngine from './router'
import homeRouters from './../components/home/homeRouters'
class RouteService {
  private app : Application
  private router : RouterEngine

  constructor (app : Application) {
    this.app = app
    this.router = new RouterEngine()
    this.bindRouters()
  }

  private bindRouters () : void {
    this.router.registerRouters('/api/v1/home', homeRouters)
  }

  public startRouter () : void {
    this.router.getRouters().forEach((router : Router, route : string) => {
      this.app.use(route, router)
    })
  }
}
export default RouteService
