import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });

  it('Should display Hello World if we don\'t know who the client is', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello World!')
  });

  it('Should contain text input', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input')).toBeTruthy()
  });

  it('Should contain a button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy()
  });

  it('Should display their name when input has a value and the button is clicked', () => {
    const compiled = fixture.debugElement.nativeElement
    const button = compiled.querySelector('button')
    const input = compiled.querySelector('input')

    input.value = 'Bob'
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    button.dispatchEvent(new Event( 'click' ))
    fixture.detectChanges();

    expect(compiled.querySelector('h1').textContent).toContain('Hello Bob!')
  });
});
