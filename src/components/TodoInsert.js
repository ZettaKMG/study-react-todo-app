// 새로운 항목을 입력하고 추가하는 컴포넌트.
// state를 통해 인풋 상태를 관리.

// TodoInsert value 상태 관리하기
// 인풋에 입력하는 값을 관리할 수 있도록 useState를 사용하여 value 상태를 정의.
// 추가로 인풋에 넣어 줄 onChange 함수 작성. -> 함수를 재사용 가능하도록 useCallback Hook 사용.

// TodoInsert에서 onSubmit 이벤트 설정하기
// 버튼 클릭시 발생하는 이벤트 설정.
// onInsert 함수에 현재 useState를 통해 관리하고 있는 value 값을 파라미터로 넣어 호출.

import React, {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // value 값 초기화

            // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
            // 이를 방지하기 위해 이 함수를 호출합니다.
            e.preventDefault();            
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;