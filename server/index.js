import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;


import cors from "cors";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

app.use(cors());
app.use(express.json());

const connectDB = async () => {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("Database Connected");
};

connectDB();

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is Running",
    data: null,
  });
});

// ==============   All APIs here  =============

// Review Api

import Review from "./models/Review.js";

app.post("/review", async (req, res) => {
  const { name, message } = req.body;

  if (!name) {
    return res.json({
      success: false,
      message: "Name is required",
      data: null,
    });
  }

  if (!message) {
    return res.json({
      success: false,
      message: "Review is required",
      data: null,
    });
  }

  const newReview = await Review.create({
    name: name,
    message: message,
  });

  res.json({
    success: true,
    message: "Review added successfully",
    data: newReview,
  });
});
app.get("/review", async (req, res) => {
  const review = await Review.find();

  res.json({
    success: true,
    message: "Review featched successfully",
    data: review,
  });
});
app.delete("/review/:id", async (req, res) => {
  const { id } = req.params;

  await Review.deleteOne({ _id: id });

  res.json({
    success: true,
    message: "Review deleted successfully",
    data: null,
  });
});

// Login Api
import User from "./models/User.js"

// app.post("/user", async (req, res) => {
//   const { email, userName, userPhoto } = req.body; // Receive userPhoto from request body

//   if (!email || !userName) {
//     return res.json({
//       success: false,
//       message: "Email and Username are required",
//       data: null
//     })
//   }

//   try {
//     const user = await User.create({
//       email,
//       userName,
//       userPhoto // Save userPhoto to the database
//     });

//     res.json({
//       success: true,
//       message: "User created successfully",
//       data: user
//     });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//       data: null
//     });
//   }
// });

// app.get("/user", async (req, res) => {
//   const login = await User.find();

//   res.json({
//     success: true,
//     message: "User fetched successfully",
//     data: login
//   })

// });


// POST API endpoint to create or update user and set isLoggedIn flag
app.post("/user", async (req, res) => {
  const { email, userName, userPhoto } = req.body; // Receive user details from request body

  try {
    // Check if the user already exists in the database
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      // If the user exists, update the isLoggedIn flag to true
      existingUser.isLoggedIn = true;
      await existingUser.save();

      res.json({
        success: true,
        message: "User logged in successfully",
        data: existingUser // Only include user data in the response
      });
    } else {
      // If the user doesn't exist, create a new user entry with isLoggedIn set to true
      const newUser = await User.create({
        email,
        userName,
        userPhoto,
        isLoggedIn: true // Set isLoggedIn to true for new user
      });

      res.json({
        success: true,
        message: "New user created and logged in successfully",
        data: newUser // Only include user data in the response
      });
    }
  } catch (error) {
    console.error("Error creating or updating user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null
    });
  }
});

// GET API endpoint to fetch all users with isLoggedIn flag
app.get("/user", async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    res.json({
      success: true,
      message: "Users fetched successfully",
      data: users // Send the users array without modifying it
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null
    });
  }
});


// Logout Api

// POST API endpoint to handle user logout and update isLoggedIn flag
app.post("/user/logout", async (req, res) => {
  const { email } = req.body; // Receive email from request body

  try {
    // Find the user by email
    let user = await User.findOne({ email });

    if (user) {
      // Update the isLoggedIn flag to false
      user.isLoggedIn = false;
      await user.save();

      res.json({
        success: true,
        message: "User logged out successfully",
        data: user // Only include user data in the response
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
        data: null
      });
    }
  } catch (error) {
    console.error("Error logging out user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null
    });
  }
});








app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
