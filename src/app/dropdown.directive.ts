import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[faDropdown]'
})
export class DropdownDirective {
	@HostBinding('class.open') get opened(){
		return this.IsOpen;
	}

	@HostListener('click') open(){
		this.IsOpen = true;
	}

	@HostListener('mouseleave') close(){
		this.IsOpen = false;
	}
	
	private IsOpen = false;
}
