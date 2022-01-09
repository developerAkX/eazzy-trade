module.exports = {
  reactStrictMode: true,
  rules: [
    {
      test: /\.ejs$/,
      use: {
        loader: "ejs-compiled-loader",
        options: {
          htmlmin: true,
          htmlminOptions: {
            removeComments: true,
          },
        },
      },
    },
  ],
  env: {
    ADMIN_EMAIL: "admin@eazzytrade.in",
    ADMIN_PASSWORD: "iGs3frjQ!2b9Bw4",
    MAIL_HOST_URL: "mail.eazzytrade.in",
    WEB_HOST_URL: "WWW.GOOGLE.COM",
    MAIL_PORT: 465,
    // 587,
  },
};
