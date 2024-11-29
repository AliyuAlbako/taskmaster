import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// create task
const User = require("./User"); // Import User model
const Task = require("./Task"); // Import Task model

const createTask = async () => {
  try {
    // Example: Find a user by email (ensure the user exists)
    const user = await User.findOne({ email: "johndoe@example.com" });

    if (!user) {
      console.error("User not found");
      return;
    }

    // Create a task for the user
    const newTask = new Task({
      userId: user._id, // Reference the user ID
      title: "Complete TaskMaster Project",
      description: "Work on the full-stack task management system.",
      priority: "high",
      deadline: new Date("2024-12-01T23:59:59Z"),
    });

    await newTask.save();
    console.log("Task created successfully:", newTask);
  } catch (err) {
    console.error("Error creating task:", err.message);
  }
};

createTask();

