function func(event){
    let allpara=document.querySelectorAll("p");
    let imagearray=[];
    let i;
    for(i=0;i<allpara.length;i++){
        if(allpara[i].textContent.includes("Image")){
            imagearray.push(allpara[i]);
        }
    }
    let enteredtext=event.target.value.toUpperCase();
    for(i=0;i<imagearray.length;i++){
        if(imagearray[i].textContent.toUpperCase().includes(enteredtext)){
            imagearray[i].parentElement.style.display="block";
        }
        else{
            imagearray[i].parentElement.style.display="none";
        }
    }
}
