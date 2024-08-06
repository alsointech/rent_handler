import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as serviceAccount from '../config/serviceAccountKey.json';

@Injectable()
export class FirebaseAdminService {
  private defaultApp: admin.app.App;

  constructor() {
    this.defaultApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      databaseURL: 'https://rent-handler.firebaseio.com'
    });
  }

  getAuth() {
    return this.defaultApp.auth();
  }
}
