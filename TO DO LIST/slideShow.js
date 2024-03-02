let myImage=document.getElementById("slideshoww");
//Array with pics i want to see in the slideshow
let images=["images/1.jpg","images/2.jpg","images/3.jpg"]
let i=0;
// عشان اتحكم مبقاش مقيد بانديكس



function SlideShow(){
    myImage.setAttribute("src",images[i]);

    if (i==images.length-1){
        i==0
    }
    else{
        i++
    }
    setTimeout(function(){
        SlideShow();
    },2000)
}
SlideShow();