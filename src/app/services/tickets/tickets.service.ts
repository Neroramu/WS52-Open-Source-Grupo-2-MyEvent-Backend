import {Injectable} from '@angular/core';
import {Ticket} from '../../shared/models/Ticket';
import {ProductServices} from "../products/products.services";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  ticketsURL = 'http://localhost:3000/tickets';
  constructor(private productService: ProductServices) { }
  // Get all tickets read
  async getAllTickets(): Promise<Ticket[]> {
    const data = await fetch(this.ticketsURL);
    return (await data.json()) ?? []; // Return array if null data
  }
  async getTicketById(Id: number): Promise<Ticket | undefined> {
    const data = await fetch(`${this.ticketsURL}/${Id}`);
    return (await data.json()) ?? []; // Return array if null data
  }
  async assignProductToTicket(ticket: Ticket): Promise<Ticket> {
    ticket.product = await this.productService.getProductById(ticket.productId);
    return ticket;
  }
}
