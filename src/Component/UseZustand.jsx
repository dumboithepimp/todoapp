import useStore from "./MyZustand";

const UseZustand =() => {
   const count = useStore((state) => state.count)
   const increment = useStore((state) => state.increment)
   const decrement = useStore((state) => state.decrement)
   const username = useStore((state) =>state.username)
   const isLoggedIn = useStore((state) => state.isLoggedIn)
    // const {count,increment,decrement} =useStore()

    return (
      <div>
        <p>count:{count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrease</button>


        <nav>
          <h3>my app</h3>
          <p>welcome,{username}! status:{isLoggedIn ?"online":"offline"}</p>
        </nav>
      </div>
    );
}


export default UseZustand;