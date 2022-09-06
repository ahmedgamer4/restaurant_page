import './style.css';
import loadHome from './home';


const content = document.createElement('div');
content.id = "content";
document.body.appendChild(content);


function createHeader() {
  const header = document.createElement('div');
  header.classList.add('header');
  header.innerHTML = `<button id='home' class='btn'>Home</button>
                      <button id='menu' class='btn'>Menu</button>
                      <button id='contact' class='btn'>Contact</button>`
                                          

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

const btn_home = document.getElementById('home');
loadHome();

btn_home.onclick = loadHome = loadHome;
                    