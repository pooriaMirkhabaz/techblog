import * as express from 'express'
import { Application } from 'express'
import RouteService from './router/routeService'

class App {
  private port : number
  private app : Application
  private router : RouteService

  constructor (port : number) {
    this.app = express()
    this.port = port
    this.router = new RouteService(this.app)
  }

  start () {
    // start router
    this.router.startRouter()

    this.app.listen(this.port, () => {
      console.log(`Server is Running on port : ${this.port}`)
    })
  }
}
export default App
