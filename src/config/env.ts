export const env = {
  PORT: Number(process.env.PORT) || 3000,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'random_secret_key',
} as const;

export default env;
