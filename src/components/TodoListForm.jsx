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

// Opzioni disponibili per categoria e tag
const categories = ['Hobby', 'Casa', 'Lavoro', 'Altro'];
const tags = ['Tempo libero', 'Shopping', 'Cibo', 'Casa', 'Ufficio'];

const TodoListForm = () => {
  // Stato della lista delle attività
  const [todoList, setTodoList] = useState(initialList);

  // Stato del form per gestire i dati di un nuovo elemento
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: categories[0],
    tags: [],
    image: '',
    published: false,
  });

  // Funzione che aggiorna i dati del form quando l'utente scrive o seleziona qualcosa
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevState) => {

      if (type === 'checkbox' && name === 'tags') {
        const updatedTags = checked ? [...prevState.tags, value] : prevState.tags.filter((tag) => tag !== value);

        return { ...prevState, tags: updatedTags };
      }
    });














  }
  export default TodoListForm;