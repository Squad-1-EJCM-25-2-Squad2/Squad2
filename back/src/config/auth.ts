import * as fs from "fs";
import * as path from "path";
import crypto from "crypto";
import jsonwebtoken from "jsonwebtoken";
import { Request } from "express";

const PRIV_KEY = fs.readFileSync(
  path.join(__dirname, "..", "..", "id_rsa_priv.pem"),
  "utf-8"
);

const generatePassword = (password: string) => {
  const salt = crypto.randomBytes(32).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return {
    salt,
    hash,
  };
};

const generateJWT = (user: any) => {
  const sub = user.id;
  const payload = {
    sub,
    iat: Date.now(),
  };

  const decodeJWT = (token: string) => {
    const payload = token.split(".")[1];
    const encodedPayload = Buffer.from(payload!, "base64");
    const decodedPayload = encodedPayload.toString("utf-8");
    return JSON.parse(decodedPayload);
  };

  const jwt = jsonwebtoken.sign(payload, PRIV_KEY, {
    algorithm: "RS256",
    expiresIn: "7d",
  });

  return jwt;
};

const checkPassword = (password: string, hash: string, salt: string) => {
  const hashFromRequest = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return hashFromRequest === hash;
};

export default {
  generatePassword,
  generateJWT,
  checkPassword,
};