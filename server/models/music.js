import mongoose from 'mongoose';

const musicSchema = mongoose.Schema({
    title: String,
    description: String,
    rate: Number,
    musician: String,
    publishDate: Date
})

export default mongoose.model('musics', musicSchema);
