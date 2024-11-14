import styled from 'styled-components';

// 표준 <div> 요소를 확장한 MyPanel 컴포넌트를 정의한다.
const MyPanel = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: royalblue;
  color: white;
`;

export default function StyledComp() {
    return (
        <MyPanel><b>Styled JSX</b>는 JSX 표현식에 스타일 정의를 삽입하는 형식의 라이브러리입니다.</MyPanel>
    );
}