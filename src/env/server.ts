import { createEnv } from "@t3-oss/env-nextjs";
import { ZodError, z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    CLERK_SECRET_KEY: z.string().regex(/^sk_(test|live)_\w+$/, {
      message:
        "Invalid secret key format. It should start with 'sk_' followed by 'test' or 'live', and then a series of characters.",
    }),
    CLERK_SIGN_IN_URL: z.string().regex(/^\/[a-zA-Z0-9\-_\/]*$/, {
      message:
        "Invalid URL path format. It should start with a forward slash ('/') and contain only alphanumeric characters, dashes, underscores, or additional forward slashes.",
    }),
    CLERK_SIGN_UP_URL: z.string().regex(/^\/[a-zA-Z0-9\-_\/]*$/, {
      message:
        "Invalid URL path format. It should start with a forward slash ('/') and contain only alphanumeric characters, dashes, underscores, or additional forward slashes.",
    }),
    DATABASE_URL: z
      .string()
      .regex(
        /^postgresql:\/\/[a-zA-Z0-9_]+:[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*@[a-zA-Z0-9\-.]+\/[a-zA-Z0-9_]+$/,
        {
          message:
            "Invalid PostgreSQL connection string format. It should be in the format: 'postgresql://<username>:<password>@<host>/<database>'.",
        }
      ),
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
    process.exit(1);
  },
  emptyStringAsUndefined: true,
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
});
