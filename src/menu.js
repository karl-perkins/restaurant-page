export default function createMenu(content) {
    const headline = document.createElement('h1');
    headline.textContent = 'The Gourmet Garden Menu'
    content.appendChild(headline);

    const menuItems = [
        ['Herb-Encrusted Lamb Chops', 'Tender lamb chops coated with a crust of fresh garden herbs and served with a mint-infused demi-glace.'],
        ['Garden Patch Risotto', 'Creamy arborio rice risotto bursting with the flavors of seasonal vegetables, topped with shaved Parmesan and a drizzle of white truffle oil.'],
        ['Blossom Delight Cheesecake', 'A light and airy cheesecake with a hint of lavender, garnished with edible flowers and a berry coulis.']
    ]
    
    for (let menuItem of menuItems) {
        const menuItemName = document.createElement('h3');
        menuItemName.textContent = menuItem[0];
        content.appendChild(menuItemName);

        const menuItemDescription = document.createElement('p');
        menuItemDescription.textContent = menuItem[1];
        content.appendChild(menuItemDescription);
    }
}
