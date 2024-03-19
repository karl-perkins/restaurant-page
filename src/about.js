export default function createAbout(content) {
    const heading = document.createElement("h1");
    heading.textContent = "About The Gourmet Garden";
    content.appendChild(heading);

    const aboutUsPara1 = document.createElement("p");
    aboutUsPara1.textContent = `Nestled in the heart of the city, The Gourmet Garden offers a culinary retreat like no other. Our restaurant is a haven where gastronomy and nature intertwine to provide a unique dining experience. Each dish is crafted with the freshest ingredients, handpicked from our own herb and vegetable garden, ensuring a burst of flavor in every bite.`;
    content.appendChild(aboutUsPara1);

    const aboutUsPara2 = document.createElement("p");
    aboutUsPara2.textContent = `Our chefs are artists, painting plates with vibrant colors and infusing each creation with international influences. The Gourmet Garden is more than just a restaurant; it’s a place where memories are made, where every meal is a celebration of life’s finest offerings.`;
    content.appendChild(aboutUsPara2);

    const aboutUsPara3 = document.createElement("p");
    aboutUsPara3.textContent = `Join us at The Gourmet Garden, where flavors blossom and every visit is an adventure for the senses.`;
    content.appendChild(aboutUsPara3);
}
