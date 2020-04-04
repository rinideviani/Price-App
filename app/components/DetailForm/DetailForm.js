import React, { PureComponent } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';  
import style from './style.css';   


class DetailForm extends PureComponent {

  render() {
      
    const { todo, onFormSubmit, onNameChange, onDescriptionChange, onDeadlineChange } = this.props;
        
   
    return (
      <div className='create-todo-form'>
          {!todo.id && <h3>Add Product</h3>}
          {todo.id && <h3>Product Detail</h3>}
          <form onSubmit={(event) => onFormSubmit(event)}>
              <label>
                  Name: &nbsp;
                  <TextField
                      name="name"
                      className="form-input"
                      value={todo.name}
                      onChange={(event) => onNameChange(event)}
                      required/>
              </label>
              <label>
                  Link: &nbsp;
                  <TextField
                      name="description"
                      value={todo.description}
                      onChange={(event) => onDescriptionChange(event)}
                      required/>
              </label>
              &nbsp;
             
              <RaisedButton
                  label={todo.id ? 'Back' : 'Add'}
                  primary={true}
                  type='submit'/>
               
          </form>
                  
          <h3>Images:</h3>
               
       
          
      </div>
    )
  }
}


export default DetailForm;
