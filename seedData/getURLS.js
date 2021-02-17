<<<<<<< HEAD
=======
require("dotenv").config();

>>>>>>> e38dcd1a1e12618ff5e5456fd971cfd505384a62
const AWS = require("aws-sdk");
AWS.config.update({
  region: "eu-west-1",
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECERT_KEY,
});
<<<<<<< HEAD
=======

const s3 = new AWS.S3();
const log = console.log;

const getURLS = () => {
  const user1 = "b4c3a4f2-3464-4ed1-9325-18d7c0fe258e";
  const user2 = "ab9354c2-5b15-4b03-a5fe-09e37a4aca27";
  const params = {
    Bucket: "sasi-photos-dev",
  };

  s3.listObjects(params, (data, err) => {
    if (data) {
      log("data", data);
    }
    if (err) {
      log("err", err);
    }
  });
};

getURLS();
>>>>>>> e38dcd1a1e12618ff5e5456fd971cfd505384a62
