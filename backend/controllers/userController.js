import sql from "mssql";

export const getDept = async (req, res) => {
  try {
    const result = await sql.query("select * from Department");
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const result = await sql.query(
      "select Users.id , Users.full_name ,  Users.gender , Users.email, Department.Department_Name from Users inner join Department on Department.id = Users.dep_id"
    );
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const result =
      await sql.query`select Users.full_name ,  Users.gender , Users.email, Users.dep_id ,Department.Department_Name from Users inner join Department on Department.id = Users.dep_id WHERE Users.id = ${req.params.id}`;
    if (result.recordset.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(result.recordset[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, gender, dep_id } = req.body;
    await sql.query`INSERT INTO Users (full_name, email , gender , dep_id) VALUES (${name}, ${email} , ${gender}  , ${dep_id})`;
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, gender, dep_id } = req.body;
    await sql.query`UPDATE Users SET full_name = ${name}, email = ${email}, gender = ${gender} , dep_id = ${dep_id} WHERE id = ${req.params.id}`;
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await sql.query`DELETE FROM Users WHERE id = ${req.params.id}`;
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
