import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
componentes: Componente[] = [
    {
        icon: 'american-football-outline',
        name: 'Action Sheet',
        redirectTo: '/action-sheet',
    },
    {
        icon: 'logo-apple-appstore',
        name: 'Alert',
        redirectTo: '/alert',
    },
];

private data = inject(DataService);
constructor() {}

refresh(ev: any) {
    setTimeout(() => {
        (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
}

    getMessages(): Message[] {
        return this.data.getMessages();
    }
}

interface Componente {
    icon: string,
    name: string,
    redirectTo: string, 
}
