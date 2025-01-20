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















}
export default TodoListForm;