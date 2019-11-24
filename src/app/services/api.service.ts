import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';


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
        return this.posterAppUrl + `/auth?application_id=${this.appId}&redirect_uri=http://localhost:4200/auth&response_type=code`
    }

    // public sendToken(formData) {
    //     return this.httpClient.post('localhost:1919/auth', formData, httpOptions)
    //         .pipe(
    //             tap(
    //                 resp => resp
    //             )
    //         )
    // }
    public sendToken(formData) {
        return this.httpClient.post('http://127.0.0.1:8000/auth', formData, {
            headers:
            {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .pipe(
                tap(
                    resp => resp
                )
            )
    }

    public getOpenCheck(formData) {
        return this.httpClient.get('http://localhost:1919/api/posters/checks?spotId=1&tableId=6', {
            headers:
            {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .pipe(
                tap(
                    resp => resp
                )
            )
    }
}