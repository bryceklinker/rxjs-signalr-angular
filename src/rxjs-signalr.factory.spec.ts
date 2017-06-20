import { TestBed } from '@angular/core/testing';
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
        factory = new RxJSSignalRFactory();
    })

    it('should create signalr hub', () => {
        expect(factory.createHub('bob')).toBeDefined();
    })
})
