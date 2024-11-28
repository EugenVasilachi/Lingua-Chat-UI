import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (e.g., development or production)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      // Expose environment variables to the app
      "process.env": {
        VITE_API_KEY: env.VITE_API_KEY,
        VITE_AUTH_DOMAIN: env.VITE_AUTH_DOMAIN,
        VITE_DATABASE_URL: env.VITE_DATABASE_URL,
        VITE_PROJECT_ID: env.VITE_PROJECT_ID,
        VITE_STORAGE_BUCKET: env.VITE_STORAGE_BUCKET,
        VITE_MESSAGING_SENDER_ID: env.VITE_MESSAGING_SENDER_ID,
        VITE_APP_ID: env.VITE_APP_ID,
        VITE_MEASUREMENT_ID: env.VITE_MEASUREMENT_ID,
        VITE_FLASK_BACKEND_URL: env.VITE_FLASK_BACKEND_URL,
      },
    },
  };
});
