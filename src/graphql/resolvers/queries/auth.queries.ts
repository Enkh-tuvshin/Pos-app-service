import { User } from "@prisma/client";

export const authQueries = {
  getCurrentUser: (_: unknown, __: unknown, context: { user: User }) => context.user,
};
