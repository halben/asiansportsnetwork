import { Schema } from 'mongoose';

export const userSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  createdAt: { type: Date, default: Date.now },
  dob: Date
});

userSchema.pre('save', function(next) {
  if (!this.createdAt) {
    this.createdAt = new Date();
  }
  next();
});
