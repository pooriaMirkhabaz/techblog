import { Application } from 'express'

class MiddleWare {
  private app : Application

  constructor (app : Application) {
    this.app = app
  }
}

export default MiddleWare
