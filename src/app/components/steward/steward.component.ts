import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-steward',
  templateUrl: './steward.component.html',
  styleUrls: ['./steward.component.css']
})
export class StewardComponent implements OnInit {

  @Input() name;

  constructor() { }

  ngOnInit() {
  }

}
