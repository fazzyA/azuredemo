import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose
    .connect(process.env.MONGO_URI, {
      auth: { user: process.env.DB_USER, password: process.env.DB_PASS},
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
