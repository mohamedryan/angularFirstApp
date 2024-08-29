import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  // - this Input decorator make the variable to settable from outside
  // - the '!' (nullish) mark here telling the TS that we are aware that there is no assiging value for the variable
  //   as we use it as an input so no need to assign value, but TS not understand it using for this.
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({required: true}) user!: User;
  @Input({required: true}) selected! : boolean;

  // EventEmitter allow us to emit values outside to the parent ones.
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){ 
    this.select.emit(this.user.id);
  }

}
 