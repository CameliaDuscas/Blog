function saveProject(){
    var p_name= $("#numeleProiectului").val()
    var p_description= $("#description").val()
    var p_technologies= $("#technologies").val()
    var p_imagine= $("#imagine").val()
    var p_link= $("#link").val()


    obj={
        name: p_name,
        user_id: localStorage.userid,
        description:p_description,
        technologies:p_technologies,
        img:p_imagine,
        link:p_link
    }
    $.ajax({
        url:"https://speakprogramming.ro/webService/api/post/insertProject.php",
        method:"POST",
        data:obj,
        dataType:"json",
        success:function(data){
           
               if(data.STATUS=="OK")
                   alert("Proiect inserat cu succes!")
               
               else 
                   alert("Eroare serviciu inserare proiect")
               
        }
    
        })
}

function projectDescription(){
    $.ajax({
        url:"https://speakprogramming.ro/webService/api/post/getProjects.php?id=5",
        method:"GET",
        success:function(data){
           debugger;
               for(var i=0;i<data.length;i++){

                var projectCami= '<div class="container">'
	+'<div class="row">'
		+'<div class="col-lg-3 col-sm-6">'

           +' <div class="card hovercard">'
               +' <div class="cardheader">'

               +' </div>'
               +' <div class="avatar">'
                  +'  <img alt="" src=" '+data[i].img+'">'
               +' </div>'
               +' <div class="info">'
                   +' <div class="title">'
                    +'<a target="_blank" href="'+data[i].name+'"</a>'
                   + '</div>'
                    +'<div class="desc"><h1>'+data[i].description+'</h1></div>'
                   + '<div class="desc"><h2>'+data[i].technologies+'</h2></div>'
                
               +' </div>'
                +'<div class="bottom">'
                   
                   +' </a>'
                   +' <a class="btn btn-primary btn-sm" rel="publisher"'
                      +' href="'+data[i].link+'">'
                      +'<i class="fa fa-facebook"></i>'
                   +' </a>'
        
                +'</div>'
            +'</div>'

        +'</div>'

	+'</div>'
+'</div>'

                
                
                
                
                
                
                
               

             $("#proiecte").append(projectCami)
                }
               
        }
    
        })
}







$( document ).ready(function() {
    projectDescription();
});

//var projectCata ='<div class="card">  <div class="box"><div class="img">'
//+' <img src="'+data[i].img+'">'
//+'  </div>'
//+'<h1>'+ data[i].name+'</span></h1>'
//+'<p>'+ data[i].description +'</p>'
//+' <span>'
//  +' <ul>'
   // +'   <li><a href="'+ data[i].link+'"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>'
       
 // +' </ul>'
//+'</span>'
//+'</div>'
//+'</div>'