import Logo from './logo.jpg';

export default function createHome(content) {
    const logo = document.createElement('img');
    logo.src = Logo;
    logo.alt = 'The Gourmet Garden Logo';
    logo.style.height = '200px';
    logo.style.width = '200px';
    content.appendChild(logo);

    const headline = document.createElement('h1');
    headline.textContent = 'The Gourmet Garden'
    content.appendChild(headline);

    const tagline = document.createElement('p');
    tagline.textContent = 'Where Flavors Blossom';
    content.appendChild(tagline);
}
