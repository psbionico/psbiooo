import {config} from 'dotenv'

config()

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://psocial:proyectosocial@cluster0.wvaufam.mongodb.net/?retryWrites=true&w=majority";
