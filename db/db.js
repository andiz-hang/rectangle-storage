const {Pool} = require('pg');
require('dotenv').config();

// console.log(process.env.PGURL);
const pool = new Pool({
    connectionString: process.env.PGURL
    // connectionString: "postgres://postgres:pgres!@localhost/postgres"
});

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

async function addRect(req) {
    const query = {
        text: `INSERT INTO rectangle (width, height, color) VALUES ($1,$2,$3)`,
        values: [req.width, req.height, req.color]
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

// TODO: Edit Rect
async function editRect(req) {
    const query = {
        text: `UPDATE rectangle SET width = $1, height = $2, color = $3 WHERE id = $4`,
        values: [req.width, req.height, req.color, req.id]
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

// TODO: Delete Rect
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

// var sql = 'SELECT * FROM rectangle ORDER BY id';
// pool.query(sql, function(err, result) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result.rows);
//     }
// })


module.exports = {
    getRects,
    getRectByID,
    addRect,
    editRect,
    delRect
}
