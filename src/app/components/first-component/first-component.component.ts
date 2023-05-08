import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Eduardo';
  age: number = 43;
  job = 'Programador';
  robbies = ['Corinthians', 'Series', 'Demon Slaiver'];
  car = {
    name: 'Sandero',
    year: '2008',
  };

  constructor() {}

  ngOnInit(): void {}
}
