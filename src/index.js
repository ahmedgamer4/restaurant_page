import './style.css';
import loadHome from './home';


const content = document.createElement('div');
const btns = document.querySelectorAll('.btn');
content.id = "content";
document.body.appendChild(content);


function createHeader() {
  const header = document.createElement('div');
  header.classList.add('header');
  header.innerHTML = `<button class='btn'>Home</button>
                      <div><button class='btn'>Menu</button></div>
                      <div><button class='btn'>About</button></div>`
                                          

  return header;
}

function createMain() {
  const main = document.createElement('main');
  main.id = 'main';
  content.appendChild(main);

  return main;
}


content.appendChild(createHeader());;
content.appendChild(createMain());
// loadHome();
btns.forEach(btn => {
  btn.addEventListener('click', loadHome());
});
// document.body.appendChild(createHeader());                    