import { model, Schema } from 'mongoose'
import ITags from './ITags'

const TagSchema : Schema = new Schema({
  title: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
})
export default model<ITags>('tag', TagSchema)
