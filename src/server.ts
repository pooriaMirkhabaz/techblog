
import App from './app'
import '../infrastructure/connections'
const port = process.env.APP_PORT as unknown as number
const application = new App(port)
application.start()
