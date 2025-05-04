import {Client as WorkFlowClient} from "@upstash/workflow";
import {env} from "@/env";

export const workflowClient = new WorkFlowClient ({
    baseUrl: env.QSTASH_URL,
    token: env.QSTASH_TOKEN,
})