// HEADER HTML template //

const headerTemplate = document.getElementById('header')

headerTemplate.innerHTML = `
<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-bars fa-2xl"></i>
  </button>
  <a class="navbar-brand" href="index.html">EPIQ</a>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="index.html">Welkom</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="boek-online.html">BOEK ONLINE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="auticoaching.html">Auticoaching</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="psychologische-coaching.html">Psychologische coaching</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="equicoaching.html">Equicoaching</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="who-is-who.html">Wie is wie?</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="ativiteiten.html">Activiteiten</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="autishop.html">Autishop</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact.html">Contact</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`

// FOOTER HTML template //

const footerTemplate = document.getElementById('footer')

footerTemplate.innerHTML = `
<p>
Professional Coach Center EPIQ en groepspraktijk Anemoon
<br />
<i class="fa-solid fa-location-dot"></i><a
  href="https://www.google.com/maps/dir//Anemoon+multidisciplinair+diagnose+%26+therapiecentrum+Wilrijk,+kinder-+en+jeugdpsychiatrie+en+therapie,+Prins+Boudewijnlaan+347,+2610+Antwerpen/@51.1711376,4.3566004,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47c3f1108d8e7d03:0xf3e8d6ea69881dec!2m2!1d4.4265998!2d51.1711554"
  target="_blank">
  Prins Boudewijnlaan 347, 2610 Wilrijk
</a>
<br />
<i class="fa-solid fa-envelope"></i>
<a class="link" href="mailto:info@epiq.center">
  info@epiq.center</a>
;<br /><a class="link" href="mailto:katleen.timmermans@groepspraktijkanemoon.be">
  katleen.timmermans@groepspraktijkanemoon.be</a>
<br />
<i class="fa-solid fa-phone"></i><a href="tel:0471647701"> 0471/64.77.01</a>
</p>
`

// SLIDESHOW //

var slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName('mySlides')
  var dots = document.getElementsByClassName('dot')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}
