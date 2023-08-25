import { Entry } from '@/interfaces'
import mongoose, { Model, Schema } from 'mongoose'

export interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Number },
  status: {
    type: String,
    enum: { values: ['Pending', 'InProgress', 'Finished'] },
    message: '{VALUE} is not allowed',
  },
})

const EntryModel: Model<IEntry> =
  mongoose.models.Entry || mongoose.model('Entry', entrySchema)

export default EntryModel
