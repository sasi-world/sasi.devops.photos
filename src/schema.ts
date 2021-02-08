const schema: string = `

type Photo {
     ID: String
     contributorID: String!
     contributorUsername:String!
     createdAt: String
     updatedAt:String 
     s3URL: String 
     fileSize: String
     dimensions:  String
     }

"""
A hello world Query
"""
type Query {
     hello: String!
}

`;

export { schema };
