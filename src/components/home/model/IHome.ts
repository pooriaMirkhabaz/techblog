import { Document } from 'mongoose'
export default interface IHome extends Document {
      poster : object;
      top_visited : [object]
      top_podcasts : [object],
      tags : [object],
      categories : [object],
}
