import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    // url: 'postgres:// root: 123456@ localhost: 5432/ rent_handler',
    username: 'alsohuman',
    password: '123456',
    host: 'localhost',
    port: 5432,
    database: 'rent_handler',
    synchronize: false,
    logging: false,
    entities: ['src/**/**/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts'],
    migrationsTableName: 'migrations',
});

