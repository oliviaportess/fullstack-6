## Setting up the database

In the database_creation folder you will find two files to set up a MySQL database and tables. This needs to be completed before you run the app.

To create the database, run the create_database sql file.

To create the tables, run the create_tables sql file.

To add data into the tabls, run the insert_data sql file.

## .env file

Create a `.env` file using the .env.example file for example structure

You will need to ensure that for `MYSQL_PASSWORD = `, is set to your personal MySQL password.

## Install dependencies

Make sure your terminal is in the server folder.

To install dependencies, run the following command in the terminal:

```
npm install
```

## Start the server

To start the server, run the following command in the terminal:

```
npm start
```

### Run lint check

To run the ESLint dependency to check for lint errors, run the following command in the terminal:

```
npm run lint
```

### Run lint fix

To run the ESLint dependency to automatically fix lint errors, run the following command in the terminal:

```
npm run lint-fix
```
