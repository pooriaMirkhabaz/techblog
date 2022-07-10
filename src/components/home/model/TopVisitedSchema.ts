import { Schema } from 'mongoose'
const topVisitedSchema : Schema = new Schema({
  id: { type: String },
  title: { type: String },
  image: { type: String },
  cat_id: { type: String },
  cat_name: { type: String },
  author: { type: String },
  view: { type: String },
  status: { type: String },
  created_at: { type: String }
})
export default topVisitedSchema
