import { Request, Response } from 'express'

class HomeController {
  public index (req : Request, res : Response) {
    res.status(200).send({
      code: 200,
      status: true,
      data: [
        {
          id: 1,
          title: 'article 1'
        }
      ]
    })
  }
}

export default HomeController
