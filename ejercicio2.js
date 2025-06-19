//2.1
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);

//2.2
const divConP = document.createElement('div');
const p = document.createElement('p');
divConP.appendChild(p);
document.body.appendChild(divConP);

//2.3
const div6p = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const parrafo = document.createElement('p');
  div6p.appendChild(parrafo);
}
document.body.appendChild(div6p);

//2.4
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);

//2.5
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
for (const app of apps) {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

//2.7
const elementosEliminar = document.querySelectorAll('.fn-remove-me');
elementosEliminar.forEach(el => el.remove());

//2.8
const divs = document.querySelectorAll('div');
const pMedio = document.createElement('p');
pMedio.textContent = 'Voy en medio!';
document.body.insertBefore(pMedio, divs[1]);

//2.9
const divsInsert = document.querySelectorAll('.fn-insert-here');
divsInsert.forEach(div => {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
});
