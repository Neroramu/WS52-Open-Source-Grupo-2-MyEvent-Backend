import {Injectable} from '@angular/core';
import {Bag} from "../../shared/models/Bag";
import {Product} from "../../shared/models/Product";
import {Ticket} from "../../shared/models/Ticket";
import {TicketsService} from "../tickets/tickets.service";

@Injectable({
  providedIn: 'root'
})
export class BagService {
  private bag: Bag = new Bag();
  constructor(private ticketService: TicketsService) { }
  getBag(): Bag {
    return this.bag;
  }

  // Add to bag CREATE new Product or update quantity
  addToBag(product: Product) {
    const existTicket = this.bag.tickets.find(
      (ticket) => ticket.product.id == product.id
    );
    if (existTicket) {
      existTicket.resold = true;
    } else {
      this.bag.tickets.push(new Ticket());
    }
  }

  // Create ticket for single product page
  createTicket() {
    return new Ticket();
  }

  // Delete Ticket
  deleteTicketById(ticketId: number): Bag {
    const removeIndex = this.bag.tickets.findIndex(ticket => ticket.id === ticketId);
    if (removeIndex !== -1) {
      this.bag.tickets.splice(removeIndex, 1);
    }
    return this.bag;
  }
}
