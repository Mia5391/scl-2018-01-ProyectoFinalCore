window.onload = () => {
 }
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBv8avxsqGyZFTy3BBvC-Nzz6FyZu36m4M",
  authDomain: "recepcion-de-visitantes.firebaseapp.com",
  databaseURL: "https://recepcion-de-visitantes.firebaseio.com",
  projectId: "recepcion-de-visitantes",
  storageBucket: "recepcion-de-visitantes.appspot.com",
  messagingSenderId: "71701009647"
};
firebase.initializeApp(config);

window.addVisitor = (name, rut, email, destination, subject, time,anfitrion, patente, credencial) => {
  const newVisitorKey = firebase.database().ref().child('visitors').push().key;

  firebase.database().ref('visitorsInside/' + newVisitorKey).set({
    id: newVisitorKey
  });

  return firebase.database().ref('visitors/' + newVisitorKey).set({
    id: newVisitorKey,
    name: name,
    rut: rut,
    email: email,
    destination: destination,
    anfitrio: anfitrion,
    subject: subject,
    checkingTime: time,
    checkoutTime: '',
    patente: patente,
    credencial: credencial
  });
}
window.getAllVisitors = () => {
  return firebase.database().ref('visitors').once('value');
}
window.getVisitorsInside = () =>{
  return firebase.database().ref('visitorsInside')
}
window.checkoutVisitor = (id,time) => {
  firebase.database().ref(`visitors/${id}`).update({ checkoutTime: time});
  return  firebase.database().ref(`visitorsInside/${id}`).remove()
}
window.getVisitorData = (id)=>
{
    return firebase.database().ref(`visitors/${id}`).once('value').then(
    (visitor) => {
    return visitor
   }) 
}