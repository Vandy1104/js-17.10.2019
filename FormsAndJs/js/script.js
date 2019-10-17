console.log('Forms & JS');

//Reading from data
document.getElementById('submit').addEventListener('click', function(){
  var name = document.getElementById('name').value;
  console.log(name);

  var address = document.getElementById('address').value;
  console.log(address);

  document.getElementById('formData').innerHTML = name + '<br>' + address;
})
var outStanding = 0;
var names = [];
var projectA = [];
var projectB = [];
var projectC = [];
var averagePerformance = [];

var n = parseInt(prompt('Enter the number of Employees'));


document.getElementById('saveData').addEventListener('click', function(){

  if (names.length < n) {

  var ename = document.getElementById('ename').value;
  console.log(ename);

  var projA = parseInt(document.getElementById('projectA').value);
  console.log(projA);

  var projB = parseInt(document.getElementById('projectB').value);
  console.log(projB);

  var projC = parseInt(document.getElementById('projectC').value);
  console.log(projC);

  var average = ((projA + projB + projC)/3).toFixed(2);

  // for (var i = 0; i < n; i++) {
  // if (average > averagePerformance[i]) {
  //   console.log('average is outstanding');
  // }
  //
  // }


  document.getElementById('formsData').innerHTML += ename + '<br>' + projA + '<br>' + projB + '<br>' + projC + '<br>' + average;

  document.getElementById('average').value = average;

  names.push(ename);
  projectA.push(projA);
  projectB.push(projB);
  projectC.push(projC);
  averagePerformance.push(average);
  console.log(names, projA, projB, projC, averagePerformance);



  if (outStanding < average) {
    outStanding = average;
    console.log(ename + ' is outstanding');
  }



} else {
  alert ('Sorry you cannot store more than ' + n + ' employees data');
}
});

document.getElementById('anotherData').addEventListener('click', function() {
  document.getElementById('ename').value = " ";
  document.getElementById('projectA').value = " ";
  document.getElementById('projectB').value = " ";
  document.getElementById('projectC').value = " ";
  document.getElementById('average').value = " ";
});


// });
