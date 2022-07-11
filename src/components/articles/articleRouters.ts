import { Router } from 'express'

// controller
import controller from './articleController'
const articleRouter = Router()

// eslint-disable-next-line new-cap
const articleControllers = new controller()

// routes
articleRouter.get('/', articleControllers.index)
articleRouter.get('/:id', articleControllers.findByID)
articleRouter.post('/', articleControllers.create)

export default articleRouter
