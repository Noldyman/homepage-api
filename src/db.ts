import mysql from "mysql2";

const dbHost = process.env.DB_HOST!;
const dbName = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbPassword = process.env.DB_PWD!;

export const dbConnection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
});

export default () => {
  dbConnection.connect((error) => {
    if (error) {
      console.log(`could not connect to MySQL DB. ${error}`);
    } else {
      console.log("Connected to MySQL DB...");
    }
  });
};
