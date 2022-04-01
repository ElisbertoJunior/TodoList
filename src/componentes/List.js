import React from 'react';
import Card from './Card'

function Done(props){

    if(props.done){
        return (<span>Feito</span>)
    } else {
        return (<span>Pendente</span>)
    }
}

function List(props) {
    
    return (<ul>
        {props.items.map(item => <li  key={item.id}>
            <Card className={item.done ? "done item" : "item"}>
                {item.text}
                <div>
                    <button className="btn-status" onClick={()=>{props.onDone(item)}}><Done done={item.done}></Done></button>
                    <button className="btn-delete" onClick={()=>{props.onItemDeleted(item)}}>Delete</button>
                </div>
            </Card>
        </li>)}
    </ul>)
}


export default List

