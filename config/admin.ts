export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  build: {
    backend: {
      esbuild: {
        loader: {
          '.js': 'jsx',
          '.jsx': 'jsx',
          '.ts': 'ts',
          '.tsx': 'tsx'
        },
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        bundle: true,
        platform: 'node',
        target: 'node18',
        external: ['react', 'react-dom'],
        format: 'cjs',
        sourcemap: true,
        minify: false,
        keepNames: true,
        treeShaking: true,
        metafile: true,
        outdir: 'dist',
        outbase: 'src',
        define: {
          'process.env.NODE_ENV': '"development"'
        }
      }
    }
  }
});
