const isDev = process.env.NODE_ENV !== "production";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self'
    ${isDev ? "'unsafe-eval'" : ""}
    'unsafe-inline'
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: 
    https://www.google-analytics.com
    https://www.googletagmanager.com;
  font-src 'self';
  connect-src 'self'
    https://www.google-analytics.com
    https://www.googletagmanager.com
    https://vitals.vercel-insights.com
    https://va.vercel-scripts.com;
  frame-src https://www.googletagmanager.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  manifest-src 'self';
  media-src 'self';
  worker-src 'self';
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), fullscreen=(self)",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;