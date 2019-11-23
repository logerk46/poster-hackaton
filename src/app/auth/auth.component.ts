import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiService } from '../services/api.service';

@Component({
    selector: 'auth-view',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
    urlAuth: string;

    codeApp: number;
    accountApp: string;

    constructor(
        private apiService: ApiService,
        private router: ActivatedRoute
    ) {
        this.urlAuth = this.apiService.authAppLink();
    }

    ngOnInit(): void {
        if(this.router.snapshot.queryParams['code']){
            this.codeApp = this.router.snapshot.queryParams['code'];
            this.accountApp = this.router.snapshot.queryParams['account'];
            this.getToken();
        }
    }

    ngOnDestroy(): void {

    }

    getToken(): void {
        this.apiService.sendToken({
            application_id: this.apiService.appId,
            application_secret: this.apiService.appSecret,
            grant_type: 'authorization_code',
            redirect_url: 'localhost:4200/order',
            code: this.codeApp
        })
        .subscribe(resp => {
            console.log(resp)
        }, error => {
            console.log(error);
        })
    }
}