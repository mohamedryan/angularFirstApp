import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  // this Input decorator make the variable to settable from outside
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // declare input for component using the input-signal approach
  // this way get ride of putting the '!' mark as now the variable has a value.
  // also in computed case, will be more effecient, as it will not been called unless the value changed, not like the getter.

  // avatar = input<string>(); // avatar is optional
  avatar = input.required<string>();
  name = input.required<string>();

  // using inputSignal approach over the Input decorator, 
  // will give u the feature of using signals in overall,
  // especially get use of its mechanism when working with states and detecting changes 
  // and apply ui changes in more effecient way

  imagePath = computed(() => 'assets/users/' + this.avatar() )

  // get imagePath(){
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser(){ 
  }

}
 