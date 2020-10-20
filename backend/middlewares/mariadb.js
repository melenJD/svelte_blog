import mariadb from 'mariadb';

const dbInfos = {
  host: 'localhost',
  user: 'root',
  password: 'rkawk22',
  database: 'my_web',
  connectionLimit: 10
}

let pool = null;

export function connectPool() {
  try {
    pool = mariadb.createPool(dbInfos);
    console.log('db pool connect success');
  } catch (e) {
    throw e;
  }
}

export async function doQuery(queryString, arg) {
  let conn = null;
  let rows = null;
  try {
    conn = await pool.getConnection();
    rows = await conn.query(queryString, arg);
    console.log(`
    Query = ${queryString}
    arg = ${arg}
    rows = ${rows}`);
    return rows;
  } catch (e) {
    throw e;
  } finally {
    if (conn) {
      conn.end();
    }
  }
}