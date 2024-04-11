import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/graphql/schemas";
import { resolvers } from "@/graphql/resolvers";
import { getCurrentUser } from "@/services/auth.service";

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (request) => {
    const token = request.headers.authorization || "";
    const user = await getCurrentUser(token);
    return { user };
  },
});

export { handler as GET, handler as POST };
