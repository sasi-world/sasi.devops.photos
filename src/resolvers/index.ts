import { hello, getAllPhotos, getAPhoto } from "./query";
import { IResolvers } from "graphql-tools/dist/Interfaces";
export const resolvers: IResolvers = {
  Query: {
    hello: (root: any, args: any, context: any) => hello(args, context),
    getAllPhotos: (root: any, args: any, context: any) =>
      getAllPhotos(args, context),
    getAPhoto: (root: any, args: any, context: any) => getAPhoto(args, context),
  },
};
