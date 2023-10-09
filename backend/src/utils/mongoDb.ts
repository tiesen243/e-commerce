import mongoose from 'mongoose'

const MONGO_URI: string = process.env.MONGO_URI || ''

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {})
    console.log('Connected to DB')
  } catch (err) {
    console.log(err)
  }
}

export default connectToDB
