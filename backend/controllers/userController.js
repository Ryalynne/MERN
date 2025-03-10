import sql from "mssql";

export const getTitle = async (req, res) => {
  try {
    const result = await sql.query("select * from Job_Title");
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getSalaryList = async (req, res) => {
  try {
    const result = await sql.query(
      "select User_Salary.id, User_Salary.position,  User_Salary.salary,  Job_Title.Job_Title from User_Salary inner join Job_Title on User_Salary.dep_id = Job_Title.id"
    );
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getPositions = async (req, res) => {
  try {
    const result =
      await sql.query`select * from User_Salary where dep_id = ${req.params.id}`;
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getSalary = async (req, res) => {
  try {
    const result =
      await sql.query`select * from User_Salary where id = ${req.params.id}`;
    res.status(200).json(result.recordset[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTitleByID = async (req, res) => {
  try {
    const result =
      await sql.query`select * from Job_Title WHERE id = ${req.params.id}`;
    res.status(200).json(result.recordset[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getUsers = async (req, res) => {
  try {
    const result = await sql.query(
      "select Users.id , Users.full_name ,  Users.gender , Users.email , Job_Title.Job_Title, User_Salary.position , User_Salary.salary , User_Salary.salary * 12 as anual_salary from Users inner join User_Salary on Users.salary_id = User_salary.id inner join Job_Title on User_Salary.dep_id = Job_Title.id "
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
      await sql.query`select * from Users inner join User_Salary on Users.salary_id = User_salary.id inner join Job_Title on User_Salary.dep_id = Job_Title.id WHERE Users.id = ${req.params.id}`;
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
    const { name, email, gender, position_id } = req.body;
    await sql.query`INSERT INTO Users (full_name, email , gender , salary_id) VALUES (${name}, ${email} , ${gender}  , ${position_id})`;
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createSalary = async (req, res) => {
  try {
    const { dep_id, Position, Salary } = req.body;
    await sql.query`INSERT INTO User_Salary (dep_id, position,salary) VALUES (${dep_id}, ${Position} , ${Salary})`;
    res.status(201).json({ msg: "Salary Created" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, gender, position_id } = req.body;
    await sql.query`UPDATE Users SET full_name = ${name}, email = ${email}, gender = ${gender} , salary_id = ${position_id} WHERE id = ${req.params.id}`;
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

export const createDept = async (req, res) => {
  try {
    const { Department_Name } = req.body;
    await sql.query`INSERT INTO Job_Title (Job_Title) VALUES ( ${Department_Name})`;
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//

export const updateSalary = async (req, res) => {
  try {
    const { depId, position, salary } = req.body;
    await sql.query`UPDATE User_Salary SET dep_id = ${depId}, position = ${position}, salary = ${salary} WHERE id = ${req.params.id}`;
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateJobTitle = async (req, res) => {
  try {
    const { job_title } = req.body;
    await sql.query`UPDATE Job_title SET Job_title = ${job_title} WHERE id = ${req.params.id}`;
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
