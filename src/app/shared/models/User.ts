import { Bag } from './Bag';
import { Cart } from './Cart';

export class User {
  id!: number;
  name!: string;
  lastName!: string;
  email!: string;
  address!: string;
  cellphone: string;
  password!: string;
  category: string;
  bag!: Bag;
  cart!: Cart;
  constructor(category: string, cellphone?: string) {
    this.cellphone = cellphone || '';
    this.category = category;
    this.bag = new Bag();
    this.cart = new Cart();
  }
}
