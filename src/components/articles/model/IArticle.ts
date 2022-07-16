import { Document } from 'mongoose'
import ITags from './../../tags/model/ITags'
import ArticleStatus from './ArticleStatus'

export default interface IArticle extends Document {
      title : string;
      slug : string;
      image : string;
      content : string;
      catId : string;
      tags : [ITags];
      authorId : string;
      status : ArticleStatus;
      view : number;
      createdAt : Date
}
