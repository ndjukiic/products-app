export class Product {
  id: number;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  description: string;
  rating: number;

  constructor(
    id: number,
    title: string,
    price: number,
    brand: string,
    category: string,
    thumbnail: string,
    description: string,
    rating: number
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.brand = brand;
    this.category = category;
    this.thumbnail = thumbnail;
    this.description = description;
    this.rating = rating;
  }
}
