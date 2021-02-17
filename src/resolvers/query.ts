import * as dynamoDB from "../../libs/dynamoDB";
export const hello = (args: any, context: any) => {
  return "Your GraphQL API is now LIVE!🎈 ";
};

export const getAllPhotos = async (args: any, contetxt: any) => {
  const params: object = {
    TableName: process.env.PhotosDB,
  };

  try {
    const photos = await dynamoDB.default.scan(params);
    return photos.Items;
  } catch (e) {
    throw new Error(e);
  }
};

export const getAPhoto = async (args: any, context: any) => {
  try {
    const params: object = {
      TableName: process.env.PhotosDB,
      Key: {
        ID: args.ID,
        contributorID: args.contributorID,
      },
    };

    console.log(params);
    const photo = await dynamoDB.default.get(params);

    return photo.Item;
  } catch (e) {
    throw new Error(e);
  }
};
