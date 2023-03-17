const title = document.querySelector("#title");


title.onclick = () => {
    if(!title.classList.contains("clicked")){
        title.classList.add("clicked");
    }else {
        title.classList.remove("clicked");
    }
}

//title이라는 변수에는 html문서에서 선택된 dom요소가 저장되어 있습니다. 
//onclick 속성에 이벤트 헨들러 함수가 할당되어 있습니다. 
//이벤트 핸들러 함수는 다음과 같은 동작
//title클래스가 "clicked"를 포함하지 않으면
// if(!title.classlist.contains("clicked"))), 다음 동작을 수행합니다. 


//title요소를 클릭하면 "clicked" 클래스를 추가하거나 제거하여 클릭한 상태를 토글합니다. 