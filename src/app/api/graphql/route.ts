import 'reflect-metadata';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
// import { gql } from 'graphql-tag';
import { NextRequest } from 'next/server';
import { buildSchema } from 'type-graphql';
import RecipeResolver from './resolvers/RecipeResolver';

// const resolvers = {
//   Query: {
//     hello: () => 'world',
//   },
// };

const schema = await buildSchema({
  resolvers: [RecipeResolver],
});

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

const server = new ApolloServer({
  schema,
});

// req has the type NextRequest

const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextRequest) => {
    return { req };
  },
});

export { handler as GET, handler as POST };
