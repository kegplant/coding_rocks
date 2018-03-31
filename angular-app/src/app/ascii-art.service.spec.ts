import { TestBed, inject } from '@angular/core/testing';

import { AsciiArtService } from './ascii-art.service';

describe('AsciiArtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsciiArtService]
    });
  });

  it('should be created', inject([AsciiArtService], (service: AsciiArtService) => {
    expect(service).toBeTruthy();
  }));
});
