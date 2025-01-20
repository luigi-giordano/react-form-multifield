import { useState } from 'react';

const initialList = [
  {
    title: 'Acquisti in fumetteria',
    content: 'Comprare manga e fumetti preferiti.',
    category: 'Hobby',
    tags: ['Tempo libero', 'Shopping'],
    image: '',
    published: true,
  },
  {
    title: 'Fare la spesa',
    content: 'Lista di alimenti e prodotti da comprare.',
    category: 'Casa',
    tags: ['Cibo', 'Casa'],
    image: '',
    published: false,
  },
];

const ArticleList = () => {

  const [todoList, setTodoList] = useState(initialList);
  const [newTodo, setNewTodo] = useState({
    title: '',
    content: '',
    category: '',
    tags: [],
    image: '',
    published: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aggiungi il nuovo oggetto alla lista
    const newList = [...todoList, newTodo];
    setTodoList(newList);

    setNewTodo({
      title: '',
      content: '',
      category: '',
      tags: [],
      image: '',
      published: false,
    });
  }

  const handleRemoveList = (index) => {
    const newList = todoList.filter((item, i) => i !== index);
    setTodoList(newList);
  }

  return (
    <div className="container my-5">
      <form action="#" onSubmit={handleSubmit}>
        <div className='title d-flex mb-3 justify-content-center'>
          <h2>Il tuo Blog</h2>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            placeholder="Inserisci il titolo"
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={newTodo.content}
            onChange={(e) => setNewTodo({ ...newTodo, content: e.target.value })}
            placeholder="Inserisci il contenuto"
          />


          <button className="btn btn-outline-secondary btn-primary text-white" type="submit">
            Aggiungi
          </button>
        </div>

      </form>

      <ul className="list-group">
        {todoList.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.title}</span>
            <i
              className="fa-solid fa-trash pointer"
              onClick={() => handleRemoveList(index)}>
            </i>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default ArticleList;
