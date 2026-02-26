class Coffee {
  constructor(id, name, price, rating, votes, popular, available, soldOut, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.votes = votes;
    this.popular = popular;
    this.available = available;
    this.soldOut = soldOut;
    this.image = image;
  }
}

// Creación de las instancias de café usando el constructor
const coffeeData = [
  new Coffee(1, 'Cappuccino', '$5.20', 4.7, 65, true, true, false, 'Coffe1.jpg'),
  new Coffee(2, 'House Coffee', '$3.50', 4.85, 14, true, true, false, 'Coffe2.jpg'),
  new Coffee(3, 'Espresso', '$2.50', 4.9, 55, false, true, false, 'Coffe3.jpg'),
  new Coffee(4, 'Coffee Latte', '$4.50', 5.0, 23, false, true, false, 'Coffe4.jpg'),
  new Coffee(5, 'Chocolate Coffee', '$4.00', 4.65, 122, false, false, true, 'Coffe5.jpg'),
  new Coffee(6, 'Valentine Special', '$5.50', null, 0, false, true, false, 'Coffe6.jpg')
];

export default coffeeData;
