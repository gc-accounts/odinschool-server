import path from 'path';

export default ({ env }) => {
  if (env('IS_DEVELOPMENT') === 'true') {
    return {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    };
  }

  return {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', '..', '.db/current.db'),
    },
    useNullAsDefault: true,
  };
};
