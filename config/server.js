module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('API_HOST', "https://mestob.herokuapp.com"),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '454e7851472af487753fcde9af5ae8de'),
    },
  },
});
