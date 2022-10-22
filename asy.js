    let date_ob = new Date();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
async function displayTime() {
    let myPromise = new Promise(function(resolve) {  
      setTimeout(function() {resolve(
        console.log(hours + ":" + minutes)
        );
    }, 3000);
    });
   console.log(await myPromise);
  };
  
  displayTime();


// let date_ob = new Date();
// let hours = date_ob.getHours();
// let minutes = date_ob.getMinutes();
// console.log(hours + ":" + minutes);
