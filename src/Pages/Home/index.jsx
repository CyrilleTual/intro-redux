import { useSelector } from 'react-redux';
import Form from '../Form';

function Home() {

    const {list} = useSelector (state => ({
    ...state.product
    }));

    // au click on change l'état de la tache -> done 

    const isDone = (title) => {
        console.log ( "tack done : ", title)
    }


    
  return (
      <>
      <div>My ToDoList : </div>
      <ul>
        {console.log("titiooo", list)}
        {list.map((item, i) => (
          <li key={i}>
            {" "}
            {item.title} <button onClick={ () => isDone(item.title)}>task done</button>
          </li>
        ))}
      </ul>

      <Form />
    </>
  );
}

export default Home