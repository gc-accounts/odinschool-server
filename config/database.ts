import path from 'path';

export default ({ env }) => {


  if (env('IS_DEVELOPMENT') === 'true') {
    return {
      connection: {
        client: 'sqlite',
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    };
  }

  return {
    connection: {
      client: 'sqlite',
      filename: path.join(__dirname, '..', '..', '.db/current.db'),
    },
    useNullAsDefault: true,
  };
};
