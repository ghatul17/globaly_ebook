export function GET(_req) {
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID,
    redirect_uri: `${process.env.SITE_URL}/api/callback`,
    scope: 'repo,user',
    state: Math.random().toString(36).slice(2),
  });
  return Response.redirect(`https://github.com/login/oauth/authorize?${params}`);
}
