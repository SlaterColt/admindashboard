import {Redis} from "@upstash/redis";
import config from "@/lib/config";
import {env} from "@/env";

const redis = new Redis({
    url: env.UPSTASH_REDIS_URL,
    token: env.UPSTASH_REDIS_TOKEN,
});

export default redis;