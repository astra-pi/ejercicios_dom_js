//1.1
const boton = document.createElement('button');
boton.id = 'btnToClick';
boton.textContent = 'Haz click';
document.body.appendChild(boton);
boton.addEventListener('click', (event) => {
  console.log(event);
});

//1.2
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', (event) => {
  console.log(event.target.value);
});

//1.3
const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', (event) => {
  console.log(event.target.value);
});

// Albums
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
const ul = document.createElement('ul');
albums.forEach(album => {
  const li = document.createElement('li');
  li.textContent = album;
  ul.appendChild(li);
});
document.body.appendChild(ul);
