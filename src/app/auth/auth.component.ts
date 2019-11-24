import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiService } from '../services/api.service';
import { LocalStorageService } from '../services/local-storage.service';

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
        private activeRouter: ActivatedRoute,
        private router: Router,
        private localStorage: LocalStorageService
    ) {
        this.urlAuth = this.apiService.authAppLink();
    }

    ngOnInit(): void {
        if(this.activeRouter.snapshot.queryParams['code']){
            this.codeApp = this.activeRouter.snapshot.queryParams['code'];
            this.accountApp = this.activeRouter.snapshot.queryParams['account'];
            this.getToken()
        }
    }

    ngOnDestroy(): void {

    }

    getToken(): void {
        this.apiService.sendToken({
            application_id: this.apiService.appId,
            application_secret: this.apiService.appSecret,
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost:4200/auth',
            code: this.codeApp
        })
        .subscribe(resp => {
            this.localStorage.storeOnLocalStorage(resp);
            this.router.navigate(['/check']);
        }, error => {
            console.log(error);
        })
    }
}