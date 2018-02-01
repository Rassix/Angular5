import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    baseUrl = 'http://localhost:14479/api/auth';
    userToken: any;

    constructor(private http: Http) { }

    login(model: any) {
        return this.http.post(this.baseUrl + '/login', model, this.requestOptions()).map((response: Response) => {
            const user = response.json();
            if (user) {
                localStorage.setItem('access_token', user.access_token);
                this.userToken = user.access_token;
            }
        });
    }

    register(model: any) {
        return this.http.post(this.baseUrl + '/register', model, this.requestOptions());
    }

    private requestOptions() {
        const headers = new Headers({ 'Content-type' : 'application/json' });
        return new RequestOptions({ headers: headers });
    }
}