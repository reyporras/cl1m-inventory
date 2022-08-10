module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '75aa92257faf59673c4e1dbc182cede3'),
  },
});
