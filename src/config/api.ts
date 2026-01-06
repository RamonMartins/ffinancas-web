// src/config/api.ts

// Define a URL base da API
function getAPIURL(): string {
    const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
    const urlPublic = process.env.NEXT_PUBLIC_API_URL_PUBLIC;
    const urlLocal = process.env.NEXT_PUBLIC_API_URL_LOCAL;

    if (env === 'production') {
        return urlPublic ? `https://${urlPublic.replace("https://", "").replace("http://", "")}` : "http://localhost:8000";
    }

    return urlLocal || "http://localhost:8000";
}


export const API_BASE_URL = getAPIURL();
