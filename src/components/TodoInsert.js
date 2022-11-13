// 새로운 항목을 입력하고 추가하는 컴포넌트.
// state를 통해 인풋 상태를 관리.

// 인풋에 입력하는 값을 관리할 수 있도록 useState를 사용하여 value 상태를 정의.
// 추가로 인풋에 넣어 줄 onChange 함수 작성. -> 함수를 재사용 가능하도록 useCallback Hook 사용.

import React, {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    return (
        <form className="TodoInsert">
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