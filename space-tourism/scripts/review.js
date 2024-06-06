
let count = localStorage.getItem("count");

if(count== null || count ==""){
    count=1;
}else{
    count++;
}

localStorage.setItem("count", count);

let submission = document.querySelector('#submissionCount')

submission.innerHTML=count;