function fun(){
            $.ajax({
                url:"https://cricapi.com/api/cricket?apikey=RVxwHY7tjHT6fqnRkknEER6tM7z1",
                type:"GET",
                dataType:'JSON',
               success:function(response){
                  for(var i=0;i<response.data.length;i++){
                      document.write("Scorecard :- <br>");
                document.write(response.data[i].description);
                document.write("<hr>");
                  } 
                }
            });
}