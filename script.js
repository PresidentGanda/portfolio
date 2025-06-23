let aboutMe = document.querySelector(".AboutMe");
let caseStudies = document.querySelector(".CaseStudies");
let contactMe = document.querySelector(".ContactMe");
let title = document.querySelector(".header");
let titleBody = document.querySelector(".titleBody");
let aboutBody = document.querySelector(".aboutBody");
let caseBody = document.querySelector(".caseBody");
let contactBody = document.querySelector(".contactBody");

aboutMe.addEventListener("click", function() {
aboutMe.style.transform = "scale(1.4)";
caseStudies.style.transform = "scale(1)";
caseStudies.style.transition = "ease 1s";
contactMe.style.transform = "scale(1)";
contactMe.style.transition = "ease 1s";
titleBody.style.display = "none";
caseBody.style.display = "none";
contactBody.style.display = "none";
aboutBody.style.display = "flex";
})

caseStudies.addEventListener("click", function() {
caseStudies.style.transform = "scale(1.4)";
aboutMe.style.transform = "scale(1)";
aboutMe.style.transition = "ease 1s";
contactMe.style.transform = "scale(1)";
contactMe.style.transition = "ease 1s";
titleBody.style.display = "none";
caseBody.style.display = "flex";
contactBody.style.display = "none";
aboutBody.style.display = "none";
})

contactMe.addEventListener("click", function() {
contactMe.style.transform = "scale(1.4)";
aboutMe.style.transform = "scale(1)";
aboutMe.style.transition = "ease 1s";
caseStudies.style.transform = "scale(1)";
caseStudies.style.transition = "ease 1s";
titleBody.style.display = "none";
contactBody.style.display = "flex";
caseBody.style.display = "none";
aboutBody.style.display = "none";
})

title.addEventListener("click", function(){
titleBody.style.display = "flex";
caseBody.style.display = "none";
contactBody.style.display = "none";
aboutBody.style.display = "none";
caseStudies.style.transform = "scale(1)";
caseStudies.style.transition = "ease 1s";
contactMe.style.transform = "scale(1)";
contactMe.style.transition = "ease 1s";
aboutMe.style.transform = "scale(1)";
aboutMe.style.transition = "ease 1s";
})