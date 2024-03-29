const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; //슬라이드 개수 
const prev = document.querySelector('.prev'); //이전버튼
const next = document.querySelector('.next'); //다음버튼
const slideWidth = 300; //한 개의 슬라이드 넓이
const slideMargin = 100; //슬라이드 간의 margin 값


//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';
function movoSlide(num) {
    slides.style.left = -num * 400 + "px";
    currentIdx = num;
}

prev.addEventListener("click", function(){
    //첫번째 슬라이드로 표시 됐을 때는 이전 버튼 눌러도 반응 없게 하기 위해 
    //currentIdx !==0일때만 moveSlide 함수 불러옴 
    console.log(currentIdx);
    if(currentIdx !==0){
        movoSlide(currentIdx - 1);
    }
});

next.addEventListener("click", function() {
    //마지막 슬라이드로 표시 됐을 때는 다음 버튼 눌러도 반응 없게 하기 위해
    //currentidx !==slideCount -1  일때만
    //함수 불러옴
    console.log(currentIdx);
    if( currentIdx !== slideCount - 1){
        movoSlide(currentIdx + 1)
    }
});