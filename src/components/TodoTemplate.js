// 화면을 가운데에 정렬.
// 앱 타이틀(일정 관리)을 보여줌.
// children으로 내부 JSX를 props로 받아 렌더링.

import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;