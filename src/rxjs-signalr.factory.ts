import { Injectable } from '@angular/core';

import { createSignalRHub, SignalRHub } from 'rxjs-signalr';

@Injectable()
export class RxJSSignalRFactory {
    createHub(hubName: string, url?: string) : SignalRHub {
        return createSignalRHub(hubName, url);
    }
}
