import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() showHideSidbar: boolean;
  @Output() ShowSideBarEvent: EventEmitter<boolean> = new  EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  onAfficherSidebar(){
    this.showHideSidbar = !this.showHideSidbar;
    this.ShowSideBarEvent.emit(this.showHideSidbar);
  }
}
