import { ConfigProvider } from "_config/configProvider";
import { SignJWT } from "jose";

export async function generateApplicationHeaders() {
  const { key, secret } = ConfigProvider.config.application;

  const jwt = await new SignJWT({
    app: key,
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setExpirationTime("1m")
    .sign(Buffer.from(secret));

  return {
    "x-application-token": jwt,
    "x-application-key": key,
  };
}
