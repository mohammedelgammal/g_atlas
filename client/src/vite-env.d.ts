/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_AUTH_API_BASE_URL: string;
  readonly VITE_GAME_API_BASE_URL: string;
  readonly VITE_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
