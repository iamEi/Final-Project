
function showhide(){
    var btn = document.getElementById("show-hide");
    var photo = document.getElementById("myphoto");
    var doge = document.getElementById("doge");
    if (btn.innerHTML == "Show Images") {
        btn.innerHTML = "Hide Images";
        photo.style.transform = "scale(1)";
        doge.style.transform = "scale(1)";
    }
    else{
        btn.innerHTML = "Show Images";
        photo.style.transform = "scale(0)";
        doge.style.transform = "scale(0)";
    }
}

function change_gif(){
    var gif = document.getElementById("mygif");
    
    if (gif.style.backgroundImage == 'url("images/giff.gif")'){
        gif.style.backgroundImage = "url(images/rickroll.gif)";
    }
    else {
        gif.style.backgroundImage = "url(images/giff.gif)";
    }
}


function changecolor(){
    var style = getComputedStyle(document.body);
    console.log(style.getPropertyValue("--bg"));
    if (style.getPropertyValue("--bg") == 'rgb(219, 216, 216)'){
        document.documentElement.style.setProperty("--cards","#4E6279");
        document.documentElement.style.setProperty("--bg","#A4B4C0");
        document.documentElement.style.setProperty("--fontcolor","#ffffff");
        document.documentElement.style.setProperty("--headercolor","#4E6279");
    }
    else{
        document.documentElement.style.setProperty("--cards","#549C8C");
        document.documentElement.style.setProperty("--bg","rgb(219, 216, 216)");
        document.documentElement.style.setProperty("--fontcolor","#000000");
        document.documentElement.style.setProperty("--headercolor","ffffff");
    }
}