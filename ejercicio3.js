//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul1 = document.createElement('ul');
countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ul1.appendChild(li);
});
document.body.appendChild(ul1);

//1.2
const bye = document.querySelector('.fn-remove-me');
bye.remove();

//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divCars = document.querySelector('[data-function="printHere"]');
const ul2 = document.createElement('ul');
cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ul2.appendChild(li);
});
divCars.appendChild(ul2);

//1.4
const countries2 = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const container = document.createElement('div');
countries2.forEach(item => {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');
  h4.textContent = item.title;
  img.src = item.imgUrl;
  div.appendChild(h4);
  div.appendChild(img);
  container.appendChild(div);
});
document.body.appendChild(container);

//1.5
const btnEliminarUltimo = document.createElement('button');
btnEliminarUltimo.textContent = 'Eliminar último';
btnEliminarUltimo.addEventListener('click', () => {
  const divs = container.querySelectorAll('div');
  if (divs.length > 0) {
    divs[divs.length - 1].remove();
  }
});
document.body.appendChild(btnEliminarUltimo);

//1.6
const container2 = document.createElement('div');
countries2.forEach(item => {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');
  const btn = document.createElement('button');
  h4.textContent = item.title;
  img.src = item.imgUrl;
  btn.textContent = 'Eliminar';
  btn.addEventListener('click', () => {
    div.remove();
  });
  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(btn);
  container2.appendChild(div);
});
document.body.appendChild(container2);
