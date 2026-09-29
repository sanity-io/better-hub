import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { auth } from "./auth";
import { dashClient, sentinelClient } from "@better-auth/infra/client";
import { stripeClient } from "@better-auth/stripe/client";

export const authClient = createAuthClient({
	plugins: [
		inferAdditionalFields<typeof auth>(),
		dashClient(),
		// Sentinel fingerprints the browser via Better Auth Infra (kv.better-auth.com)
		...(process.env.NEXT_PUBLIC_DISABLE_BETTER_AUTH_INFRA === "true"
			? []
			: [sentinelClient()]),
		stripeClient({ subscription: true }),
	],
});

export const { signIn, signOut, useSession } = authClient;
