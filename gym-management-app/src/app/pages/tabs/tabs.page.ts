import { Component, OnInit } from '@angular/core';
import {IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, homeOutline, peopleOutline, personOutline } from 'ionicons/icons'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonTabs, IonTabBar]
})
export class TabsPage implements OnInit {

  constructor() {
    addIcons(
      {homeOutline, personOutline, peopleOutline, calendarOutline},

    )
   }

  ngOnInit() {
  }

}
