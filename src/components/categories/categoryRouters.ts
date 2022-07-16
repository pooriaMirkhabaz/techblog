import { Router } from 'express'

// controller
import controller from './CategoryControllers'
const categoryRouter = Router()
const categoryControllers = new controller()

// routes
categoryRouter.get('/', categoryControllers.index)
categoryRouter.post('/', categoryControllers.create)

categoryRouter.get('/:category_id', categoryControllers.findArticles)
categoryRouter.delete('/:category_id', categoryControllers.delete)

export default categoryRouter
