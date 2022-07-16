import { model, Schema } from 'mongoose'
import ICategory from './ICategory'
import CategoryStatus from './CategoryStatus'

const CategorySchema : Schema = new Schema({
  title: { type: String, required: true },
  status: { type: CategoryStatus, default: CategoryStatus.ACTIVE },
  createdAt: { type: Date, default: Date.now }
})

export default model<ICategory>('category', CategorySchema)
