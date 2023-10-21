import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'

import { AppModule } from './app.module'
import { ConfigApp } from './utils'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  ConfigApp(app)

  await app.listen(process.env.PORT)
  console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
