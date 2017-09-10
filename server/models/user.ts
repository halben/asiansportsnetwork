import * as mongoose from 'mongoose';
import { Document, Model } from 'mongoose';
import { User as HeroInterface } from '../interfaces/user';
import { userSchema } from '../schemas/user';

export interface UserModel extends HeroInterface, Document {}

export interface UserModelStatic extends Model<UserModel> {}

export const User = mongoose.model<UserModel, UserModelStatic>('User', userSchema);
