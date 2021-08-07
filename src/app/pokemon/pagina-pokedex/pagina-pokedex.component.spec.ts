import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPokedexComponent } from './pagina-pokedex.component';

describe('PaginaPokedexComponent', () => {
  let component: PaginaPokedexComponent;
  let fixture: ComponentFixture<PaginaPokedexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPokedexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
