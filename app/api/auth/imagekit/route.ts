import config from "@/lib/config";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

if (!publicKey || !privateKey || !urlEndpoint)
  throw new Error(
    "Missing ImageKit env vars:\n" +
      `publicKey=${publicKey}\n` +
      `privateKey=${privateKey}\n` +
      `urlEndpoint=${urlEndpoint}`,
  );

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters());
}
