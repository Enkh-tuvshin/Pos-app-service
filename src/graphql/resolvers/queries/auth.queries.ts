import { getCurrentUser } from "@/services/auth.service";

export const authQueries = {
  getCurrentUser: (_: unknown, { accessToken }: { accessToken: string }) => getCurrentUser(accessToken),
};
