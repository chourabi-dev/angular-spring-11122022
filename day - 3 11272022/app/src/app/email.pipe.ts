import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {



  transform(email: string, ...args: any[]): string {

    //t****************@gmail.com

    return  email[0]+'***************@'+email.split('@')[1]    ;
  }

  

}
