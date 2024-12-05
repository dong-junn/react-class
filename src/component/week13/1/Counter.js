import { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>총 {count}번 클릭 했습니다.</h1>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}
