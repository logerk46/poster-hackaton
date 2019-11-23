import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'user';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    userInfo;

    constructor(
        @Inject(LOCAL_STORAGE) private storage: StorageService
    ) {}

    public storeOnLocalStorage(userInfo): void {
        const currentUser = this.storage.get(STORAGE_KEY);

        currentUser.push(userInfo);

        this.storage.set(STORAGE_KEY, currentUser);
        
        console.log(this.storage.get(STORAGE_KEY) || 'Local storage is empty!')
    }
}