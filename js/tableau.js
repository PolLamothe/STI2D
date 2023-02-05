    $("td").hover(function(){
        if(($(this).hasClass('row1') == false)){
            $(this).css("color","red")
            for(var x=0;x<21;x++){ //row
                if($(this).hasClass('row'+x) == true){
                    $('.row'+x).css("color","red")
                }
            }
        }
    })
    $("td").mouseleave(function(){
        if($(this).hasClass('row1') == false){
            $(this).css("color","black")
            $(this).css("border","none")
            for(var x=0;x<21;x++){ //row
                if($(this).hasClass('row'+x) == true){
                    $('.row'+x).css("color","black")
                }
            }
        }
    })