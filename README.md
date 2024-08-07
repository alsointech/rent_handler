## Description

   PT Backend Challenge is a task to build a comprehensive API using Nest.js and Node.js for managing clients, CDs, and rentals.
    tabstract: consider this document as the manual or the reference card related to functional software development of the API, endpoints, and required functionalities
    tarch: this project uses a modular architecture which makes it easy to scale by adding new features effortlessly
    tif you want to try this from your local machine, you can consume the following resources:
    tcode base: you can find it in the GitHub Repository, please visit: [GitHub repo](https://github.com/alsointech/rent_handler)

## Installation

```bash
$ npm install
```

> setup your `.env` file base on the `.env.template`
> setup your `.serviceAccountKey` from the firebase project
> make sure your docker desktop is running and raise the db container `docker compose up -d`
> make sure you have the latest version of the postman collection 

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources
- https://docs.nestjs.com/first-steps
- https://swagger.io/
- https://typeorm.io/
- https://firebase.google.com/docs

## Dependencies
```bash
npm install @nestjs/swagger swagger-ui-express
npm install joi
npm install firebase-admin
npm install typeorm @nestjs/typeorm
```

## Stay in touch

- Author - Alejandro Franco Cedeño

