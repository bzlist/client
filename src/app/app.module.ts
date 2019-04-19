import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from "./app-routing.module";

import {CookieService} from "ngx-cookie-service";
import {SettingsService} from "./settings.service";

import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {firebase} from "../app/firebase";

import {AppComponent} from "./app.component";
import {HomePageComponent} from "./HomePage/homePage.component";
import {HelpPageComponent} from "./HelpPage/helpPage.component";
import {ThirdPartyLicensesPageComponent} from "./ThirdPartyLicensesPage/thirdPartyLicensesPage.component";
import {ServersComponent} from "./Servers/servers.component";
import {MaterialModule} from "./material.module";
import {NavigationToolbarComponent} from "./navigation-toolbar/navigation-toolbar.component";
import {ServerPageComponent} from "./server-page/server-page.component";
import {SettingsPageComponent} from "./settings-page/settings-page.component";
import {ServerCardComponent} from "./server-card/server-card.component";
import {TimeAgoPipe} from "./time-ago.pipe";
import {CardComponent} from "./card/card.component";
import {ServersTableComponent} from "./servers-table/servers-table.component";
import {TableComponent} from "./table/table.component";
import {PlayersTableComponent} from "./players-table/players-table.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HelpPageComponent,
    ThirdPartyLicensesPageComponent,
    ServersComponent,
    NavigationToolbarComponent,
    ServerPageComponent,
    SettingsPageComponent,
    ServerCardComponent,
    TimeAgoPipe,
    CardComponent,
    ServersTableComponent,
    TableComponent,
    PlayersTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [CookieService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
