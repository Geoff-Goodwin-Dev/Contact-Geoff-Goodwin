const links = {
  linkedIn: 'https://www.linkedin.com/in/geofflgoodwin/',
  github: 'https://github.com/Geoff-Goodwin-Dev'
};

document.querySelector("#linkToSocialMedia").innerHTML =`<ul id="listOfLinks"></ul>`;
let listItem = document.createElement('LI');
document.querySelector("#listOfLinks").innerHTML = `<li><a href="${links.linkedIn}" target="_blank">linkedIn</a></li>`;
document.querySelector("#listOfLinks").appendChild(listItem);
