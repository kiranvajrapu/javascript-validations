<script>



// for jquery calender place ur  '#id' 
 $( function() {
    $( "#dateofbirth" ).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "1950:2050"
    });
  } )

// for validate pan card 
function pan_addhar()
{
var panVal = $('#adhaarpanno').val();
var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
if(regpan.test(panVal)){
   // ur conditon
} 
}




function pan_addhar_drop()
{
data = document.getElementById("panOraadhar").value;
var input = document.getElementById("adhaarpanno");


if (data == "Pan")
{
	
	/// condition based elements visibility
document.getElementById("adhaarpanno").style.visibility = "visible";
input.placeholder = "Pan card";

}
if(data == "Aadhar")
{
document.getElementById("adhaarpanno").style.visibility = "visible";
input.placeholder = "Aadhar card";
}

}



// below code for only allowed to enter amount
function isAmount(evt, obj) {

            var charCode = (evt.which) ? evt.which : event.keyCode
            var value = obj.value;
            var dotcontains = value.indexOf(".") != -1;
            if (dotcontains)
                if (charCode == 46) return false;
            if (charCode == 46) return true;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        }


// DOB validation for 18+
function Dob_validation() {
	
	var today = new Date();
	
	dob = document.getElementById("dateofbirth").value;//2018-09-07
	//alert(dob);
	date_temp = new Date(dob);
	diff = today.getFullYear()-date_temp.getFullYear()
	if (diff < 18)
		{
		//document.getElementById("Age").value = "Allowed 18+";
		document.getElementById("Age").style.visibility = "visible";
		document.getElementById("Age").value = ''
		document.getElementById("submit").disabled = true;
		return false;
		}
	else
		{
		document.getElementById("Age").style.visibility = "hidden";
		document.getElementById("submit").disabled = false;
		return true;
		}
}
// it allows only numbers in textbox
function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

   return true;
}


// for diabling enter key at submit;
$(document).keypress(
	    function(event){
	     if (event.which == '13') {
	        event.preventDefault();
	      }
	});

</script>
