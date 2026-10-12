import { create } from "zustand";
const useStore = create((set) =>({
    username:"guest",
    isLoggedIn:true,
    count:0,
    increment : () => set((state) => ({count: state.count + 1})),
    decrement :() => set((state) => ({ count: state.count - 1})),
    user: (name) => set({username: name,isLoggedIn:false}),
    logout : () => set({username:"guest",isLoggedIn:true})
    
}));

// const store = create((set) =>({
//     count:0,
//     decrement:() =>
// }))

export default useStore;