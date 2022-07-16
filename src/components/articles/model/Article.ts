import { Schema, model } from 'mongoose'
import IArticle from './IArticle'
import ArticleStatus from './ArticleStatus'

const ArticleSchema : Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  catId: { type: Schema.Types.ObjectId, ref: 'category', required: true },
  tags: { type: [Object], default: null },
  authorId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  status: { type: Number, default: ArticleStatus.PENDING },
  view: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
})

export default model<IArticle>('article', ArticleSchema)
