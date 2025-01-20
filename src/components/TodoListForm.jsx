import { useState } from 'react';

const initialList = [
  'Acquisti in fumetteria',
  'Fare la spesa',
  'Finire il progetto di lavoro',
  'Portare fuori la spazzatura'
];

const TodoListForm = () => {

  const [todoList, setTodoList] = useState(initialList);
  const [newTodoList, setNewTodoList] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Creazione clone todolist e aggiungo il nuovo elemento
    const newList = [...todoList, newTodoList];
    // Aggiorno la todolist
    setTodoList(newList);
  }

  const handleRemoveList = (index) => {
    // Creazione clone todolist
    const newListList = todoList.filter((item, i) => i !== index);
    // Aggiorno la todolist
    setTodoList(newListList);
  }

  return (
    <div className="container my-5">

      <form action="#" onSubmit={handleSubmit}>
        <div className='title d-flex mb-3 justify-content-center'><h2>Il tuo Blog</h2></div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={newTodoList}
            onChange={(e) => setNewTodoList(e.target.value)}
            placeholder="Inserisci un nuovo elemento nella lista"
          />
          <button
            className="btn btn-outline-secondary btn-primary text-white"
            type="submit"
          >Aggiungi</button>
        </div>

      </form>

      <>
        <ul className="list-group">
          {todoList.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item}</span>
              <i
                className="fa-solid fa-trash pointer"
                onClick={() => handleRemoveList(index)}>
              </i>
            </li>
          ))}
        </ul>
      </>

    </div>
  )
}
export default TodoListForm;