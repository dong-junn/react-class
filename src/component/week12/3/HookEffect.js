import { useEffect, useLayoutEffect, useState } from 'react';

// delay 초 동안 처리를 일시 정지하는 sleep 함수
const sleep = delay => {
    const start = Date.now();
    // 현재 시간이 start(시작 시간)을 초과할 때까지 루프 지속
    while (true) {
        if (Date.now() - start > delay) { break; }
    }
};


export default function HookEffect({ init = 0}) { //NaN으로 표시되는 문제가 있어서 교재와 다르게 0으로 초기화 했습니다
    const [count, setCount] = useState(0);

    // 2000밀리초 후 State(count)를 설정한다.
    useEffect(() => {
        // useLayoutEffect(() => {
        sleep(2000);
        setCount(init);
    }, []);

    const handleClick = () => {
        setCount(c => c + 1);
    };

    return (
        <>
            <button onClick={handleClick}>카운트</button>
            <p>{count}번 클릭되었습니다.</p>
        </>
    );
}
