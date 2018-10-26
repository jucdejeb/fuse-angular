import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { UserModel } from './login.model';


@Injectable()
export class LoginService {

    constructor(private db: AngularFirestore) {
    }

    loadUserProfile(user: UserModel): Observable<UserModel> {
        return this.db.doc<any>(`/users/${user.uid}`).valueChanges()
            .pipe(map(u => {
                if (u) {
                    const UserData = new UserModel(u);
                    UserData.uid = user.uid;
                } else {
                    this.saveUserProfile(user);
                }
                return u;
            }));
    }

    saveUserProfile(user: UserModel) {
        const dbUser = Object.assign({}, user); // object to be saved
        this.db.doc(`/users/${dbUser.uid}`).set(dbUser).then(ref => {
            console.log("data saved");
        });
    }
}
