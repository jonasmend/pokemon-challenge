import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGeracaoComponent } from './pagina-geracao.component';

describe('PaginaGeracaoComponent', () => {
  let component: PaginaGeracaoComponent;
  let fixture: ComponentFixture<PaginaGeracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaGeracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaGeracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
