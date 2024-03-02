setTimeout(function() {
    let p = document.querySelector('p');
   
    if (p) {
        p.classList.remove('fadeIn');
        p.classList.add('text');
    }
  
}, 1000);

setTimeout(function() {
    let p = document.querySelector('.text');
   
    if (p) {
        p.classList.remove('text');
        p.classList.add('black');
    }
  
}, 2000);

setTimeout(function() {
    let leftCoverElement = document.querySelector('.left_Cover');
    let rightCoverElement = document.querySelector('.right_Cover');
    if (leftCoverElement) {
        leftCoverElement.classList.remove('cover');
        leftCoverElement.classList.add('coverUp');
    }
    if (rightCoverElement) {
        rightCoverElement.classList.remove('cover');
        rightCoverElement.classList.add('coverUp');
    }
}, 2000);

setTimeout(function() {
    let p = document.querySelector('.black');
   
    if (p) {
       
        p.classList.remove('black');
        p.classList.add('fadeOut');
    }
  
}, 3000);

