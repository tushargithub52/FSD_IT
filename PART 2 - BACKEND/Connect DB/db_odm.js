const mongoose = require("mongoose");
const mongo_URL = "mongodb://localhost:27017/FSD-IT-B";

mongoose
  .connect(mongo_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("DB Error: ", err.message);
  });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

const UserActivation = mongoose.model("UserActivation", userSchema);

const createUser = async () => {
  try {
    const newUser = new UserActivation({
      name: "kaushik",
      email: "kaushik@gmail.com",
      age: 32,
    });
    const user = await newUser.save();
    console.log("User Created successfully", newUser);
  } catch (err) {
    console.log("User Creation Error: ", err.message);
  }
};
//createUser();

const getUser = async () => {
  try {
    const users = await UserActivation.find();
    console.log("List of Users:", users);
  } catch (err) {
    console.log("user fetching Error", err.message);
  }
};
//getUser();

//update user
const updateUser = async () => {
  try {
    const updateUserdata = await UserActivation.findOneAndUpdate(
      { name: "kaushik" },
      { $set: { name: "Yash" } },
      { new: true }
    );
    console.log("data updated successufully", updateUserdata);
  } catch (err) {
    console.log("error", err.message);
  }
};

//updateUser();

const deleteUser = async () => {
  try {
    await UserActivation.deleteOne({ name: "Yash" });
    console.log("User Deleted successfully");
  } catch (err) {
    console.log("User Deletion error: ", err.message);
  }
};
// deleteUser();

const app = async () => {
  await createUser();
  await updateUser();
  await getUser();
  await deleteUser();
  await getUser();
};

app();
