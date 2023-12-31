import { DocumentBuilder, OpenAPIObject, SwaggerCustomOptions } from '@nestjs/swagger'

const config: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
  .setTitle('TN | API')
  .setDescription('Restful API for TN | Project')
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
  .addTag('auth', 'Authentications API')
  .addTag('user', 'User API')
  .addTag('product', 'Product API')
  .build()

const options: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customSiteTitle: 'TN | API',
  customfavIcon: 'https://raw.githubusercontent.com/tiesen243/albums/main/favicon.ico',
}

export { config, options }
