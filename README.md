Backend for Build week Anywhere-Fitness-3-PTCT <br/>
Base URL = https://anywherefitness-api.herokuapp.com <br/>

### Register Schema

(/api/auth/register)<br/>
Send a .post() to the endpoint with the following information.<br/>
Make sure you are sending data to the database as structured below:

```js
{
"username": "newUser",
"password": "abc123"
}
```

### Login Schema

(/api/auth/login)<br/>
Send a .post() to the endpoint with the following information:<br/>
Make sure you are sending data to the database as structured below:

```js
{
"username": "user",
"password": "abc123"
}
```

You will receive a token back for authentication<br/>

### USERS

|  CRUD  | METHOD | ROUTE              | SEND TO DB                                            |
| :----: | :----: | ------------------ | ----------------------------------------------------- |
| Create |  POST  | /api/auth/login    | {username(string)(unique) , password(string)}         |
| Create |  POST  | /api/auth/register | {username(string) , password(string) } |

### Class Schema

When you send .post or .put to create or edit a class, send data to the API in the following structure:

```js
{
    "name": "The Night Cap",
    "time": "20:30",
    "date": "2021-11-24",
    "duration": "45",
    "type": "Yoga",
    "intensity": "beginner",
    "location": "Bikram Boston",
    "capacity": 30,
    "reservations": 15
}
```

| Properties   | Schema                                                           |
| ------------ | ---------------------------------------------------------------- |
| name         | Not Required, if you don't fill it in, database will return null |
| time         | Required(string)(HH-MM)                                          |
| date         | Required(string)(YYYY-MM-DD)                                     |
| duration     | Required(string)(minutes)                                        |
| type         | Required(string)                                                 |
| intensity    | Required(string)                                                 |
| location     | Required(string)                                                 |
| capacity     | Not Required(integer)                                            |
| reservations | Not Required(integer)(# of customers who have booked the class)  |

### Classes

|  CRUD  | METHOD | ROUTE                   | Description              |
| :----: | :----: | ----------------------- | ------------------------ |
|  Read  |  GET   | /api/classes            | get all classes          |
|  Read  |  GET   | /api/classes/:class_id  | get one class by its id  |
| Create |  POST  | /api/classes            | create new classes       |
| Update |  PUT   | /api/classes/:class_id  | edit class information   |
| Delete | DELETE | /api/classes/:class_id  | delete class by id       |


## Scripts

- **start**: Runs the app in production.
- **server**: Runs the app in development.
- **migrate**: Migrates the local development database to the latest.
- **rollback**: Rolls back migrations in the local development database.
- **seed**: Truncates all tables in the local development database, feel free to add more seed files.
- **test**: Runs tests.
- **deploy**: Deploys the main branch to Heroku.

**The following scripts NEED TO BE EDITED before using: replace `YOUR_HEROKU_APP_NAME`**

- **migrateh**: Migrates the Heroku database to the latest.
- **rollbackh**: Rolls back migrations in the Heroku database.
- **databaseh**: Interact with the Heroku database from the command line using psql.
- **seedh**: Runs all seeds in the Heroku database.
