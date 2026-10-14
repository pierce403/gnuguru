export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.gnu.guru') {
      url.hostname = 'gnu.guru';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 302);
    }
    return env.ASSETS.fetch(request);
  },
};
