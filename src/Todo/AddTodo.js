import React, {useState} from 'react'
import PropTypes from 'prop-types'


function useInputValue (defaltValue = '') {
    const [value, setValue] = useState(defaltValue)

    return {
        value, 
        onChange: event => setValue(event.target.value)
    }

}


function AddTodo({onCreate}) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if(value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input {...input} />
            <button type='submit'>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo