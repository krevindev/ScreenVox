import { useState, useRef } from "react";

export function FormInput({ placeholder, type }) {

    const [state, setState] = useState({
        isTyped: false
    });

    const inputComponentRef = useRef(null);


    function handleInputChange() {
        const input = inputComponentRef.current.querySelector('input');
    };

    function handleInputFocus() {
        const floatingLabel = inputComponentRef.current.querySelector('.floating-label');
        const input = inputComponentRef.current.querySelector('input');

        input.placeholder = '';

        floatingLabel.classList.add('span-in');
        floatingLabel.classList.remove('span-out');
    }

    function handleInputBlur() {
        const floatingLabel = inputComponentRef.current.querySelector('.floating-label');
        const input = inputComponentRef.current.querySelector('input');

        input.placeholder = placeholder;

        floatingLabel.classList.add('span-out');
        floatingLabel.classList.remove('span-in');;
    }


    return (
        <div ref={inputComponentRef} className='form-input' onChange={handleInputChange}>
            <div className='form-input-container'>
                <span className='floating-label'>{placeholder}</span>
                <input type={type} placeholder={placeholder} onFocus={handleInputFocus} onBlur={handleInputBlur} />
            </div>
        </div>
    )
}
