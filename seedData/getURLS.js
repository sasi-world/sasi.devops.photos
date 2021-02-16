const AWS = require("aws-sdk");
AWS.config.update({
  region: "eu-west-1",
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECERT_KEY,
});

const s3 = new AWS.S3();
const log = console.log();
const getURLS = async () => {
  const params = {
    Bucket: "sasi-photos-dev",
  };

  const photos = await s3.listObjects(params);

  log("photos", photos);
};

getURLS();
