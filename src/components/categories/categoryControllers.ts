import { NextFunction, Request, Response } from 'express'
import categoryModel from './model/Category'

class CategoryControllers {
  public async index (req : Request, res : Response, next : NextFunction) {
    try {
      const sortValue : any = req.query.sort ? req.query.sort : 1
      const categories = await categoryModel.find({}, { title: 1 }).sort({ createdAt: sortValue })
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
      const { title } = req.body
      const newCategory = await new categoryModel({
        title
      })

      newCategory.save()
      res.status(201).send({
        code: 201,
        status: true,
        msg: 'new category created',
        data: {
          id: newCategory._id,
          title
        }
      })
    } catch (error) {
      next(error)
    }
  }

  public async findArticles (req : Request, res : Response, next : NextFunction) {
    // eslint-disable-next-line camelcase
    const category_id : string = req.params.category_id
    console.log('findArticles', category_id)
  }

  public async delete (req : Request, res : Response, next : NextFunction) {
    try {
      // eslint-disable-next-line camelcase
      const categoryID : string = req.params.category_id as unknown as string
      const response = await categoryModel.deleteOne({ _id: categoryID })
      if (response.deletedCount > 0) {
        return res.status(200).send({
          code: 200,
          status: true,
          msg: 'دسته بندی مورد نظر با موفقیت حذف شد'
        })
      }
      res.status(422).send({
        code: 422,
        status: true,
        msg: 'اطلاعات ارسالی اشتباه است'
      })
    } catch (error) {
      next(error)
    }
  }
}
export default CategoryControllers
