/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLOUD_NAME: string
  // Add another variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
