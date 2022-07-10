import { Router } from 'express'
import controller from './homeControllers'

// controller
const homeRouters = Router()
const homeControllers = new controller()

// routes
homeRouters.get('/', homeControllers.index)

export default homeRouters
