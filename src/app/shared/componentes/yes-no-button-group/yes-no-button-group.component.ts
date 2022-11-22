import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {
  //@Input para dizer qual é o valor atual dele, yes, no, ou nada
  @Input() public value: string = null;
  @Input() public label = '';


  constructor() { }

  ngOnInit(): void {
  }

  public activate(value: string): void{
    this.value = value;

  }



}
