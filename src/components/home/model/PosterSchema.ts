import { Schema } from 'mongoose'
const PosterSchema : Schema = new Schema({
  id: { type: String },
  title: { type: String },
  image: { type: String }
})

export default PosterSchema
