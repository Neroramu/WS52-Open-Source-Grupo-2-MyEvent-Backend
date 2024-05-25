import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { Ticket } from "../shared/models/Ticket";
import { TicketsService} from "../services/tickets/tickets.service";
import { Product } from "../shared/models/Product";
import { ProductServices } from "../services/products/products.services";
import { User } from "../shared/models/User";
import { UsersService } from "../services/users/users.service";
import { Bag } from "../shared/models/Bag";
import { BagService } from "../services/bag/bag.service";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-resale',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf
  ],
  templateUrl: './resale.component.html',
  styleUrl: './resale.component.css'
})
export class ResaleComponent {
  tickets: Ticket[] = [];
  userId: number = 1;

  constructor(
    private ticketsService: TicketsService,
    private productService: ProductServices,
    private userService: UsersService,
  private bagService: BagService
) {
}

}
