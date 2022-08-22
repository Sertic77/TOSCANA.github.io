$(document).ready(function(){
    $('.fondo').slick({
      autoplay: true,
      autoplaySpeed:10000,
      arrows:false,
      pauseOnHover:false,
      fade:true,
      pauseOnFocus:false,
      draggable:false,
    });
    
  });


  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover:false,
    arrows:false,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  
  });


  $(document).ready(function(){
    $('.cuadro').slick({
      autoplay: true,
      autoplaySpeed:10000,
      arrows:false,
      pauseOnHover:false,
      fade:true,
      pauseOnFocus:false,
      draggable:false,
      
    });
    
  });