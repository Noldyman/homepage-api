import mysql from "mysql2";

const dbHost = process.env.DB_HOST!;
const dbName = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbPassword = process.env.DB_PWD!;

export const dbPool = mysql.createPool({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default () => {
  dbPool.getConnection((err, connection) => {
    if (err) {
      console.error(`Error connecting to MySQL: ${err}`);
      return;
    }
    console.log("Connected to MySQL DB...");

    connection.on("error", (err) => {
      console.error(`MySQL connection error: ${err}`);
    });

    connection.release();
  });
};
