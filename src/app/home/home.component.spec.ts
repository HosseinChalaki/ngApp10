import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least one paragraph', ()=>{
    let pElements = fixture.debugElement.queryAll(By.css('p'));
    expect(pElements.length).toBeGreaterThan(0);
  });

  it('should have a greeting that says hello', ()=>{
    let pElement = fixture.debugElement.query(By.css('p.greeting'));
    expect(pElement.nativeElement.textContent).toEqual('Hello');
  });

  it('Sets x to 1 when "myButton" is clicked', () => {
    let button = fixture.debugElement.query(By.css('button.myButton'));

    expect(button).toBeTruthy();

    button.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(component.x).toBe(1);
    });

  });
});
