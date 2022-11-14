// todos 배열을 props로 받아온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여줌.

// TodoListItem에서 삭제 함수 호출하기
// props로 받아온 onRemove 함수를 TodoListItem에 그대로 전달.

// TodoListItem에서 토글 함수 호출하기
// app에서 만든 onToggle 함수를 TodoListItem에서 호출가능하도록 TodoList를 거쳐 TodoListItem에게 전달.

// TodoList 컴포넌트 최적화하기
// 리스트 관련 컴포넌트 최적화 => 리스트 내부 컴포넌트, 리스트 자체 컴포넌트 양쪽 다 최적화 해줄 것.

// react-virtualized를 사용한 렌더링 최적화
// 브라우저 화면에 나오는 것들만 렌더링하고, 스크롤로 내려야 나오는 나머지 것들은 스크롤 내렸을 때만 렌더링 되게끔 최적화하는 방식.
import React from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem 
                    todo={todo} 
                    key={todo.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default React.memo(TodoList);