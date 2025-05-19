import path from 'path';

export default ({ env }) => {


  if (env('DATABASE_CLIENT') === 'sqlite') {
    return {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    };
  }

  return {
    connection: {
      filename: path.join(__dirname, '..', '..', '.db/current.db'),
    },
    useNullAsDefault: true,
  };
};
