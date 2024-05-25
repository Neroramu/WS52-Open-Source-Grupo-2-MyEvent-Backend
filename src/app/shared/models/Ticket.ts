import { Product } from "./Product";
import { TicketsService } from "../../services/tickets/tickets.service";

export class Ticket {
  id!: number;
  productId!: number;
  product: Product;
  resold: boolean;

  constructor() {
    this.resold = false;
    this.product = new Product();
  }
}
