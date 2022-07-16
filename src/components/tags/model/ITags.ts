import { Document } from 'mongoose'

export default interface ITags extends Document {
      title : string;
      created_at : Date
}
