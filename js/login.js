

     function functionlogin (){
         var email1= $("#p_email").val()
         var password1= $("#password").val()



obj= {
    email: email1,
    password: password1
}

$.ajax({
    url:"https://speakprogramming.ro/webService/api/post/login.php",
    method:"POST",
    data:obj,
    dataType:"json",
    success:function(data){
       
            if (data.STATUS=="OK"){
                alert("Logarea s-a efectuat cu succes")
                debugger;
                document.getElementById("butonProiect").style.visibility = "visible"
                localStorage.userid=data.ID
                document.getElementById('id01').style.display='none'
                document.getElementById('butonProiect').style.display='block'
                document.getElementById('ButonLogin').style.display='none'

            }
            else if(data.STATUS=="WRONG"){
                alert("Mail sau parola gresita")
            }
            else{
                alert( "Eroare serviciu logare")
            }
    }

    })

     }
