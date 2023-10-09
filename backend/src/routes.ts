import { Application } from 'express'
import ProductController from './product/product.controller.js'
import AuthController from './auth/auth.controller.js'

const routes = (app: Application) => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    next()
  })

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/checkhealth', (req, res) => res.sendStatus(200))

  app.use('/product', ProductController)
  app.use('/auth', AuthController)
}

export default routes
