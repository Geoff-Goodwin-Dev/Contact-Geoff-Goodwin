const hrefs = {
  linkedIn: 'https://www.linkedin.com/in/geofflgoodwin/',
  gitHub: 'https://github.com/Geoff-Goodwin-Dev',
  email: 'mailto: ggoodwin.dev@gmail.com',
  phone: 'tel:4044533696'
};

const inputText = {
  linkedIn: 'https://www.linkedin.com/in/geofflgoodwin/',
  gitHub: 'https://github.com/Geoff-Goodwin-Dev',
  email: 'ggoodwin.dev@gmail.com',
  phone: '(404)453-3696'
};

const selectorLeftPos = {
  linkedIn: '12%',
  gitHub: '38%',
  email: '62%',
  phone: '87%'

};

const input = document.querySelector('#input');
const logos = document.querySelectorAll('.logo');
const selector = document.querySelector('#selector');
const goLink = document.querySelector('#goLink');

let selectedLink = {
  href: '',
  text: '',
  value: ''
};

const logoClick = (logoName) => {
  selectedLink = {
    href: hrefs[logoName],
    text: inputText[logoName],
    value: logoName
  };
  input.setAttribute('value', selectedLink.text);
  for (let logo of logos) logo.classList.remove('selectedLogo');
  document.querySelector(`#${logoName}`).classList.add('selectedLogo');
  selector.style.left = selectorLeftPos[logoName];
  goLink.setAttribute('href', selectedLink.href);
};

const copyText = () =>{
  input.select();
  document.execCommand('copy');
};

logoClick('linkedIn');