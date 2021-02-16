const AWS = require("aws-sdk");
AWS.config.update({
  region: "eu-west-1",
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECERT_KEY,
});
