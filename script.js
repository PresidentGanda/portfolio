let aboutMe = document.querySelector(".AboutMe");
let caseStudies = document.querySelector(".CaseStudies");
let contactMe = document.querySelector(".ContactMe");
let title = document.querySelector(".header");
let titleBody = document.querySelector(".titleBody");
let aboutBody = document.querySelector(".aboutBody");
let caseBody = document.querySelector(".caseBody");
let contactBody = document.querySelector(".contactBody");
let caseImage1 = document.querySelector(".caseImage1");
let caseImage2 = document.querySelector(".caseImage2");
let next = document.querySelector(".next");
let back = document.querySelector(".back");
let caseText1 = document.querySelector(".caseText1");
let caseText2 = document.querySelector(".caseText2");
let count = 1;
caseImage2.style.display = 'none';
caseText2.style.display = 'none';

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

next.addEventListener("click", function(){
count++;
console.log(count);
if (count === 2){
    caseText2.style.display = "flex";
    caseImage2.style.display = "flex";
    caseImage1.style.display = 'none';
    caseText1.style.display = 'none';
}
})
back.addEventListener('click', function(){
    count--;
    console.log(count);
if (count === 1){
    caseText1.style.display = "flex";
    caseImage1.style.display = "flex";
    caseImage2.style.display = 'none';
    caseText2.style.display = 'none';
}
})
    
