import { registerAs } from "@nestjs/config";

/**
 * @description - type environment configuration variables
 */
export default registerAs('config', () => {
    return {
        postgres: {
            url: process.env.DATABASE_URL,
        },
        apiKey: process.env.API_KEY,
    }
})
