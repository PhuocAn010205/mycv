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
    //anh o du an
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
// anh 
document.querySelectorAll('.intro__item').forEach(article => {
  const items = article.querySelectorAll('.intro__item-list__item');
  const imageBox = article.querySelector('.full-image');
  const imageEl = imageBox.querySelector('img');
  const closeBtn = imageBox.querySelector('.close-btn');
  const nextBtn = imageBox.querySelector('.next-btn');
  const prevBtn = imageBox.querySelector('.prev-btn');

  let currentIndex = 0;
  let imageList = [];

  items.forEach(item => {
    item.addEventListener('click', () => {
      const images = JSON.parse(item.getAttribute('data-images') || '[]');
      if (!images.length) return;

      imageList = images;
      currentIndex = 0;
      imageEl.src = imageList[currentIndex];
      imageBox.classList.add('active');
    });
  });

  nextBtn.addEventListener('click', () => {
    if (!imageList.length) return;
    currentIndex = (currentIndex + 1) % imageList.length;
    imageEl.src = imageList[currentIndex];
  });

  prevBtn.addEventListener('click', () => {
    if (!imageList.length) return;
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    imageEl.src = imageList[currentIndex];
  });

  closeBtn.addEventListener('click', () => {
    imageBox.classList.remove('active');
    imageEl.src = '';
    imageList = [];
  });
});
// chạy %
document.querySelectorAll('.skill__box-list__item').forEach(item => {
  const progress = item.querySelector('.skill-progress');
  const percent = item.getAttribute('data-skill');

  item.addEventListener('mouseenter', () => {
    progress.style.width = percent + '%';
  });

  item.addEventListener('mouseleave', () => {
    progress.style.width = '0';
  });
});
// cert 
const leftBtn = document.querySelector(".left__arrow");
const rightBtn = document.querySelector(".right__arrow");
 let cert = 0; 
const activeCertificate = () =>{
   const certSlide = document.querySelector(".cert__slide");
    certSlide.style.transform = `translateX(calc(${cert * -100}% - ${cert * 20}px))`;
 
    if (cert=== 0) {
        leftBtn.classList.add('disabled');
        rightBtn.classList.remove('disabled');
    } else if (cert === 1) {
        rightBtn.classList.add('disabled');
        leftBtn.classList.remove('disabled');
    }
    // Nút phải
rightBtn.addEventListener('click', () => {
    if (cert < 1) {
        cert++;
        activeCertificate();
    }
});

// Nút trái
leftBtn.addEventListener('click', () => {
    if (cert > 0) {
        cert--;
        activeCertificate();
    }
});
};

activeCertificate();
// menu icon 
const menuIcon = document.getElementById("menu-icon");
const navBar = document.querySelector('.navbar');
menuIcon.addEventListener('click',()=>{
   menuIcon.classList.toggle('fa-xmark');
   navBar.classList.toggle('active');
});

// Đóng menu khi click vào một link trên menu (mobile)
document.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
  });
});
// 
document.querySelectorAll(".skill__box-list__item").forEach(item =>{
  item.addEventListener('click',function(){
    alert(this.data.skill);
  })
})