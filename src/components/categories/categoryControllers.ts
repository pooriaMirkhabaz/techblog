import { NextFunction, Request, Response } from 'express'
import categoryModel from './model/Category'

class CategoryControllers {
  public async index (req : Request, res : Response, next : NextFunction) {
    try {
      const categories = await categoryModel.find({})
      res.status(200).send({
        code: 200,
        status: true,
        data: [
          categories
        ]
      })
    } catch (error) {
      next(error)
    }
  }

  public async create (req : Request, res : Response, next : NextFunction) {
    try {
      const newCategory = await new categoryModel({
        title: 'هوش مصنوعی'
      })
      newCategory.save()
      res.status(201).send({
        code: 201,
        status: true,
        msg: 'new category created',
        newCategory
      })
    } catch (error) {
      next(error)
    }
  }
}
export default CategoryControllers
