import {
  createUser,
  getUserByEmail,
  getUserById,
  updateUserOtpToken,
} from "./user.service";
import jwt from "jsonwebtoken";
import { GraphQLError } from "graphql";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const getOtpCode = () => {
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp;
};

const OTP_SECRET = process.env.OTP_SECRET!;
const JWT_SECRET = process.env.JWT_SECRET!;

export const requestOtp = async (email: string) => {
  const user = await getUserByEmail(email);
  const code = getOtpCode();
  const otpToken = jwt.sign({ code }, OTP_SECRET, { expiresIn: "5m" });
  if (user) {
    await updateUserOtpToken(email, otpToken);
    console.log(otpToken, "otpToken");
  } else {
    await createUser(email, otpToken);
  }
  await transporter.sendMail({
    subject: "Your otp to sign in into system",
    from: process.env.EMAIL_USER,
    to: email,
    text: `Your OTP is: "${code}"`,
  });
  return { otpToken };
};

export const verifyOtp = async (email: string, otpToken: string) => {
  const user = await getUserByEmail(email);
  if (!user) throw new GraphQLError("Wrong credential");
  let decodedOtp = "";
  try {
    decodedOtp = (jwt.verify(user.otpToken!, OTP_SECRET) as { code: string })
      .code;
    console.log(decodedOtp);
  } catch (error) {
    throw new GraphQLError("OTP Expired");
  }
  if (otpToken != decodedOtp) {
    throw new GraphQLError("OTP incorrect");
  }
  const accessToken = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: "24h",
  });
  return { accessToken };
};

export const getCurrentUser = async (accessToken: string) => {
  try {
    const [type, bearerToken] = accessToken.split(" ");
    if (type !== "Bearer") {
      console.log("error");
      throw new GraphQLError("Not authenticated!");
    }
    const decoded = jwt.verify(bearerToken, JWT_SECRET) as { id: string };
    const user = getUserById(decoded.id);
    return user;
  } catch (error) {
    throw new GraphQLError("Not authenticated!");
  }
};
