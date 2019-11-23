import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const apiUrl: string = '';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*'
    })
} 

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    posterAppUrl: string = 'https://test-hakaton.joinposter.com/api';
    appSecret: string = '61c01ad278de6ba6722bbcf7a47f202f';
    appId: number = 935;


    constructor(private httpClient: HttpClient) {

    }

    public authAppLink() {
        return this.posterAppUrl + `/auth?application_id=${this.appId}&redirect_uri=http://localhost:4200&response_type=code`
    }

    public sendToken(formData) {
        return this.httpClient.post('localhost:1919/auth', formData, httpOptions)
            .pipe(
                tap(
                    resp => resp
                )
            )
    }
}