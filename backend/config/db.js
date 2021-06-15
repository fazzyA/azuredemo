import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://ffdbaccount:X0VU9b4SUILTF3qfLAredDDO5JaKlemmhSRc6EsLNayrsUkZgHdVf2H8bhUg2k4MHmdtyqtHtOugAQxt0oE5xg==@ffdbaccount.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@ffdbaccount@", {
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
