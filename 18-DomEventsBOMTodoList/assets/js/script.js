document.addEventListener("DOMContentLoaded", function () {
    // ----------------- Calculator -----------------
    const Display = document.querySelector("#display");
  
    const buttons = {
      num1: "1",
      num2: "2",
      num3: "3",
      num4: "4",
      num5: "5",
      num6: "6",
      num7: "7",
      num8: "8",
      num9: "9",
      zero: "0",
      point: ".",
      addition: "+",
      subtraction: "-",
      multip: "*",
      division: "/"
    };
  
    for (const id in buttons) {
      const btn = document.querySelector(`#${id}`);
      if (btn) {
        btn.addEventListener("click", () => {
          Display.value += buttons[id];
        });
      }
    }
  
    const equalsBtn = document.querySelector("#equals");
    const clearBtn = document.querySelector("#clear");
  
    if (equalsBtn) {
      equalsBtn.addEventListener("click", () => {
        if (Display.value === "") {
          alert("Please enter a value!");
        } else {
          try {
            Display.value = eval(Display.value);
          } catch (e) {
            alert("Invalid expression!");
          }
        }
      });
    }
  
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        Display.value = "";
      });
    }
  
    // ----------------- Todo List -----------------
    const todoInput = document.querySelector("#todo-input");
    const addBtn = document.querySelector("#add-todo");
    const todoList = document.querySelector("#todo-list");
    const clearTodos = document.querySelector("#clear-todos");
  
    if (todoInput && addBtn && todoList && clearTodos) {
      addBtn.addEventListener("click", () => {
        const task = todoInput.value.trim();
        if (task === "") {
          alert("Please enter a task!");
          return;
        }
  
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.textContent = task;
  
        const removeBtn = document.createElement("button");
        removeBtn.className = "btn btn-sm btn-danger";
        removeBtn.textContent = "Remove";
  
        removeBtn.addEventListener("click", () => {
          li.remove();
        });
  
        li.appendChild(removeBtn);
        todoList.appendChild(li);
        todoInput.value = "";
      });
  
      clearTodos.addEventListener("click", () => {
        todoList.innerHTML = "";
      });
    }
  });
  