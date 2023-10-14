import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { SwaggerModule } from '@nestjs/swagger'
import { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import { join } from 'path'

import { AppModule } from './app.module'
import { config } from './utils'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  // Config
  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  // CORS
  app.enableCors()
  app.use(helmet())
  app.use((req: Request, res: Response, next: NextFunction) => {
    req.headers['if-none-match'] = 'no-match-for-this'
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept')
    next()
  })

  // Swagger
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api-docs', app, document)
  app.useStaticAssets(join(__dirname, '..', 'node_modules/swagger-ui-dist'), {
    index: false,
  })

  await app.listen(process.env.PORT || 3000)
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
