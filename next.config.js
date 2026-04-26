const isDev = process.env.NODE_ENV !== "production";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self'
    ${isDev ? "'unsafe-eval'" : ""}
    'unsafe-inline'
    https://www.googletagmanager.com
    https://tagassistant.google.com
    https://www.google-analytics.com
    https://www.googletagservices.com
    https://www.gstatic.com
    https://www.google.com
    https://va.vercel-scripts.com;

  style-src 'self' 'unsafe-inline';

  img-src 'self' data:
    https://www.google-analytics.com
    https://www.googletagmanager.com
    https://www.gstatic.com;

  font-src 'self'
    https://fonts.gstatic.com;

  connect-src 'self'
    https://www.google-analytics.com
    https://www.google-analytics.com/g/collect
    https://www.google-analytics.com/debug/collect
    https://region1.google-analytics.com
    https://www.googletagmanager.com
    https://tagassistant.google.com
    https://www.googletagservices.com
    https://vitals.vercel-insights.com
    https://va.vercel-scripts.com;

  frame-src
    https://tagassistant.google.com
    https://www.googletagmanager.com
    https://www.google.com;

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