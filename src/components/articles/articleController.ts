import { NextFunction, Request, Response } from 'express'
import articleModel from './model/Article'
import { faker } from '@faker-js/faker'

class articleControllers {
  public async index (req : Request, res : Response, next : NextFunction) {
    try {
      const articles = await articleModel.find({})
      res.status(200).send({
        code: 200,
        status: true,
        data: {
          articles
        }
      })
    } catch (error) {
      next(error)
    }
  }

  public async findByID (req : Request, res : Response, next : NextFunction) {
    try {
      const id = req.params.id

      let projection : any = []
      if (req.query.hasOwnProperty('fields')) {
        const fields : string = req.query.fields as string
        projection = fields.split(',').reduce((value, current) => {
          return {
            [current]: 1,
            ...value
          }
        }, {})
      }

      const article = await articleModel.findOne({ id }, projection)
      res.status(200).send({
        code: 200,
        status: true,
        data: article
      })
    } catch (error) {
      next(error)
    }
  }

  public async create (req: Request, res : Response, next : NextFunction) {
    // const { title, slug, image, content, cat_id, tags, author_id } = req.body

    const title = faker.lorem.words(10)
    const slug = faker.lorem.slug(10)
    const content = faker.lorem.paragraph(200)
    const image = faker.image.food()
    const catId = '62cb175c6c3f3856445efcc4'
    const authorId = '62cb164f32a909587fd6ca12'

    try {
      const newArticle = await new articleModel({
        title,
        slug,
        content,
        image,
        catId,
        authorId
      })
      newArticle.save()

      res.status(201).send({
        code: 201,
        status: true,
        msg: 'new article inserted'
      })
    } catch (error) {
      next(error)
    }
  }
}
export default articleControllers
