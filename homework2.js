function removedata()
{
  document.getElementById("outputformdata").innerHTML = ("form reset");
  
}

function getdata()
{
  var formcontents = document.getElementById("signup");
  var formoutput;
  var datatype;
  var x;
  formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (x = 0; x < formcontents.length; x++) {
    console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);
            /* if (formcontents.elements[i].value !="") { */
    datatype = formcontents.elements[i].type;
    switch (datatype) {
    case "checkbox":
    if (formcontents.elements[i].checked) {
      formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
      formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
      formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
    }
    break;
    case "radio":
        if (formcontents.elements[i].checked) {
        formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
        formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
        formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
        }
    break;
     case "button": case "submit": case "reset":
     break;
     default:
        formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
        formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
        formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
    }
  }
}
