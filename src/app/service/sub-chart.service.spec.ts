import { TestBed } from '@angular/core/testing';

import { SubChartService } from './sub-chart.service';

describe('SubChartService', () => {
  let service: SubChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
