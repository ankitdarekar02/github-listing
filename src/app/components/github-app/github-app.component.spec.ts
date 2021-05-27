import { GithubService } from './../../services/github.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { mockProfileData } from '../../models/profileTestData';
import { GithubAppComponent } from './github-app.component';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('GithubAppComponent', () => {
  let component: GithubAppComponent;
  let service: GithubService;
  let fixture: ComponentFixture<GithubAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubAppComponent],
      imports : [FormsModule, HttpClientTestingModule],
      providers: [GithubService]
    })
    .compileComponents();
    service = TestBed.inject(GithubService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the userProfileData property after fetching data and change the status of loader', fakeAsync(() => {
    component.searchText = "johnpapa";
    let stub = spyOn(service, "getUserProfile").and.callFake((parameter) => {
      return of(mockProfileData).pipe(delay(5000));
    });
    component.fetchUserProfile();
    expect(component.profileLoader).toEqual(true);
    tick(5000);
    expect(component.profileLoader).toEqual(false);
    expect(component.userProfileData).toEqual(mockProfileData);
    discardPeriodicTasks();
  }));


});
