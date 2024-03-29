/**
* Template Name: DevFolio - v4.10.0
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Intro type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()



// ===============email validation==============

var namevalid=false, emailvalid=false,phonevalid=false,subjectvalid=false,messagevalid=false;


function handleNameChange(){
  var name= document.getElementById("name").value;
  console.log(name);

 
  if (!name.match(/\b^[A-Za-z \.]+$\b/) )
  {
    document.getElementById("name-error").innerText = ("Enter a valid name");
    namevalid=false;
  }
  else
  document.getElementById("name-error").innerText= "";
  namevalid=true;

}


function handleEmailChange()
{
var mailregex = /\b^[^ ][a-z.\-_0-9]+@[a-z0-9]+\.[a-z]{2,3}\b/;
if(!(document.getElementById("email").value).match(mailregex))
{
  document.getElementById("email-error").innerText= ("Enter a valid email id");
  emailvalid =false;
}
else
{
  document.getElementById("email-error").innerText= "";

emailvalid=true;
}
}



function handlePhoneChange()
{
  if (!(document.getElementById("phone").value).match(/\b\d{10}\b/))
  {
    document.getElementById("phone-error").innerText= "Enter a valid phone number";
    phonevalid=false;

  } 
  else{
    document.getElementById("phone-error").innerText= "";
    phonevalid=true;

  }
}

function handleNull(val){
  console.log(val.name);
  if(val.name=="subject"){
  if ((document.getElementById("subject").value=="")){
    document.getElementById("subject-error").innerText= "*Enter the subject";
    subjectvalid=false;
  }
  else{
    document.getElementById("subject-error").innerText= "";
    subjectvalid=true;

  }
  }
  else
 {
  if ((document.getElementById("message").value=="")){
    document.getElementById("message-error").innerText= "*Enter the message";
    messagevalid=false;
  }

    else {
      document.getElementById("message-error").innerText= "";
      messagevalid=true;
  
    } 
  }
 }





  function sendEmail() {
    event.preventDefault();
  
  var templateParams = {
   name: document.getElementById("name").value,
   email: document.getElementById("email").value,
   phone: document.getElementById("phone").value,
   subject: document.getElementById("subject").value,
   message: document.getElementById("message").value
    
  };

  if(namevalid&&emailvalid&&phonevalid&&subjectvalid&&messagevalid)
{
  
    emailjs.send('service_oigf56j', 'template_sa2p2oi', templateParams)
    .then(function(response) {
      alert("mail successfully sent")
       console.log('SUCCESS!', response.status, response.text);
       window.location.reload();
    }, function(error) {
      alert("mail sending failed")
       console.log('FAILED...', error);
    });

  } 

else
alert("Enter required fields");

  
}