import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDslp2IuVEghEtbt3U5umqfC1UVpJaMc34",
    authDomain: "expense-tracker-pwa-33a35.firebaseapp.com",
    databaseURL: "https://expense-tracker-pwa-33a35.firebaseio.com",
    projectId: "expense-tracker-pwa-33a35",
    storageBucket: "expense-tracker-pwa-33a35.appspot.com",
    messagingSenderId: "854966277712",
    appId: "1:854966277712:web:948e60d3d098ead365e355"
  };


  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();


export function configNotification() {
    
    Notification.requestPermission().then((permission) => {
        messaging.getToken().then((currentToken) => {
          console.log(currentToken)
          
          if (currentToken) {
          } else {
            // Show permission request.
            console.log('No registration token available. Request permission to generate one.');

          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);

        });
    
    
    })

}