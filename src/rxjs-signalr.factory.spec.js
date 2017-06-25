"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var rxjs_signalr_1 = require("rxjs-signalr");
var rxjs_signalr_factory_1 = require("./rxjs-signalr.factory");
describe('RxJSSignalRFactory', function () {
    var factory;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                rxjs_signalr_factory_1.RxJSSignalRFactory
            ]
        });
    });
    beforeEach(function () {
        factory = testing_1.TestBed.get(rxjs_signalr_factory_1.RxJSSignalRFactory);
    });
    it('should create signalr hub', function () {
        var hub = factory.createHub('bob');
        expect(hub instanceof rxjs_signalr_1.SignalRHub).toBeTruthy();
    });
    it('should create signalr hub using url', function () {
        var hub = factory.createHub('bob', '/myhub');
        console.log(hub);
        expect(hub.url).toBe('/myhub');
    });
});
//# sourceMappingURL=rxjs-signalr.factory.spec.js.map