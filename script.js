function check()
{
   let pass= document.getElementById("password").value;
   if(pass.length<6 || pass.length>16)
   {
    alert("Enter a valid password");
    return false;
   }
}