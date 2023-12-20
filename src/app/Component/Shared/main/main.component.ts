import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavItem } from './nav-items';
import { MenuService } from 'src/app/Services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
constructor(private router:Router){

}
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  routetoMenu(path:any){
    this.router.navigate(['/main/'+path]);
  }

//   @ViewChild('appDrawer') appDrawer: ElementRef | any;

//   @ViewChild('sidenav') sidenav: MatSidenav | any;
//   isExpanded = true;
//   showSubmenu: boolean = false;
//   isShowing = false;
//   showSubSubMenu: boolean = false;
// displayTopMenu:boolean = false;
// navItems:NavItem[]|any;
//   constructor(private menuService:MenuService) { }

//   ngOnInit(): void {
//     this.navItems=this.menuService.sidemenuLIst();
//   }
 
//   ngAfterViewInit() {
//     this.menuService.appDrawer = this.appDrawer;
//     const ul = document.querySelectorAll("nav ul")
//   }

//   mouseenter() {
//     if (!this.isExpanded) {
//       this.isShowing = true;
//     }
//   }

//   mouseleave() {
//     if (!this.isExpanded) {
//       this.isShowing = false;
//     }
//   }

//   showTopMenu(){
//     if(this.displayTopMenu){
//       this.displayTopMenu = false;
//     }else{
//       this.displayTopMenu=true;
//     }
//   }
}
