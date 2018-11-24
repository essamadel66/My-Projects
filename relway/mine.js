
$(document).ready(function()
                  {
  $("#process .carousel-control-prev ").show(1000)

    
    $(window).scroll(function(){
    
  var sT=  $(window).scrollTop();
var profileO = $(".carousel-caption").offset().top;    
var galleryO = $(".carousel-caption").offset().top;    
    if(sT >galleryO )
        {
$(".nav-link").css("borderRight","1px #fff solid")
            $(".navbar").css("height","60px")
            
            
            
$(".ramdan").css("backgroundColor"," rgba(0 , 0 , 0 , 0.5)")
    
            
//$("#btnUp").css("display","block")
            
        }
    else
        {
$(".ramdan").css("backgroundColor","transparent")
            
$(".nav-link").css("borderRight","none", "color" , "black")
            $(".navbar").css("height","85px")
 //$("#btnUp").css("display","none")
   $("navbar-nav li a").css( "color" , "black")         
            
        }
    
   
})
    

    new WOW().init();
    
    
    
     $(".owl-carousel").owlCarousel({
         
       loop:true,
    margin:10,
    nav:true,
         
    
       
    singleItem: true,
    
   items: 3,
     mergeFit: true,
        nav:false,
         rewind:true,
         
         slideBy: 3,
         dots: true,
        
     })
    
    $(".owl-carousel .popx").owlCarousel({
         
       loop:true,
    margin:10,
    
         
    
       
    singleItem: true,
    
   items: 1,
     mergeFit: true,
        
         rewind:true,
         
         slideBy: 1,
         dots: true,
        
     })
    
    
    
    
    
   /* 
    $(".up").counterUp({
    delay: 10,
    time: 3000
});
    
    */
    var numAnim = new CountUp("up", 0,351 );
if (!numAnim.error) {
    numAnim.start();
} else {
    console.error(numAnim.error);
}
    
    var numAnim = new CountUp("fo2", 0, 121);
if (!numAnim.error) {
    numAnim.start();
} else {
    console.error(numAnim.error);
}
    
    var numAnim = new CountUp("3al", 0, 558 );
if (!numAnim.error) {
    numAnim.start();
} else {
    console.error(numAnim.error);
}
    
    
    var numAnim = new CountUp("fe", 0, 11 );
if (!numAnim.error) {
    numAnim.start();
} else {
    console.error(numAnim.error);
}
    
    
    $(".item").click(function(){
    $("#myCarousel").carousel(1);
});
    
    
    $("#myCarousel").carousel();
    
    
    $(".left").click(function(){
    $("#myCarousel").carousel("prev");
});
    
                })