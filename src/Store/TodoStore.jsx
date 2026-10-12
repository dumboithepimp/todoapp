import { create } from "zustand";

const UseTodoStore = create((set) => ({
  tasks: [],


  
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  deleteTask: (index) =>
    set((state) => ({
      tasks: state.tasks.filter((_, i) => i !== index),
    })),

  // updateTask:(index,newTask) =>
  //     set((state) => ({
  //         tasks:state.tasks.map((task,i) =>
  //           i === index ? newTask:task
  //         )
  //     })),
}));

export default UseTodoStore;
