/*
this function will allow us to add all the listings into Dynamo dynamically
*/

//set up the aws-sdk
const AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-1" });
const docClient = new AWS.DynamoDB.DocumentClient();

//import the listings json
const photos = require("./photos.json");
console.log("photos.Init", photos);

//lets inseert them into the table
//loop over the photos
photos.map((l) => {
  //create params object
  photosParams = {
    TableName: "dev-sasi-photos",
    Item: {
      ID: l.ID,
      contributorID: l.contributorID,
      contributorUsername: l.contributorUsername,
      createdAt: l.createdAt,
      s3URL: l.s3URL,
      fileSize: l.fileSize,
      dimensions: l.dimensions,
    },
  };

  //put the data into the table

  docClient.put(photosParams, function (err, data) {
    if (err) {
      console.error(
        "Unable to add listing",
        user.name,
        ". Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("PutItem succeeded:");
    }
  });
});
