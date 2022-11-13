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

import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어보기',
      checked: false,
    },
  ]);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

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

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos}/>
    </TodoTemplate>
  );
};

export default App;