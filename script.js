function calculateMinCost() {
  //your code here
  // console.log("hello im working");
  let inp_elements=document.getElementById("rope-lengths").value;
  
  let fil=inp_elements.split(",");
  console.log(fil[2]);
  var num_array=[];
  for(let i=0;i<fil.length;i++)
  {
    let a=parseInt(fil[i]);
    num_array.push(a);
  }

  // var sum=0;
//  num_array.sort();
  console.log(typeof num_array[1]);
  console.log(num_array.sort());
  // console.log(fil);
}  
