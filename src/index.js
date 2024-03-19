import createHome from './home';
import createMenu from './menu';
import createAbout from './about';

function updateContent(contentFunction) {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    contentFunction(content);
} 

const homeButton = document.querySelector('#homeButton');
homeButton.addEventListener('click', updateContent.bind(null, createHome));

const menuButton = document.querySelector('#menuButton');
menuButton.addEventListener('click', updateContent.bind(null, createMenu));

const aboutButton = document.querySelector('#aboutButton');
aboutButton.addEventListener('click', updateContent.bind(null, createAbout));