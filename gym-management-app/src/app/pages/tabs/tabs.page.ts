import { Component, OnInit, signal } from '@angular/core';
import {IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendar, calendarOutline, home, homeOutline, people, peopleOutline, person, personOutline } from 'ionicons/icons'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonTabs, IonTabBar]
})
export class TabsPage implements OnInit {
  
  currentTab = signal<string>('members');
  
  constructor() {
    addIcons(
      {home, person, people, calendar, homeOutline, personOutline, peopleOutline, calendarOutline},

    )
   }

  ngOnInit() {
  }
  
  getCurrentTab(event: {tab: string}) {
    // console.log(event.tab)
    this.currentTab.set(event.tab)
  }

}
