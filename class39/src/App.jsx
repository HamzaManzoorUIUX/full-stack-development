import { useState } from "react";
import Counter from "./component/Counter";
import TodoApp from "./component/TodoApp";

const App = () => {
    const [showComponent, setShowComponent] = useState(true)
    return (
        <div>
            {/* {
                showComponent && <Counter />
            } */}
            <TodoApp />
            {/* <button onClick={() => setShowComponent(!showComponent)}>
                click me
            </button> */}
        </div>
    );
};

export default App;