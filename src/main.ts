// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';

// // works only with standalone component
// bootstrapApplication(AppComponent).catch((err) => console.error(err));


// this approach to start angular app that uses modules
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)