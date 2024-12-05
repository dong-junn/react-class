import { createContext } from 'react';
import { HookContextChild } from './HookContextChild';

// 컨텍스트 초기화
export const MyAppContext = createContext();

// 컨텍스트에 전달할 객체 준비
const config = {
    title: 'React 입문',
    lang: 'ko-KR',
};

export default function HookContext() {
    // 하위 요소에 대한 컨텍스트 적용
    return (
        <MyAppContext.Provider value={config}>
            <div id="c_main">
                <HookContextChild />
            </div>
        </MyAppContext.Provider>
    );
}
