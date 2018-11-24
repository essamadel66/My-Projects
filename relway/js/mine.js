

$(document).ready(function()
                  {


    
    $("#process .carousel-control-prev ").show(1000)

    
    $(window).scroll(function(){
    
  var sT=  $(window).scrollTop();
var profileO = $("#carouselExampleIndicators").offset().top;    
var galleryO = $("#About").offset().top;    
    if(sT >galleryO )
        {
$(".nav-link").css("borderRight","1px #fff solid")
            
            
$(".ramdan").css("backgroundColor","gray")
    
            
//$("#btnUp").css("display","block")
            
        }
    else
        {
$(".ramdan").css("backgroundColor","transparent")
            
$(".nav-link").css("borderRight","none")        
 //$("#btnUp").css("display","none")
            
            
        }
    
    console.log(sT)
})
    
                })