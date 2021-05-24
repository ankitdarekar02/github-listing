import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { GithubService } from './github.service';

describe('GithubService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
  });

  it('should be created', () => {
    const service: GithubService = TestBed.inject(GithubService);
    expect(service).toBeTruthy();
  });
});
