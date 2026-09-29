import { Redis } from "@upstash/redis";

// Reads UPSTASH_REDIS_REST_URL/TOKEN, or KV_REST_API_URL/TOKEN as injected
// by the Vercel Marketplace Upstash integration.
export const redis = Redis.fromEnv();
