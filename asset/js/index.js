document.addEventListener('DOMContentLoaded', function() {
        const navbarLinks = document.querySelectorAll('.navbar__link');

        navbarLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarLinks.forEach(navLink => navLink.classList.remove('navbar__link--active'));
                this.classList.add('navbar__link--active');
            });
        });
    });
    // download__pdf
    function download__pdf(){
         const element = document.getElementById('content');
  
  const opt = {
    margin:       0,
    filename:     'file.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'pt', format: 'a4', orientation: 'portrait' },
    pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
  };

  html2pdf().set(opt).from(element).save();
    }
    
const arrowRight =document.querySelector('.project__right .navigation .arrow-right');
const arrowLeft =document.querySelector('.project__right .navigation .arrow-left');

let index = 0;

const activePortfolio = () =>{
    const imgSlide =document.querySelector('.project__carousel .img-slide');
    
     const portfolioDetails=document.querySelectorAll('.project__left-box');
    imgSlide.style.transform =`translateX(calc(${index * -100}% - ${index * 20}px ))`; 
    
    portfolioDetails.forEach(detail => {
        detail.classList.remove('project__left-box__active');
    });
    portfolioDetails[index].classList.add('project__left-box__active');
    
}
arrowRight.addEventListener('click',() =>{

    if(index <2 ){
        index++;
        arrowLeft.classList.remove('disabled');
        
    }else {
        index = 3;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click',() =>{

    if(index > 1 ){
        index--;
        arrowRight.classList.remove('disabled');

    }else {
        index = 0;
        arrowLeft.classList.add('disabled');

    }
    activePortfolio();
});
