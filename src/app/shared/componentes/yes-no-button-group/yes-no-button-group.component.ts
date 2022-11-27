import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  //@Input para dizer qual é o valor atual dele, yes, no, ou nada
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) => {};
  public onTouched = () => {};

  constructor() { }

  ngOnInit(): void {


  }

  /*Início métodos da interface */
  public writeValue(value: string): void {
    //Ele é chamado pela API do formulário para escrever na view quando corre alguma mudança do modelo para a view, muda o modelo, muda a view
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);// [(value)] ="yesNoAwnser" É esse valor aqui
  }
  public registerOnChange(fn: (value: string) => void): void {
    //Aqui recebe no parametro uma função
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
 /*Fim métodos da interface */

  public activate(value: string): void{
    this.writeValue(value);
  }

}

enum YesNoButtonGroupOptions{
  YES = 'yes',
  NO = 'no'
}
