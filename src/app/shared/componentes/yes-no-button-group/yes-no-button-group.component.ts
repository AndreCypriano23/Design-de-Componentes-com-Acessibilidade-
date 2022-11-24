import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {
  //@Input para dizer qual é o valor atual dele, yes, no, ou nada
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();
  public options = YesNoButtonGroupOptions;

  constructor() { }

  ngOnInit(): void {
  }

  public activate(value: string): void{
    this.value = value;
    this.valueChange.emit(this.value);//Estou notificando com o mundo externo de que o valor mudou
  }

}

enum YesNoButtonGroupOptions{
  YES = 'yes',
  NO = 'no'
}
