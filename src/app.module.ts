import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/task_management'), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}