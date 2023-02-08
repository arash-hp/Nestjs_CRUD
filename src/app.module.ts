import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './controller/student/student.controller';
import { StudentSchema } from './schema/student.schema';
import { StudentService } from './service/student/student.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://arashpwa:9YgSk6UYiyoiWlqN@cluster0.ift1lth.mongodb.net/myFirstCrud?retryWrites=true&w=majority'),
  MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])
  ],
  controllers: [AppController,StudentController],
  providers: [AppService,StudentService],
})
export class AppModule { }
