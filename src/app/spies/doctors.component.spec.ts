import { HttpClient, HttpHandler } from '@angular/common/http';
import { DoctorsComponent } from './doctors.component';
import { DoctorsService } from './doctors.service';

describe('DoctorsComponent', () => {
  let handler!: HttpHandler;
  let component: DoctorsComponent;
  const service = new DoctorsService(new HttpClient(handler));

  beforeEach(() => {});

  it('', () => {});
});
