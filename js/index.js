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
// logo.setAttribute('src', siteContent["nav"]["img-src"]);
// logo.setAttribute('src', siteContent.nav.img-src);
logo.setAttribute('src', siteContent.nav["img-src"]);

// ******************  These are tasks 1 & task 2 *****************************

let navList = document.querySelectorAll('nav a');
// console.log(navList);
// let navList_1 = navList[1];
// console.log(navList_1);
// navList[1].textContent=siteContent["nav"]["nav-item-2"]
let cmdString = "nav-item-";
for(let i=0;i<navList.length;i++) {
  navList[i].textContent=siteContent["nav"]["nav-item-"+(i+1)];
}

document.querySelector('.cta-text h1').textContent=siteContent["cta"]["h1"];
document.querySelector('.cta-text button').textContent=siteContent["cta"]["button"];
document.querySelector('#cta-img').src=siteContent["cta"]["img-src"];


let mainContent = ["features", "about", "services", "product", "vision"];
let textContentList = document.querySelectorAll('.text-content');
// console.log(textContentList);
// let textContentList_1 = textContentList[1];
// console.log(textContentList_1);
// let textContentList_1_children = textContentList[1].children;
// console.log(textContentList_1_children);
// let textContentList_1_children_h4 = textContentList[1].children[0];
// console.log(textContentList_1_children_h4);
for(let i=0;i<mainContent.length;i++) {
  textContentList[i].children[0].textContent=siteContent["main-content"][mainContent[i]+"-h4"];
  textContentList[i].children[1].textContent=siteContent["main-content"][mainContent[i]+"-content"];
}

document.querySelector('#middle-img').src=siteContent["main-content"]["middle-img-src"];

let contactList = document.querySelector('.contact').children;
let contactListElements = ["contact-h4", "address", "phone", "email"];
for(let i=0;i<contactList.length;i++) {
  contactList[i].textContent = siteContent.contact[contactListElements[i]];
}
contactList[1].style.width = "140px";


document.querySelector('footer p').textContent=siteContent.footer.copyright;

// ******************  These are tasks 3 *****************************

for(let i=0;i<navList.length;i++) {
  navList[i].style.color = "green";
}

let preLink = document.createElement('a');
preLink.textContent = "Before";
preLink.style.color = "green";
document.querySelector('nav').prepend(preLink);

let postLink = document.createElement('a');
postLink.textContent = "After";
postLink.style.color = "green";
document.querySelector('nav').append(postLink);

