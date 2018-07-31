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

window.addVisitor = (name, rut, email, destination, subject, time,anfitrion, patente, credencial, photo) => {
  const newVisitorKey = firebase.database().ref().child('visitors').push().key;

  firebase.database().ref('visitorsInside/' + newVisitorKey).set({
    id: newVisitorKey, credencial: credencial
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
    credencial: credencial,
    photo: photo
  });
}
window.getAllVisitors = () => {
  return firebase.database().ref('visitors')
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
window.searchVisitorInside = (credencial) =>{
   return firebase.database().ref('visitorsInside').once("value").then(
    (results) => {
      return  Object.entries(results.val()).find(
        visitor => visitor[1].credencial == credencial
      );
    }
  )
}
window.searchByDestino = (empresa) => {
  return firebase.database().ref('visitors').once("value").then(
    (results) => {
      return Object.entries(results.val()).filter(
        visitor => visitor[1].destination == empresa
      )
    }
  )
}
