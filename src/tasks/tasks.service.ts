import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Task} from './interfaces/task.interface';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

    constructor(@InjectModel('Task') private taskModel:Model<Task> ){
        

    }
    

}
