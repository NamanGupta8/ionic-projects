import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonSearchbar, IonRow, IonCol, IonSelect, IonSelectOption, IonList, IonItemDivider } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle, menuOutline, notifications } from 'ionicons/icons';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
  standalone: true,
  imports: [IonItemDivider, IonList, IonSelect, IonSelectOption, IonCol, IonRow, IonSearchbar, IonIcon, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MembersPage implements OnInit {

  constructor() { }

  ngOnInit() {
    addIcons(
      { menuOutline, notifications, addCircle }
    )
  }

}
