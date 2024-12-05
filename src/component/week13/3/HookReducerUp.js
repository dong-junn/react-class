import { useReducer } from 'react';

export default function HookReducerUp({ init = 0 }) { //NaN표시되어 교재랑 다르게 0으로 초기화 했습니다
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                // 카운트 값의 증감
                case 'update':
                    return { count: state.count + action.step };
                // 카운트 값 초기화
                case 'reset':
                    return { count: action.init };
                // 기본 동작(State를 그대로 반환)
                default:
                    return state;
            }
        },
        { count: init }
    );

    // 각 버튼에 대응하는 핸들러
    const handleUp = () => dispatch({ type: 'update', step: 1 });
    const handleDown = () => dispatch({ type: 'update', step: -1 });
    const handleReset = () => dispatch({ type: 'reset', init: 0 });

    return (
        <>
            <button onClick={handleUp}>카운트업</button>
            <button onClick={handleDown}>카운트다운</button>
            <button onClick={handleReset}>리셋</button>
            <p>{state.count}번 클릭되었습니다.</p>
        </>
    );
}
