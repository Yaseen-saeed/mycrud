document.getElementById("productsName");
    var RegEx=/^[A-Z]{5}[0-9]{3}[a-z]$/
    var x = /[1-75]/ 

RegEx.test(productsName.value)
    document.getElementById("btnCheck").addEventListener("click", function()
    {
    
    if (RegEx.test(productsName.value)) 
        {
        
            alert("Product name is valid.");
        } 

        else
        {
            alert("Product name is not valid.");
        }
    });


    var RegEx=/(^[1-7][0-9]|80$)/
    var age = document.getElementById("age");
    RegEx.test(age.value)
    


    document.getElementById("age").addEventListener("click", function()
    {


    if (RegEx=/(^[1-7][0-9]|80$)/) 
        
        {
            alert("Age is valid.");
        }
        
        else{
            alert("Age is not valid.");
        }
        
    });



    var RegEx=/^[A-Z]{1}[a-z]/;
    var namecheck = document.getElementById("name");
    RegEx.test(namecheck.value)
    


    document.getElementById("namecheck").addEventListener("click", function()
    {


    if (RegEx=/^[A-Z]{1}[a-z]/) 
        
        {
            alert("name is valid.");
        }
        
        else{
            alert("name is not valid.");
        }
        
    });




    var divalert = document.getElementById("alert")
    divalert.style.display = "none";
    
    function validateName() 
    {
        var RegEx = /^[A-Z]{1}[a-z]{3,}$/;
        if (RegEx.test(personName.value)) {
            divalert.style.display = "none";
        }
        else {
            divalert.style.display = "block";
            document.getElementById("alert").innerHTML=`<p class="text-center"></p>`
        }
    }