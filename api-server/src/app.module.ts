import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      sortSchema: true,
    }),
    TaskModule,
    PrismaModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true, // ConfigModuleをグローバルにすることで、他のモジュールで再インポート不要
      envFilePath: '.env', // デフォルトで'.env'を読み込むので省略可能
    }),
    AuthModule,
  ],
})
export class AppModule {}
