import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Location } from '@angular/common';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, { static: true })
  routerOutlet: IonRouterOutlet;
  constructor(
    private platform: Platform,
    private location: Location,
    private appMinimize: AppMinimize,
    private keyboard: Keyboard
  ) {
    this.backButtonEvent();
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log(this.routerOutlet);
      if (!this.routerOutlet.canGoBack()) {
        this.appMinimize.minimize();
      } else {
        this.location.back();
      }
    });
    // document.addEventListener("backbutton", () => {
    //   this.routerOutlet.forEach((outlet: IonRouterOutlet) => {
    //     console.log(outlet, this.router.url);
    //     if (outlet && outlet.canGoBack()) {
    //       this.location.back();
    //     } else if (this.router.url === "/home/dashboard") {
    //       return this.backButtonAlert();
    //     } else if (this.router.url === "/login") {
    //       navigator["app"].exitApp();
    //     } else {
    //       navigator["app"].exitApp();
    //     }
    //   });
    // });
  }
  // ngAfterViewInit() {
  //   // This element never changes.
  //   const ionapp = document.getElementsByTagName('ion-app')[0];
  //   this.keyboard.onKeyboardDidShow().subscribe(async (event) => {
  //     console.log(event);
  //     const { keyboardHeight } = event;
  //     const viewportHeight: number = $(window).height();
  //     const inputFieldOffsetFromBottomViewPort: number =
  //       viewportHeight - $(':focus')[0].getBoundingClientRect().bottom;
  //     const inputScrollPixels =
  //       keyboardHeight - inputFieldOffsetFromBottomViewPort;
  //
  //     // Set margin to give space for native keyboard.
  //     ionapp.style['margin-bottom'] = keyboardHeight.toString() + 'px';
  //
  //     // But this diminishes ion-content and may hide the input field...
  //     if (inputScrollPixels > 0) {
  //       // ...so, get the ionScroll element from ion-content and scroll correspondingly
  //       // The current ion-content element is always the last. If there are tabs or other hidden ion-content elements, they will go above.
  //       const ionScroll = await $('ion-content').last()[0].getScrollElement();
  //       setTimeout(() => {
  //         $(ionScroll).animate(
  //           {
  //             scrollTop: ionScroll.scrollTop + inputScrollPixels,
  //           },
  //           300
  //         );
  //       }, 300); // Matches scroll animation from css.
  //     }
  //   });
  //
  //   this.keyboard.onKeyboardDidHide().subscribe(() => {
  //     ionapp.style['margin-bottom'] = '0px';
  //   });
  // }
}
