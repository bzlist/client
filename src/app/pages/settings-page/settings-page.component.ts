import {Component, OnInit} from "@angular/core";

import {SettingsService, SeoService} from "@app/services";

@Component({
  selector: "app-settings-page",
  templateUrl: "./settings-page.component.html",
  styleUrls: ["./settings-page.component.scss"]
})
export class SettingsPageComponent implements OnInit{
  mobile = false;

  cache = [];

  constructor(public settingsService: SettingsService,
              public seo: SeoService){
    try{
      // check if the window width is smaller then the mobile threshold
      if(window.innerWidth <= 768){
        this.mobile = true;
      }

      for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i).endsWith("Cache")){
          this.cache.push(localStorage.key(i));
        }
      }
    }catch(err){
    }
  }

  ngOnInit(){
    this.seo.generateTags({
      title: "Settings - BZList",
      description: "Change various settings to customize your experience"
    });
  }

  serverColumnName(column: string): string{
    return this.settingsService.serverColumnNames[this.settingsService.serverColumns.indexOf(column)];
  }

  playerColumnName(column: string): string{
    return this.settingsService.playerColumnNames[this.settingsService.playerColumns.indexOf(column)];
  }

  getServerColumn(column: string): boolean{
    return this.settingsService.displayedServerColumns.includes(column);
  }

  getPlayerColumn(column: string): boolean{
    return this.settingsService.displayedPlayerColumns.includes(column);
  }

  toggleServerColumn(column: string): void{
    this.settingsService.toggleDisplayedServerColumn(column);
  }

  togglePlayerColumn(column: string): void{
    this.settingsService.toggleDisplayedPlayerColumn(column);
  }

  setTheme(value: string): void{
    this.settingsService.theme = value;

    // and transition to document
    document.documentElement.classList.add("transition");
    setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 100);

    // set data-theme
    document.documentElement.setAttribute("data-theme", value);
  }

  clearCache(): void{
    for(let i = 0; i < this.cache.length; i++){
      localStorage.removeItem(this.cache[i]);
    }
  }

  reset(): void{
    const settings = [];
    for(let i = 0; i < localStorage.length; i++){
      if(localStorage.key(i).startsWith(SettingsService.prefix) && localStorage.key(i) !== SettingsService.prefix+"syncSettings"){
        settings.push(localStorage.key(i));
      }
    }

    for(let i = 0; i < settings.length; i++){
      localStorage.removeItem(settings[i]);
    }

    this.settingsService.updateSync();

    // and transition to document
    document.documentElement.classList.add("transition");
    setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 100);

    // set data-theme
    document.documentElement.setAttribute("data-theme", this.settingsService.theme);
  }
}
