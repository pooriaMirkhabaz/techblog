import { Document } from 'mongoose'
import CategoryStatus from './CategoryStatus'
export default interface ICategory extends Document {
      title : string;
      status : CategoryStatus
      createdAt : Date
}
