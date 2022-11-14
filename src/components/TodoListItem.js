// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트.
// todo 객체를 받아와서 상태에 따라 다른 스타일의 UI를 보여줌.

// 삭제 버튼을 누르면 TodoListItem에서 onRemove 함수에 현재 자신이 가진 id를 넣어서 삭제 함수를 호출하도록 설정.

// TodoList로부터 토글 함수 받아오기

// 느려지는 원인 분석
// 리렌더링 발생 상황들
// 1. 자신이 전달받은 props가 변경될 때
// 2. 자신의 state가 바뀔 때
// 3. 부모 컴포넌트가 리렌더링될 때 <<< 여기에 해당
// 4. forceUpdate 함수가 실행될 때
// 상황 분석
// 할 일 1 항목 체크 > App 컴포넌트 state 변경되면서 App 컴포넌트 리렌더링 > 부모 컴포넌트 리렌더링에 따른 TodoList 컴포넌트 리렌더링 > 그 안의 무수한 컴포넌트도 리렌더링
// 할 일 1 항목에 대해서만 리렌더링 하면 되는데, 2 ~ 2500까지 전부 리렌더링 하게 되어서 성능이 저하됨.

// React.memo를 사용하여 컴포넌트 성능 최적화
// todo, onRemove, onToggle이 바뀌지 않으면 리렌더링 하지 않게 조치.

import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);