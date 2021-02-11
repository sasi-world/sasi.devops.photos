const getAllPhotos = require("../src/resolvers/query");

describe("Get all photos - query", () => {
  test("It gets all the photos from the table", async () => {
    let args = "args";
    let context = "context";

    const response = await getAllPhotos(args, context);
    expect(response[0]).toHaveProperty("ID");
    expect(response.length).toBeGreaterThan(1);
  });
});
