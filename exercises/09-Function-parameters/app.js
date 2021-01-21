// Your code goes here:


function renderPerson (name, date,colorEyes,age,sexType){

  var name = "bob";
  var date =  "05/22/1983";
  var colorEyes = 'green';
  var age = 23;
  var sexType = 'male';
  var completo = name.concat(date,colorEyes,age,sexType);

  return completo;
}

  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));