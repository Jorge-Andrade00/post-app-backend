require('dotenv').config()
const { Pool } =require('pg')

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB
})

module.exports = pool