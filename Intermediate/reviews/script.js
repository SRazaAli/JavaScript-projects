//array of objects

const reviews = [
  {
    id : 1,
    name :"Gordon Norman",
    job : "web developer",
    img : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" ,
    text : "The staff was great. The receptionists were very helpful and answered all our questions.",


  },
  {
    id : 2,
    name : "Anna Johnson",
    job : "web designer",
    img : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    text : "I recently had the pleasure of staying at This Hotel, and it was an unforgettable experience.",
  },
  {
    id : 3,
    name : "Peter Jones",
    job : "intern",
    img : "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    text : "I recently had the pleasure of staying at this hotel, and it was an unforgettable experience. ",
  },
  {
    id : 4,
    name : "Michael William",
    job : "HR intern",
    img : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg",
    text : "From the moment we entered, the attentive staff made us feel right at home.",
  }

]

// select items
const img = document.getElementById("userImg");
const userName = document.getElementById("userName");
const job = document.getElementById("userJob");
const text = document.getElementById("userText");

const nextBtn = document.getElementById("btn-next");

//function
nextBtn.addEventListener("click",changeReview);

let currentItem = 0;
function changeReview(){
    const reviewObj = reviews[currentItem];
    img.src = reviewObj.img;
    userName.innerHTML = reviewObj.name;
    job.innerHTML = reviewObj.job;
    text.innerHTML = reviewObj.text;
    
    if(currentItem == 3){
      currentItem = -1;
    }
    currentItem++;
}