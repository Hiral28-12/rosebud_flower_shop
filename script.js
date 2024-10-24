$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".customer-collections").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

    document.getElementById('newsletterForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const email = document.getElementById('form5Example24').value;

        if (email) {
            alert('Thank you for subscribing!'); 
            document.getElementById('newsletterForm').reset(); 
        } else {
            alert('Please enter a valid email address.'); 
        }
    });