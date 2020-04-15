import { element } from 'protractor';
import { environment } from './../../environments/environment';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  @ViewChild('recaptcha', { static: true }) recaptchaElement: ElementRef;

  // baseUrl = environment.appUrl;

  validatingForm: FormGroup;


  constructor(private http: HttpClient, private handler: HttpHandler) { }

  ngOnInit() {
    // this.Send();
    this.addRecaptchaScript();
    this.validatingForm = new FormGroup({
      subscriptionFormModalName: new FormControl('', Validators.required),
      subscriptionFormModalEmail: new FormControl('', Validators.email)
    });

    // tslint:disable-next-line: no-unused-expression

  }



  get subscriptionFormModalName() {
    return this.validatingForm.get('subscriptionFormModalName');
  }

  get subscriptionFormModalEmail() {
    return this.validatingForm.get('subscriptionFormModalEmail');
  }

  // Send() {
  //   // tslint:disable-next-line: no-unused-expression
  //   this.email;
  // }
  addRecaptchaScript() {

    // tslint:disable-next-line: no-string-literal
    window['grecaptchaCallback'] = () => {
      this.renderReCaptcha();
    };

    // tslint:disable-next-line: only-arrow-functions
    (function(d, s, id, obj) {
      // tslint:disable-next-line: one-variable-per-declaration
      // tslint:disable-next-line: prefer-const
      // tslint:disable-next-line: one-variable-per-declaration
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptcha(); return; }
      js = d.createElement(s); js.id = id;
      // tslint:disable-next-line: quotemark
      js.src = "https://www.google.com/recaptcha/api.js?render=_reCAPTCHA_site_key";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));

  }

  renderReCaptcha() {
    // tslint:disable-next-line: no-string-literal
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      // tslint:disable-next-line: object-literal-key-quotes
      'sitekey': '6Ldi6-EUAAAAALAKegCjqfRruhRYGLvXpZ3BsDqe',
      // tslint:disable-next-line: object-literal-key-quotes
      'callback': (response) => {
        console.log(response);
      }
    });
  }

}
