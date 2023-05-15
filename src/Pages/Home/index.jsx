import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { itIsDone } from '../../store/slices/product';

import Form from '../Form';

function Home() {

    const {list} = useSelector (state => ({
    ...state.product
    }));

    // au click on change l'état de la tache -> done 
    const dispatch = useDispatch();

    const done = (polo) => {
        //console.log ( "tack done : ", polo)
        dispatch (itIsDone(polo));
    }


    
  return (
    <>
      <div>My ToDoList : </div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>
             
            {item.title}
            <button onClick={() => done(item.title)}>task done</button>
            {item.isDone ? " c'est fait " : " to do"}
          </li>
        ))}
      </ul>

      <Form />
    </>
  );
}

export default Home