import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { GithubService } from './github.service';
import {mockProfileData} from '../models/profileTestData';
import { HttpErrorResponse } from '@angular/common/http';

describe('GithubService', () => {
  let httpTestCtrl: HttpTestingController;
  let githubService: GithubService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
    githubService = TestBed.inject(GithubService);
    httpTestCtrl = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestCtrl.verify();
  });

  it('Github: Service should be created', inject([GithubService], (service: GithubService) => {
    expect(service).toBeTruthy();
    }));

  it('should test get user profile request', () => {
  githubService.getUserProfile(githubService.username).subscribe(data => {
      expect(githubService.username).toBeDefined;
      expect(data).toEqual(mockProfileData);
      expect(request.request.method).toBe('GET');
  });
  const request = httpTestCtrl.expectOne( `${githubService.BASE_URL}${githubService.username}`);
  expect(request.request.method).toBe('GET');
  expect(request.cancelled).toBeFalsy();
  request.flush(mockProfileData);
})

});

