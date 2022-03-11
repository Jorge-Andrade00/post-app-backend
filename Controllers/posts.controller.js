const db = require("../database");

const getPosts = async (req, res) => {
  const dbRes = await db.query("select * from pg_post");
  res.json(dbRes.rows);
};

const createPost = async (req, res) => {
  const { postName, postDescription } = req.body;
  try {
    const bdResponse = await db.query(
      "insert into pg_post (nombre, descripcion) values ($1, $2)",
      [postName, postDescription]
    );
    res.json({
      message: "Post creado con exito",
      body: {
        post: { postName, postDescription },
      },
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const deletePost = async (req, res) => {
  try {
    const dbResponse = await db.query("select * from pg_post where id = $1", [
      req.params.id,
    ]);

    if (dbResponse.rows.length != 0) {
      await db.query("delete from pg_post where id = $1", [req.params.id]);
      res.json({
        message: "Post eliminado con exito",
        body: dbResponse.rows,
      });
    } 
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = {
  getPosts,
  createPost,
  deletePost,
};
//sequelize