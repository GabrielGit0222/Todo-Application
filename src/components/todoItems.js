import React from 'react';
import { Component } from 'react';

class TodoItem extends Component {

    state = {
        button_clicked : true, 
        button_text : 'Mark as done'
    }


    button_cliked = ( ) => {
        const { button_clicked } = this.state 
        this.setState ( { button_clicked : !button_clicked, button_text : button_clicked ? 'Undo' : 'Mark as done' } )
    }


    render ( ) {

        const { eachOne, onDelete } = this.props
        const { button_text, button_clicked } = this.state

        const new_class_name = button_clicked ? 'regular_styles' : 'class_name_line_though'

        return (

            <div className='todo_item_container'>
                <p className = {new_class_name}> { eachOne } </p>
                <div>
                    <button className='mark_as_done_button_styles' onClick = {this.button_cliked}> { button_text } </button>
                    <button className='delete_button_styles' onClick = { onDelete }  > Delete </button>
                </div>
            </div>
        )
    }
}

export default TodoItem
