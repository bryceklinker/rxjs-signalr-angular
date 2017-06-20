import { Injectable } from '@angular/core';

import { createSignalRHub } from 'rxjs-signalr';

@Injectable()
export class RxJSSignalRFactory {
    createHub(hubName: string) {
        return createSignalRHub(hubName);
    }
}
