import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: any;

  constructor(
    private firestoreService: AngularFirestore,
    private firestoreAuthService: AngularFireAuth,
    private router: Router
  ) {
    this.firestoreAuthService.authState.subscribe((user) => {
      if (user) {
        this.saveUserToLocalStorage(user);
      } else {
        this.removeUserToLocalStorage();
      }
    });
  }

  saveUserToLocalStorage(user: any) {
    this.userData = user;
    localStorage.setItem('user', JSON.stringify(this.userData));
  }
  removeUserToLocalStorage() {
    localStorage.removeItem('user');
  }

  signIn(email: string, password: string) {
    return this.firestoreAuthService
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.saveUserToFirestore(result.user);
        this.firestoreAuthService.authState.subscribe((user) => {
          if (user) {
            console.log('USER LOGGED IN: ', user);
            this.router.navigate(['/']);
          } else {
          }
        });
      });
  }

  saveUserToFirestore(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.firestoreService.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };

    return userRef.set(userData, {
      merge: true,
    });
  }

  isAuthenticated(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      console.log(localStorage.getItem('user'));
      return true;
    } else {
      return false;
    }
  }
}
