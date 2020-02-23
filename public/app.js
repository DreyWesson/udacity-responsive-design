const data = db.collection('test');
const someData = db.collection("test").doc("SF");

// console.log(data)
// console.log(someData)


someData.get().then(function(doc) {
    if (doc.exists) {
        // console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        // console.log("No such document!");
    }
}).catch(function(error) {
    // console.log("Error getting document:", error);
});

data.doc("SF").set({
  name: "San Francisco", state: "CA", country: "USA",
  capital: false, population: 860000,
  regions: ["west_coast", "norcal"] });
data.doc("SF").set({
  name: "San Francisco", state: "CA", country: "USA",
  capital: false, population: 860000,
  regions: ["west_coast", "norcal"] });
data.doc("ng").set({
    name: "Lagos", state: "LG", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });



  db.collection("test").where("capital", "==", false)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  });


  db.collection("test").doc("SF")
  .onSnapshot(function(doc) {
      console.log("Current data: ", doc.data());
  });

  db.collection("test").doc("ng").delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});