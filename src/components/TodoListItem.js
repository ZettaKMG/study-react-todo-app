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

export default TodoListItem;