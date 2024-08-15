import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AppDataSource } from 'shared-orm-library';

@Module({
  imports: [UsersModule],
})
export class AppModule {
  constructor() {
    AppDataSource.initialize()
      .then(() => {
        console.log('Data Source has been initialized!');
      })
      .catch((err) => {
        console.error('Error during Data Source initialization:', err);
      });
  }
}
