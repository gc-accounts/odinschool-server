import path from 'path';

export default ({ env }) => {
  const isDev = env.bool('IS_DEVELOPMENT', true);   // helper – treats “true”/“false” as booleans

  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: isDev
          ? path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db'))
          : path.join(__dirname, '..', '..', '.db/current.db'),
      },
      useNullAsDefault: true,
    },
  };
};
