import { config } from 'dotenv'
import App from './app'
config()
const port = process.env.APP_PORT as unknown as number
const application = new App(port)
application.start()
