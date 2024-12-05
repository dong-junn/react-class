import { Link, Outlet } from 'react-router-dom';

export default function RouterApp() {
    return (
        <>
            <ul>
                {/* 라우팅 지원 링크 생성 */}
                <li><Link to="/">홈</Link></li>
                <li><Link to="/article">기사</Link></li>
                <li><Link to="/about">회사 소개</Link></li>
            </ul>
            <hr />
            {/* 링크 표시 영역 확보 */}
            <Outlet />
        </>
    );
}
