import { Document } from 'mongoose'

export default interface IArticle extends Document {
      title : string;
      slug : string;
      image : string;
      content : string;
      catId : string;
      tags : [string];
      authorId : string;
      status : number;
      view : number;
      createdAt : Date
}
