function myDisplayer(some) {
    console.log(some);
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
    setTimeout(function() { myFunction("I love You !!!"); }, 3000);
    function myFunction(value) {
        console.log(value);
      }