// 30-todo-manager.js

// Simple console-based TODO manager

let todos = [];

// Function to add a task
function addTodo(task) {
  todos.push({ task: task, done: false });
  console.log(`✅ Added: "${task}"`);
}

// Function to list all tasks
function listTodos() {
  console.log("\n📋 Your TODO List:");
  if (todos.length === 0) {
    console.log("No tasks yet!");
    return;
  }
  todos.forEach((todo, index) => {
    const status = todo.done ? "✅" : "❌";
    console.log(`${index + 1}. ${todo.task} [${status}]`);
  });
}

// Function to mark a task as done
function markDone(index) {
  if (index < 1 || index > todos.length) {
    console.log("❌ Invalid task number.");
    return;
  }
  todos[index - 1].done = true;
  console.log(`🎉 Task ${index} marked as done!`);
}

// Function to delete a task
function deleteTodo(index) {
  if (index < 1 || index > todos.length) {
    console.log("❌ Invalid task number.");
    return;
  }
  const removed = todos.splice(index - 1, 1);
  console.log(`🗑️ Deleted: "${removed[0].task}"`);
}

// --- Sample usage (for testing) ---
addTodo("Buy groceries");
addTodo("Do JavaScript homework");
listTodos();

markDone(2);
listTodos();

deleteTodo(1);
listTodos();
