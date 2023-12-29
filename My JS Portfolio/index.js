
//--------------------------------------------------------------------------------------------------------------------------------//

//Nav Slider
const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')
    const overlay = document.querySelector('.overlay')

    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        burger.classList.toggle('active')
        overlay.classList.toggle('active')

        //Toggle Animations
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
            }
        })
    })
}
navSlide()

//--------------------------------------------------------------------------------------------------------------------------------//

//Nav pop-up/down
const navBar = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navBar.classList.add("morph");
    } else {
      navBar.classList.remove("morph");
    }
})

//--------------------------------------------------------------------------------------------------------------------------------//

//Toggle Scroll Animations
const observer = new IntersectionObserver((entries) => { //Class is already provided by the browser's built-in JavaScript API. 
  entries.forEach((entry) => {
      if(entry.isIntersecting) {
          entry.target.classList.add('show')
      }
  })
})

//-------------------------------------------------------------------//

const hiddenElementsLogo = document.querySelectorAll('.logo')
const hiddenElementsLink1 = document.querySelectorAll('.first')  
const hiddenElementsLink2 = document.querySelectorAll('.second') 
const hiddenElementsLink3 = document.querySelectorAll('.third') 
const hiddenElementsLink4 = document.querySelectorAll('.fourth') 
const hiddenElementsLink5 = document.querySelectorAll('.fifth') 

hiddenElementsLogo.forEach((el) => observer.observe(el)) //The observe method is part of the IntersectionObserver class.
hiddenElementsLink1.forEach((el) => observer.observe(el))                                  
hiddenElementsLink2.forEach((el) => observer.observe(el)) 
hiddenElementsLink3.forEach((el) => observer.observe(el)) 
hiddenElementsLink4.forEach((el) => observer.observe(el)) 
hiddenElementsLink5.forEach((el) => observer.observe(el)) 

//-------------------------------------------------------------------//

const hero1 = document.querySelector('.hero-1')
const hero2 = document.querySelector('.hero-2')
const hero3 = document.querySelector('.hero-3')
const hero4 = document.querySelector('.hero-4')
const hero5 = document.querySelector('.hero-5')

observer.observe(hero1)
observer.observe(hero2)
observer.observe(hero3)
observer.observe(hero4)
observer.observe(hero5)

//-------------------------------------------------------------------//

const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')

observer.observe(bar1)
observer.observe(bar2)

//-------------------------------------------------------------------//

const about = document.querySelector('.about')

observer.observe(about)

//-------------------------------------------------------------------//

const icon1 = document.querySelector('.icon-1')
const icon2 = document.querySelector('.icon-2')
const icon3 = document.querySelector('.icon-3')
const icon4 = document.querySelector('.icon-4')
const icon5 = document.querySelector('.icon-5')

observer.observe(icon1)
observer.observe(icon2)
observer.observe(icon3)
observer.observe(icon4)
observer.observe(icon5)

//-------------------------------------------------------------------//

const projectHeading = document.querySelector('.project-heading-scroll')
const projectA = document.querySelector('.project-a')
const projectB = document.querySelector('.project-b')
const projectC = document.querySelector('.project-c')

observer.observe(projectHeading)
observer.observe(projectA)
observer.observe(projectB)
observer.observe(projectC)

//-------------------------------------------------------------------//

const portfolioContinued = document.querySelector('.portfolio-continued')

observer.observe(portfolioContinued)

//-------------------------------------------------------------------//

const contact = document.querySelector('.contact')

observer.observe(contact)

//--------------------------------------------------------------------------------------------------------------------------------//












