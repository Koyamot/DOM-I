const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//add nav content
const navContent = document.querySelectorAll('nav a')
navContent.forEach((link, i) =>  link.textContent = siteContent.nav[`nav-item-${i+1}`] )


  // change cta

  //h1
  const h1Element = document.querySelector('h1')
  h1Element.textContent = siteContent["cta"]["h1"];
  let h1BR = siteContent.cta.h1.split(" ")
  let domIsAwesome = `${h1BR[0]} <br> ${h1BR[1]} <br> ${h1BR[2]}`
  h1Element.innerHTML = domIsAwesome;

  //button

  const buttonElement = document.querySelector('button')
  buttonElement.textContent = siteContent['cta']['button'];

  //cta-img

  let ctaImg = document.getElementById("cta-img");
  ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

  //main-content h4
  const mainTextContent = document.querySelectorAll(".top-content h4")
  mainTextContent[0].textContent = siteContent["main-content"]["features-h4"];
  mainTextContent[1].textContent = siteContent["main-content"]["about-h4"];

  //main-content p
  const mainContP = document.querySelectorAll(".top-content p")
  mainContP[0].textContent = siteContent["main-content"]["features-content"];
  mainContP[1].textContent = siteContent["main-content"]["about-content"];

  //middle-img
  let midImg = document.getElementById("middle-img");
  midImg.setAttribute('src', siteContent['main-content']["middle-img-src"]);

  //bottom-content
  const btmContent = document.querySelectorAll(".bottom-content h4")
  btmContent[0].textContent = siteContent["main-content"]["services-h4"];
  btmContent[1].textContent = siteContent["main-content"]["product-h4"];
  btmContent[2].textContent = siteContent["main-content"]["vision-h4"];

  //bottom-content p
  const btmContP = document.querySelectorAll(".bottom-content p")
  btmContP[0].textContent = siteContent["main-content"]["services-content"];
  btmContP[1].textContent = siteContent["main-content"]["product-content"];
  btmContP[2].textContent = siteContent["main-content"]["vision-content"];

  //contact
  const contTitle = document.querySelector(".contact h4")
  contTitle.textContent = siteContent['contact']['contact-h4'];

  const pContent = document.querySelectorAll('.contact p')
  pContent.forEach((info, i) =>  {
    let pCont = ["address", "phone", "email"];
    pContent[i].textContent = siteContent.contact[`${pCont[i]}`] 
  })

  //address br
  const addressBr = document.querySelector('.contact p')
  addressBr.textContent = siteContent["contact"]["address"];
  let addyBr = siteContent.contact.address.split(" ")
  let addySplit = `${addyBr[0]} ${addyBr[1]} ${addyBr[2]} ${addyBr[3]} <br> ${addyBr[4]} ${addyBr[5]}`
  addressBr.innerHTML = addySplit;

  //footer
  let footer = document.querySelector('footer p');
  footer.textContent = siteContent.footer.copyright


  //append nav
  let linkOne = document.createElement("a");               
  linkOne.href = '#'
  let linkOneName = document.createTextNode("The Past");       
  linkOne.appendChild(linkOneName);                    
  document.querySelector("nav").prepend(linkOne);  
  
  //prepend nav
  let linkTwo = document.createElement("a");               
  linkTwo.href = '#'
  let linkTwoName = document.createTextNode("The Future");       
  linkTwo.appendChild(linkTwoName);                            
  document.querySelector("nav").appendChild(linkTwo);


  //change nav content to green
  const navContent1 = document.querySelectorAll('nav a')
  navContent1.forEach(link => {
    link.style.color = 'green'
  }
    )

