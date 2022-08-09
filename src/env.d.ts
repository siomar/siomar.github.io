/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GIRHUB_TOKEN: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
