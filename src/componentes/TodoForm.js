import React, { useState } from 'react'

function TodoForm(props) {
    const [text, setText] = useState("")

    function handleChange(event){
        let t = event.target.value
        setText(t)
    }

    function addItem(event){
        event.preventDefault()
        if(text){
            props.onAddItem(text)
            setText("")
        }
    }

    return (<form>
        <input onChange={handleChange} type="text" value={text} placeholder="Insira um item..."></input>
        <button className="buttonAdd"onClick={addItem}>Add</button>
    </form>)
}

export default TodoForm