import { model, Schema } from 'mongoose'
import IUser from './IUser'
import UserStatus from './UserStatus'

const UserSchema : Schema = new Schema({
  name: { type: String, default: null },
  mobile: { type: String, required: true, unique: true },
  email: { type: String, default: null },
  image: { type: String, default: null },
  token: { type: String, default: null },
  status: { type: Number, default: UserStatus.ACTIVE },
  createdAt: { type: Date, default: Date.now }
})

export default model<IUser>('user', UserSchema)
