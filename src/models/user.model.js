import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  email: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

export default mongoose.model('User', schema);
