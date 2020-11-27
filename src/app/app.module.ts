import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { APP_ROUTES } from './app.routes';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SharedModule } from './shared/shared/shared.module';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input/credit-card-input.component';
import { FormsModule } from '@angular/forms';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './components/linkedin-post/linkedin-post.component';
import { ModalComponent } from './components/modal/modal/modal.component';
import { DebounceClickDirective } from './directives/debounce-click/debounce-click.directive';
import { QuoteComponent } from './components/quote/quote.component';
import { ToggleComponent } from './components/toggle/toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    ComponentDocumentationComponent,
    ServiceDocumentationComponent,
    DirectiveDocumentationComponent,
    LoaderComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    ModalComponent,
    DebounceClickDirective,
    QuoteComponent,
    ToggleComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
