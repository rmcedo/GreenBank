import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInformacoesComponent } from './menu-informacoes.component';

describe('MenuInformacoesComponent', () => {
  let component: MenuInformacoesComponent;
  let fixture: ComponentFixture<MenuInformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuInformacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
