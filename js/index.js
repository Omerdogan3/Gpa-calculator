function dersNotlari(){
 
  var gradeOptions1=["AA","BA","BB","CB","CC","DC","DD","FF"];
  var gradeOptions2=["A","B+","B","B-","C+","C","C-","D+"];
  
  var kredi = document.createElement("input");
  kredi.type="number";
  kredi.style.width="40px";
  
  var not = document.createElement('select');
  not.style.width="60px";
  
  for (var i = 0; i < gradeOptions1.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", gradeOptions1[i]);
    option.text = gradeOptions1[i];
    not.appendChild(option);
}
  
  var n = document.createElement('br');
  
  var option1 = document.createElement('select');
  
 
  document.getElementById("notlar").appendChild(kredi);
  document.getElementById("notlar").appendChild(not);
   document.getElementById("notlar").appendChild(n);
}

function hesapla(){
  var total = 0.0;
  var kredi = 0.0;
  var totalKredi = 0.0;
  var alinanNot = 0.0;
  var tmp;
  var tmp2;
  var c = document.getElementById("notlar").childNodes;
  var radios  = document.getElementsByName("ort");

for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        if(i==1){
          var val1 = document.getElementById("mevcutkrediInput").value;
          var val2 = document.getElementById("mevcutOrtalamaInput").value;
          total = val1*val2;
          totalKredi += Number(val1);
        }

    }
}

console.log(total);

var txt = "";
  var i;
  if(c.length != 0){
  for (i = 0; i < c.length; i++) {
      if(c[i].nodeName==="INPUT"){
        kredi = Number(c[i].value);
        totalKredi += kredi;
      }
      if(c[i].nodeName==="SELECT"){
        alinanNot = krediDegeri(c[i].value);
        tmp = kredi * alinanNot;
        total += tmp;
      }
  }
  var result = total/totalKredi

  document.getElementById("notlar").innerHTML = result ;

  
  /*var t = document.createTextNode(result);
  t.className = "animated bounce";
  document.getElementById("notlar").appendChild(t);*/

} 

    
}

function krediDegeri(strVal){
  if(strVal==="AA"){
    return 4;
  }else if(strVal==="BA"){
    return 3.5;
  }else if(strVal==="BB"){
    return 3;
  }else if(strVal==="CB"){
    return 2.5;
  }else if(strVal==="CC"){
    return 2.0;
  }else if(strVal==="DC"){
    return 1.5;
  }else if(strVal==="DD"){
    return 1.0;
  }else{
    return 0.0;
  }
}