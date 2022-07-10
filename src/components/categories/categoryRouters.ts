import { Router } from 'express'

// controller
import controller from './categoryControllers'
const categoryRouter = Router()
const categoryControllers = new controller()

// routes
categoryRouter.get('/', categoryControllers.index)
categoryRouter.post('/', categoryControllers.create)

export default categoryRouter
