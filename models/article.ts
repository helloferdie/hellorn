import Realm from "realm";

export class Article extends Realm.Object<Article> {
  _id!: Realm.BSON.ObjectId;
  title!: string;
  author!: string;
  content!: string;

  static schema = {
    name: "Article",
    properties: {
      _id: "objectId",
      title: "string",
      author: "string",
      content: "string",
    },
    primaryKey: "_id",
  };
}
