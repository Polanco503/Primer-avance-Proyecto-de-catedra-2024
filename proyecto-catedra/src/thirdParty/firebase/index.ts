import { FirebaseApp, initializeApp, } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, Auth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBkJB6wwfBrRRHPOHy_TUvJ-19uVxkYGug",
    authDomain: "catedra-b6874.firebaseapp.com",
    projectId: "catedra-b6874",
    storageBucket: "catedra-b6874.appspot.com",
    messagingSenderId: "912570539052",
    appId: "1:912570539052:web:0c7dfaef90df7e9788c589",
    measurementId: "G-SW593MVCVK"
};

class Firebase {
    private firebaseApp: FirebaseApp
    private firebaseAnalytics: Analytics
    private auth: Auth
    constructor() {
        this.firebaseApp = initializeApp(firebaseConfig);
        this.firebaseAnalytics = getAnalytics(this.firebaseApp);
        this.auth = getAuth();
    }

    async registerEmailUser(email: string, password: string) {
        return await createUserWithEmailAndPassword(this.auth, email, password)
    }

    async loginWithEmailAndPassword(email: string, password: string) {
        return await signInWithEmailAndPassword(this.auth, email, password)
    }

    async authWithGoogle() {
        const provider = new GoogleAuthProvider();
        const singInWithPopUpResponse = await signInWithPopup(this.auth, provider)
        const googleAuthResponse = GoogleAuthProvider.credentialFromResult(singInWithPopUpResponse)
        console.log("RESPONSE", singInWithPopUpResponse)
    }
}

export default new Firebase()