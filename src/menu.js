function createMenu() {
  const 
}

function createItem(name, price) {
  const item = document.createElement('div');
  item.classList.add('menu-item');
  item.style.background = `url(/assets/imgs/${name.toLowerCase()}.jpg)`

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = name;

  
}