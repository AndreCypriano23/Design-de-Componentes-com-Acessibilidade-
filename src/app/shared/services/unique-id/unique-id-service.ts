import { Injectable } from "@angular/core";
import * as uuid from 'uuid';

@Injectable({providedIn: 'root' })//pq ela vai ser injetável
export class UniqueIdService {


  public generateUniqueIdWithPrefix(prefix: string): string{
    const uniqueId = this.generateUniqueId();//gerando id
    return `${prefix}-${uniqueId}`; //concatenando prefixo com o id gerado
  }

  private generateUniqueId(): string{
    return uuid.v1();
  }

}
