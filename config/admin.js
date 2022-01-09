module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '563aaadf8ce8d2518c751e9ba92140e9'),
  },
});
