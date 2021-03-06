import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Pro } from '@ionic/pro';
import { MyApp } from './app.component';

import {EditRecipePageModule} from '../pages/edit-recipe/edit-recipe.module';
import {RecipePageModule} from '../pages/recipe/recipe.module';
import{RecipesPageModule} from '../pages/recipes/recipes.module';
import{ShoppingListPageModule} from '../pages/shopping-list/shopping-list.module';
import{TabsPageModule} from '../pages/tabs/tabs.module';
import{HomePageModule} from '../pages/home/home.module';
import{LoginPageModule} from '../pages/login/login.module';

Pro.init('D31B0942', {
  appVersion: '0.0.1'
})

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),EditRecipePageModule,RecipePageModule, RecipesPageModule,
    ShoppingListPageModule, TabsPageModule, HomePageModule, LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
