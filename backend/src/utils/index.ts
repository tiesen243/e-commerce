import { ValidationPipe } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'
import { SwaggerModule } from '@nestjs/swagger'
import { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import { join } from 'path'
import { config, options } from './swagger'

const ConfigApp = (app: NestExpressApplication) => {
  // Config
  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  // CORS
  app.enableCors()
  if (process.env.NODE_ENV !== 'development')
    app.use(
      helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
          'img-src': ["'self'", 'https:', 'data:'],
        },
      }),
    )

  app.use((req: Request, res: Response, next: NextFunction) => {
    req.headers['if-none-match'] = 'no-match-for-this'
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept')
    next()
  })

  // Swagger
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api-docs', app, document, options)
  app.useStaticAssets(
    join(__dirname, '..', '..', 'node_modules/swagger-ui-dist'),
    {
      index: false,
    },
  )
}

export default ConfigApp
