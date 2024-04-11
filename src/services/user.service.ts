import { prisma } from "@/utils/prisma";

export const createUser = async (email: string, otpToken: string) => {
  const user = await prisma.user.create({
    data: {
      email,
      otpToken,
    },
  });
  return user;
};

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
};

export const updateUserOtpToken = async (email: string, otpToken: string) => {
  const user = await prisma.user.update({ where: { email }, data: { otpToken } });
  return user;
};

export const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
};
