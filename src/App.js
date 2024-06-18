import './App.css';
import { Component } from 'react';
import TodoItem from './components/todoItems';

class App extends Component {
  state = {
    list_of_todos: [ 'HTML', 'CSS', 'JAVSCRIPT', 'PYTHON' ],
    input_value : ''
  };

  changeInputValue = ( event ) => {
    this.setState ( { input_value : event.target.value } )
  }


  submitValues = (event) => {
    event.preventDefault();
    const { input_value } = this.state 
    this.setState ( ( prevState ) => ( { input_value : '',  list_of_todos : [ ...prevState.list_of_todos, input_value ] } ) )
  };

  delete_on_names = ( todoIndex ) => {
   
    const { list_of_todos } = this.state 
    const filtered_list_of_names = list_of_todos.filter ( ( _, index ) => index !== todoIndex )

    this.setState ( { list_of_todos : filtered_list_of_names } )

  }



  render() {
    const { list_of_todos, input_value } = this.state;
    const reversed_array = list_of_todos.reverse ( )
    return (

      <div className='main_container'>
     
        <div className='form_and_item_container'>

          <form onSubmit={this.submitValues} >
            <input placeholder='Enter your items' className='input_style' value={input_value} type='text' onChange={this.changeInputValue}/>
            <button className='submit_button' type='submit'>Submit</button>
          </form>

          <div className='all_items_container'>
              {reversed_array.map((eachOne, index ) => (
                <TodoItem eachOne={eachOne} onDelete = { ( ) => { this.delete_on_names ( index ) } } />
              ))}
          </div>

        </div>

      </div>
    );
  }
}

export default App;
