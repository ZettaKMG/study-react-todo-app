// todos 배열에 새 객체 추가하기
// todos 배열에 새 객체를 추가하는 onInsert 함수 만들기.
// 새로운 객체를 만들 때마다 id값 +1 해줘야 함. -> useRef로 id값 관리.
// onInsert 함수는 컴포넌트 성능을 아끼기 위해 useCallback으로 감싸줌.
// onInsert 함수 생성 후에는 이 함수를 TodoInsert 컴포넌트의 props로 설정.

// 지우기 기능 구현하기
// 배열 내장 함수 filter
// ㄴ 기존 배열은 그대로 둔 상태에서 특정 조건을 만족하는 원소들만 따로 추출하여 새 배열을 만듦.
// 예제
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const biggerThanFive = array.filter(number => number > 5);
// 결과: [6, 7, 8, 9, 10]

// todos 배열에서 id로 항목 지우기
// filter 함수로 onRemove 함수 작성.
// 함수 만든 후, TodoList의 props로 설정.

// 수정 기능
// onToggle 함수를 app에 만듦 > 해당 함수를 TodoList 컴포넌트에 props로 넣기 > TodoList를 통해 TodoListItem까지 전달.
// onToggle 구현하기

// 컴포넌트 성능 최적화
// 많은 데이터 렌더링하기 > 크롬 개발자 도구를 통한 성능 모니터링 > React.memo를 통한 컴포넌트 리렌더링 성능 최적화 > onToggle과 onRemove가 새로워지는 현상 방지하기 > react-virtualized를 사용한 렌더링 최적화
// 많은 데이터 렌더링하기

import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
      array.push({
          id: i,
          text: `할 일 ${i}`,
          checked: false,
      });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;