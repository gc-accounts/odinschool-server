module.exports = {
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
  entryPoints: ['src/admin/index.js'],
  define: {
    'process.env.NODE_ENV': '"development"'
  }
}; 