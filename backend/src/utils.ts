import { DocumentBuilder } from '@nestjs/swagger'

// Swagger
const config = new DocumentBuilder()
  .setTitle('Yuki API')
  .setDescription('Restful API for Yuki Shop')
  .setVersion('1.0')
  .setContact('Tiesen', 'https://tiesen.id.vn', 'ttien56906@gmail.com')
  .setLicense('MIT', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  .setTermsOfService('https://www.youtube.com/watch?v=qWNQUvIk954')
  .addBasicAuth(
    {
      type: 'http',
      scheme: 'bearer',
      description: 'Please enter your token',
      bearerFormat: 'JWT',
      name: 'Authorization',
      in: 'header',
    },
    'JWT-Auth',
  )
  .build()

const options = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customSiteTitle: 'TY API',
  customfavIcon:
    'https://raw.githubusercontent.com/tiesen243/albums/main/favicon.ico',
}

export { config, options }
