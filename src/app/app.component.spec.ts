import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


/**
 * Test suite for AppComponent
 */

describe('AppComponent', () => {
  
  /**
   * Set up TestBed configuration before each test
   */
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  /**
   * Test if AppComponent can be created
   */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
  /**
   * Test if AppComponent has correct title
   */

  it(`should have as title 'myFlix-Angular-client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myFlix-Angular-client');
  });
  
  /**
   * Test if AppComponent renders title correctly
   */

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('myFlix-Angular-client app is running!');
  });
});
