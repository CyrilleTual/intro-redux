import React from 'react'
import { useDispatch } from 'react-redux';
import { add, deleteAll } from '../../store/slices/product';


function Form() {

    const dispatch = useDispatch();
    const [ inputs, setInputs] = React.useState({newTask:""});

    const onChangeHandler = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();   
        dispatch(
          add({
            title: inputs.newTask,
            isDone: false,
          })
        );     
        setInputs({ ...inputs, ["newTask"]:""});
        //console.log(inputs);
    }  


  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="newAction">Nouvelle tâche :</label>
        <br />
        <input
          type="text"
          value={inputs.newTask}
          name="newTask"
          onChange={onChangeHandler}
        />
        <input type="submit" value="Envoyer" />
      </form>

      <button
        value="Delete All"
        onClick={() => {
          dispatch(deleteAll());
        }}
      >
        delete all
      </button>
      
    </>
  );
}

export default Form