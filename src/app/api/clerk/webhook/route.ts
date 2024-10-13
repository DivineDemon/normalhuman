import { db } from "@/db/db";

export const POST = async (req: Request) => {
  const { data } = await req.json();
  const id = data.id;
  const lastName = data.last_name;
  const imageUrl = data.image_url;
  const firstName = data.first_name;
  const emailAddress = data.email_addresses[0].email_address;

  await db.user.create({
    data: {
      id,
      emailAddress,
      firstName,
      lastName,
      imageUrl,
    },
  });

  return new Response("Clerk Webhook Received!", { status: 200 });
};
