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

const categories = ['Hobby', 'Casa', 'Lavoro', 'Studio'];
const availableTags = ['Tempo libero', 'Shopping', 'Cibo', 'Casa', 'Sport', 'Tecnologia'];

const ArticleList = () => {
  const [articleList, setArticleList] = useState(initialList);
  const [newArticle, setNewArticle] = useState({
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
    const newList = [...articleList, newArticle];
    setArticleList(newList);

    // Resetta il form
    setNewArticle({
      title: '',
      content: '',
      category: '',
      tags: [],
      image: '',
      published: false,
    });
  };

  const handleRemoveList = (index) => {
    const newList = articleList.filter((item, i) => i !== index);
    setArticleList(newList);
  };

  const handleTagChange = (tag) => {
    setNewArticle((prevTodo) => {
      const tags = prevTodo.tags.includes(tag)
        ? prevTodo.tags.filter((t) => t !== tag)
        : [...prevTodo.tags, tag];
      return { ...prevTodo, tags };
    });
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className='title d-flex mb-3 justify-content-center'>
          <h2>Il tuo Blog</h2>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={newArticle.title}
            onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
            placeholder="Inserisci il titolo"
          />
        </div>

        <div className="input-group mb-3">
          <textarea
            className="form-control"
            value={newArticle.content}
            onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
            placeholder="Inserisci il contenuto"
          ></textarea>
        </div>

        <div className="input-group mb-3">
          <select
            className="form-select"
            value={newArticle.category}
            onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
          >
            <option value="">Seleziona una categoria</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Tags:</label>
          <div>
            {availableTags.map((tag) => (
              <div key={tag} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`tag-${tag}`}
                  checked={newArticle.tags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                />
                <label className="form-check-label" htmlFor={`tag-${tag}`}>{tag}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Immagine (URL):</label>
          <input
            type="text"
            className="form-control"
            value={newArticle.image}
            onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })}
            placeholder="Inserisci URL dell'immagine"
          />
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="published"
            checked={newArticle.published}
            onChange={(e) => setNewArticle({ ...newArticle, published: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="published">
            Pubblica articolo
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Aggiungi
        </button>
      </form>

      <ul className="list-group mt-4">
        {articleList.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.title}</span>
            <i
              className="fa-solid fa-trash pointer"
              onClick={() => handleRemoveList(index)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
