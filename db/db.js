const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: 'dbuser', // dbuser
    host: 'db', // db
    database: 'dbuser',
    password: '1234',
    // port: 4444
    // connectionString: process.env.PGURL //"postgres://postgres:pgres!@localhost/postgres"
});

async function createTable() {
    const query = {
        text: `CREATE TABLE IF NOT EXISTS rectangle (id serial primary key, name varchar(50), width varchar(10), height varchar(10), color varchar(20))`
    }

    try {
        var result = await pool.query(query);
    } catch (err) {
        console.error(err)
        return false;
    }
}

// Get all Rectangles in the database
async function getRects() {
    const query = {
        text: `SELECT * FROM rectangle ORDER BY id`
    }

    try {
        var result = await pool.query(query);
        return result.rows;
    } catch (err) {
        console.error(err)
        return false;
    }
}

// Get a rectangle by its id
async function getRectByID(id) {
    const query = {
        text: `SELECT * FROM rectangle WHERE id = $1`,
        values: [id]
    }

    try {
        var result = await pool.query(query);
        return result.rows[0];
    } catch (err) {
        console.error(err)
        return false;
    }
}

// Add a rectangle to the database
async function addRect(req) {
    const query = {
        text: `INSERT INTO rectangle (name, width, height, color) VALUES ($1,$2,$3,$4)`,
        values: [req.name, req.width, req.height, req.color]
    }

    try {
        // var result = await pool.query(query);
        await pool.query(query);
        // return result.rows[0];
    } catch (err) {
        console.error(err)
        return false;
    }
}

// Update a rectangle in the database
async function editRect(req) {
    const query = {
        text: `UPDATE rectangle SET name = $5, width = $1, height = $2, color = $3 WHERE id = $4`,
        values: [req.width, req.height, req.color, req.id, req.name]
    }

    try {
        // var result = await pool.query(query);
        await pool.query(query);
        // return result.rows[0];
    } catch (err) {
        console.error(err)
        return false;
    }
}

// Delete a rectangle from the database
async function delRect(id) {
    const query = {
        text: `DELETE FROM rectangle WHERE id=$1`,
        values: [id]
    }

    try {
        // var result = await pool.query(query);
        await pool.query(query);
        // return result.rows[0];
    } catch (err) {
        console.error(err)
        return false;
    }
}

module.exports = {
    createTable,
    getRects,
    getRectByID,
    addRect,
    editRect,
    delRect
}
