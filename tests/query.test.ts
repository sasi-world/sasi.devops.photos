import { getAllPhotos } from "../src/resolvers/query";

describe("Get all photos - query", () => {
  test("It gets all the photos from the table", async () => {
    const args: string = "args";
    const context: string = "context";

    const response = await getAllPhotos(args, context);
    expect(response[0]).toHaveProperty("ID");
    expect(response.length).toBeGreaterThan(1);
  });
});
