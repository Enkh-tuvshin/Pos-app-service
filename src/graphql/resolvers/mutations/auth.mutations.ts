import { requestOtp, verifyOtp } from "@/services/auth.service";

export const authMutations = {
  requestOtp: (_: unknown, { email }: { email: string }) => requestOtp(email),
  verifyOtp: (_: unknown, { email, otpToken }: { email: string; otpToken: string }) => verifyOtp(email, otpToken),
};
