// todos 배열을 props로 받아온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여줌.

// TodoListItem에서 삭제 함수 호출하기
// props로 받아온 onRemove 함수를 TodoListItem에 그대로 전달.

import React from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({todos, onRemove}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
            ))}
        </div>
    );
};

export default TodoList;