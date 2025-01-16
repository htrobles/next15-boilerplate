import 'reflect-metadata';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { buildSchema } from 'type-graphql';
import RecipeResolver from './resolvers/RecipeResolver';

// Initialize schema and Apollo server
const schema = await buildSchema({
  resolvers: [RecipeResolver],
});

const server = new ApolloServer({
  schema,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req) => ({ req }),
});

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: Request) {
  return handler(request);
}
