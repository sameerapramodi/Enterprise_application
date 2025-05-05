
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/admin"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 491, hash: '1cb2f9501ed69fc69e8386e43471f8498b6e0cc8fed2149240ab9b3738b43a49', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: 'c9094981b57ca59a7279799b35f804211ce93c415b43819dba75f2a535027cd5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2212, hash: '5b97453c12b4c6cc484ef06830d299928cc5402601f31366ce3cc52dea17fb18', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 2212, hash: '5b97453c12b4c6cc484ef06830d299928cc5402601f31366ce3cc52dea17fb18', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
