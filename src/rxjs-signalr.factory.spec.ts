import { TestBed } from '@angular/core/testing';
import { SignalRHub } from 'rxjs-signalr';
import { RxJSSignalRFactory } from './rxjs-signalr.factory';

describe('RxJSSignalRFactory', () => {
    let factory: RxJSSignalRFactory;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RxJSSignalRFactory
            ]
        })
    })

    beforeEach(() => {
        factory = TestBed.get(RxJSSignalRFactory);
    })

    it('should create signalr hub', () => {
        const hub = factory.createHub('bob');
        expect(hub instanceof SignalRHub).toBeTruthy();
    })

    it('should create signalr hub using url', () => {
        const hub = factory.createHub('bob', '/myhub');
        console.log(hub);
        expect(hub.url).toBe('/myhub');
    })
})
