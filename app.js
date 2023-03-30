let header = document.querySelector("header");
let headerAHref = document.querySelectorAll("header nav ul li a")

window.addEventListener("scroll", e => {
    if(window.pageYOffset != 0 ){
        header.style = "background-color:rgba(0, 0, 0, 0.5) ; color:white";
        //因為不只一個a標籤，所以要選迴圈選擇全部
        headerAHref.forEach(a => {
            a.style = "color:white";
        })

    }else{
        header.style = ""
        headerAHref.forEach(a => {
            a.style = "";
        })
    }
});