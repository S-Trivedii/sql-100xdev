import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgresql://postgres.yksvkstvxtpwybltfnfa:[type-your-own-password]@aws-0-ap-south-1.pooler.supabase.com:6543/todo"
  );

  try {
    await client.connect();
  } catch (error) {
    console.error("Connection error", error);
  }

  return client;
}
