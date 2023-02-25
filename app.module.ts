import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CabComponent } from './cab/cab.component';
import { DriverComponent } from './driver/driver.component';
import { UserComponent } from './user/user.component';
import { TripBookingComponent } from './trip-booking/trip-booking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SampleComponent } from './sample/sample.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewBookComponent } from './view-book/view-book.component';
import { FormsModule } from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { DriverReviewComponent } from './driver-review/driver-review.component';
import { AddCabComponent } from './add-cab/add-cab.component';
import { UpdateCabComponent } from './update-cab/update-cab.component';
import { ViewCabsComponent } from './view-cabs/view-cabs.component';

const allLinks:Routes = [
  {path:'bookyourride',component:TripBookingComponent},
  {path:'viewtripdetails',component:SampleComponent},
  {path:'driver',component:DriverComponent},
  //{path:'cabDetail/:cid',component:CabDetailComponent},
  {path:'viewCabDetails',component:CabComponent},
  {path:'home',component:HomepageComponent},
  {path:'cab',component:CabComponent},
  {path:'view-book',component:ViewBookComponent},
  {path:'login',component:LoginComponent},
  {path:'admin/:name',component:Page2Component},
  {path:'rating',component:DriverReviewComponent}

  
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CabComponent,
    DriverComponent,
    UserComponent,
    TripBookingComponent,
    HomepageComponent,
    HeaderComponent,
    LoginComponent,
    SampleComponent,
    ViewBookComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    DriverReviewComponent,
    AddCabComponent,
    UpdateCabComponent,
    ViewCabsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(allLinks)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
