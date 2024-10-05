import { User } from "../models/user.model.js";

// get all users
const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  const html = `
      ${allUsers
        .map(
          (user) =>
            `<h2>${user.firstName} ${user.lastName} - ${user.email} </h2>`
        )
        .join("")}
        `;
  return res.send(html);
};

// create new user
const createUser = async (req, res) => {
  const { firstName, lastName, email, gender, jobTitle } = req.body;
  console.log("firstName : ", firstName, "lastName : ", lastName);

  if (
    [firstName, lastName, email, gender, jobTitle].some(
      (field) => field?.trim() === ""
    )
  ) {
    return res.status(402).json({ message: " please fill all the fields" });
  }

  const checkUserByEmail = await User.findOne({ email: email });
  if (checkUserByEmail) {
    return res.send("User alredy registered");
  }

  const createUser = await User.create({
    firstName: firstName.toUpperCase(),
    lastName: lastName.toUpperCase(),
    gender,
    email,
    jobTitle,
  });

  return res.status(200).json(createUser);
};

// get user by id
const getUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: "User not found" });

  return res.json(user);
};
// update user by id

const updateUser = async (req, res) => {
  // todo : update user data
  return res.json({ status: "pending" });
};
// delete user by id

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "deleted successfully" });
};

export { getAllUsers, createUser, getUser, updateUser, deleteUser };
