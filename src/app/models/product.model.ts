export class Product {
  id: number;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;

  constructor(
    id: number,
    title: string,
    price: number,
    brand: string,
    category: string,
    thumbnail: string
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.brand = brand;
    this.category = category;
    this.thumbnail = thumbnail;
  }
}
