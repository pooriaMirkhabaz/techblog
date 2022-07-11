import { Router } from 'express'

// controller
import articleController from './articleControllers'
const articleRouter = Router()
// eslint-disable-next-line new-cap
const articleControllersInstance = new articleController()

// routes
articleRouter.get('/', articleControllersInstance.index)
articleRouter.post('/', articleControllersInstance.create)

export default articleRouter
