import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL } from 'url'
import path from 'path'

const getSrcAliases = (srcFolders: string[]): { [key: string]: string } =>
  srcFolders.reduce((acc, srcFolder) => {
    const aliasPath = 'src/' + srcFolder

    return {
      ...acc,
      [srcFolder]: path.resolve(__dirname, aliasPath),
    }
  }, {})

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const srcFolders = [
    'utils',
    'components',
    'services',
    'assets',
    'pages',
    'hooks',
    'types',
    'styles',
    'config',
  ]

  const aliases = {
    ...{
      public: path.resolve(__dirname, './public'),
    },
    ...getSrcAliases(srcFolders),
  }

  return {
    plugins: [react(), viteTsconfigPaths()],
    server: {
      open: false, // automatically open the app in the browser
      port: 3000,
      proxy: {
        '/prismic-api': {
          target: 'https://scaleless.cdn.prismic.io/api/v2',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/prismic-api/, ''),
        },
      },
    },
    resolve: {
      alias: aliases,
    },
    build: {
      outDir: 'build',
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  }
})
