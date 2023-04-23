import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/Item';
import Items_json from "src/assets/__image_list.json";
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webshop',
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.scss']
})
export class WebshopComponent implements OnInit {

  constructor(private router: Router) { }

  webshopItems?: Array<Item> = new Array<Item>();

  ngOnInit(): void {
    for (let item_iter of Items_json) {
      const curr_item: Item = {
        id: item_iter.id,
        item_name: item_iter.item_name,
        price: Number.parseInt(item_iter.price),
        description: item_iter.description
      };
      this.webshopItems?.push(curr_item);
    }
  }

  buy(item: Item): void {
    this.router.navigateByUrl('/webshop/afterbuy/' + item.price);
  }

}
