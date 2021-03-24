// Генерация данных

const ARTICLES_SIZE = 1000;
const RELATIONS_SIZE = 50000;

// Статьи
const articles = [];
for (let i = 0; i < ARTICLES_SIZE; i++) {
  const article = { id: i, parents: [], children: [] };
  articles.push(article);
}

// Связи статей (статья может быть родительской по отношению к другой)
const relations = [];
for (let i = 0; i < RELATIONS_SIZE; i++) {
  const relation = {
    article_id: Math.floor(Math.random() * ARTICLES_SIZE),
    parent_id: Math.floor(Math.random() * ARTICLES_SIZE),
  };
  relations.push(relation);
}

// Обработка данных, прописываем статье в объект ее дочерние и родительские связи

const start = new Date().getTime();

relations.forEach((relation) => {
  const parent = relation.parent_id;
  const children = relation.article_id;

  if (articles[parent].parents.includes(children) === -1) {
    articles[parent].parents.push(children);
  }

  if (articles[children].children.includes(parent) === -1) {
    articles[children].children.push(parent);
  }
});

document.write('Processing time ');
document.write(new Date().getTime() - start + 'ms');
document.write('<br>');
document.write('Оптимизируйте время обработки данных');
