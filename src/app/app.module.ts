import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GithubAppComponent } from './components/github-app/github-app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { UserRepositoryComponent } from './components/user-repository/user-repository.component';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
import { GithubProfileDetailsComponent } from './components/github-profile-details/github-profile-details.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    GithubProfileComponent,
    UserRepositoryComponent,
    GithubProfileCardComponent,
    GithubProfileDetailsComponent,
    SkeletonLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule,
    NgxSkeletonLoaderModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
