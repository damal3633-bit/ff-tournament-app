importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC0dUv9cSB3mFTnvbSTZcqAzUPq3Uh5Dpo",
  authDomain: "ff-tournament-app-5d97f.firebaseapp.com",
  projectId: "ff-tournament-app-5d97f",
  storageBucket: "ff-tournament-app-5d97f.firebasestorage.app",
  messagingSenderId: "226818841603",
  appId: "1:226818841603:web:ebbdd465a46211e2908236"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'logo.jpg'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});