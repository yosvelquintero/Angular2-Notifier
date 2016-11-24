/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NotifierComponent } from './notifier.component';
import { NotifierService } from './notifier.service';

describe('NotifierComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotifierComponent
      ],
    });
  });

  it('should create the notifier', async(() => {
    let fixture = TestBed.createComponent(NotifierComponent);
    let notifier = fixture.debugElement.componentInstance;
    expect(notifier).toBeTruthy();
  }));
});
