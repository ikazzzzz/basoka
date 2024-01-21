import mongoose from "mongoose"
import dotenv from 'dotenv';

import { edgeServerAppPaths } from "next/dist/build/webpack/plugins/pages-manifest-plugin"

dotenv.config();
const url = process.env.MONGODB_URI as string 
let connection: typeof mongoose

const startDb = async () => {
  if (!connection) connection = await mongoose.connect(url)
  return connection
}

export default startDb
