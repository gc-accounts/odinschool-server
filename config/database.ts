import path from 'path';

export default ({ env }) => {

  if(env('DATABASE_CLIENT') === 'sqlite') {
    return {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    };
  }

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'database-1.cjl5dn4w6t2w.ap-south-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'postgres'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'ultimate'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  };
};
