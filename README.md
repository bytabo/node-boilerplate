# node-express-boilerplate

Hello all you nodeJS API developers :-)

we at bytabo started this repository to provide a simple basic nodeJS express boilerplate, which lets you get started very fast!
All the tools you need, without too much clutter
* minimalistic
* best practice

Included
* Routes - just add your needed routes
* Factory Functions
* Tests
* Eslint config

## Getting Started

* install nodeJS on your machine
* create a .env file and fill it with missing values see ENV part
* start the server with ```npm start```
* test the API with ```npm run test```

## ENV

* PORT= ```SET UR PORT HERE eg 8100```
* DB_URL= ```SET UR MONGO DB URL HERE```
* TEST_URL= ```SET UR EXAMPLE API REQUEST URL HERE``` for example: 'https://jsonplaceholder.typicode.com/todos/1'

* RATELIMITER_TIME= ```SET A TIME LIMIT FOR REQUEST COUNT IN MS eg 900000 (15 MIN)```
* RATELIMITER_REQUESTS== ```SET A RATE LIMIT FOR REQUESTS eg 100 (in 15 min)```
* BASIC_AUTH_USER=user= ```USER FOR BASIC AUTH```
* BASIC_AUTH_PASSWORD== ```PASSWORD FOR BASIC AUTH```

* SMTP_HOST= ```SMTP SERVER```
* SMTP_PORT= ```SMTP PORT eg. 465 (default SSL port)```
* SMTP_USER= ```SMTP USER```
* SMTP_PASSWORD= ```SMTP PASSWORD```
* SMTP_FROM= ```SMTP EMAIL ADRESS OF USER```


## Send mails

Edit SMTP variables in .env file and setup your email template in ```./data/email-templates/default.ejs```

## Open issues

* Swagger
* Errorhandling
* Logging (eg bunyan or winston)
* Concurrency (performance) (really needed?)
* .editorconfig

## Authors

bytabo - Digital crew [https://www.bytabo.de](https://www.bytabo.de)

## Built With

- Express [https://expressjs.com/](https://expressjs.com/)
