import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";

export default function Home() {
    const count = useSelector((state) => state.counter.value); // Access Redux state
    const dispatch = useDispatch(); // Access Redux dispatch

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}
