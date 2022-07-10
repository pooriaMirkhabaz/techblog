import { Document } from 'mongoose'
export default interface IUser extends Document {
      name : string;
      mobile : string;
      email : string;
      image : string;
      token : string;
      status : number
      createdAt : Date
}
