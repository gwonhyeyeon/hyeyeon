const slides = document.querySelector('.slides');   //전체 슬라이드 컨테이너 
        const slideImg = document.querySelectorAll('.slides li');
        let currentIdx = 0;
        const slideCount = slideImg.length;
        const prev = document.getElementById('upper_leftarrow');
        const next = document.getElementById('upper_rightarrow');
        const slideWidth = 550;
        const slideMargin = 100;

        slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';
        
        function moveSlide(num){
            slides.style.left = - num * 650 + "px";
            currentIdx = num;
        }

        prev.addEventListener("click", function(){
            console.log(currentIdx);
            if(currentIdx !=0){
                moveSlide(currentIdx - 1);
            }
        });

        next.addEventListener("click", function(){
            console.log(currentIdx);
            if(currentIdx !== slideCount -1){
                moveSlide(currentIdx +1)
            }
        });