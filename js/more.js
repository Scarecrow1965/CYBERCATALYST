// 
// More button used in whoweare.html 
// 

// thanks to : https://www.youtube.com/watch?v=QEZVTvtvDt4
let noOfCharac = 160;
let contents = document. querySelectorAll(".content");
// used for testing purposes only
// console.log(contetns);
// 
contents.forEach(content => {
    //if text length is les thean noOfCharac .. then hide the read more button
    if(content.textContent.length < noOfCharac) {
        content.nextElementSibling.getElementsByClassName.display = "none";
    }
    else {
        let displayText = content.textContent.slice (0, noOfCharac);
        let moreText = content.textContent.slice (noOfCharac);
        // used for testing purposes only
        // console.log(displayText);
        // 
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn){
    let post = btn.parentElement;
    // used for testing purposes only
    // console.log(post);
    // 
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}