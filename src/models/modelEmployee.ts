import {model} from 'mongoose'
import Employee from '../interfaces/Employee';
import { employeeSchema } from '../schema/schemaEmployee';
import bcrypt from 'bcrypt'

employeeSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password') || !user.isNew) {
      return next();
    }
    try {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      next();
    } catch (err) {
      console.error(err)
    }
});

export const Users = model<Employee>('User', employeeSchema);
