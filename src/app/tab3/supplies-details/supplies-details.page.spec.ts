import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { SupplyDetailsPage } from '../supplies-details/supplies-details.page'

describe('SupplyDetailsPage', () => {
  let component: SupplyDetailsPage
  let fixture: ComponentFixture<SupplyDetailsPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SupplyDetailsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents()

    fixture = TestBed.createComponent(SupplyDetailsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
