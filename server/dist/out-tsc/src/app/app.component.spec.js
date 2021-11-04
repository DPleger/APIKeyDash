import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    it(`should have as title 'APIKeyApp'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('APIKeyApp');
    });
    it('should render title', () => {
        var _a;
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect((_a = compiled.querySelector('.content span')) === null || _a === void 0 ? void 0 : _a.textContent).toContain('APIKeyApp app is running!');
    });
});
//# sourceMappingURL=app.component.spec.js.map