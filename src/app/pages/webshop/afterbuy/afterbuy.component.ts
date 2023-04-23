import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-afterbuy',
  templateUrl: './afterbuy.component.html',
  styleUrls: ['./afterbuy.component.scss']
})
export class AfterbuyComponent implements OnInit{

  constructor(private actRoute: ActivatedRoute, private router: Router){}

  item_price: string = '';

  ngOnInit(): void {
    this.actRoute.params.subscribe((param: any) => {
      this.item_price = param.item_price as string;
    })
  }
}
