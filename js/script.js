// যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 

const sectionTitle = document.getElementsByTagName('h2');
for(const h2 of sectionTitle){
    h2.style.color = 'lightblue';
}

//backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 

document.getElementById('Backpack').style.backgroundColor = 'tomato';

//card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 

const cards =  document.getElementsByClassName('card-border');
for(const card of cards){
    card.style.borderRadius="30px";
}

// কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 

function consoleBtn(){
    console.log('Hello World');
}

//এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে চেষ্টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।

const buttonNone = document.getElementsByClassName('panda-buy-btn');
for(const btn of buttonNone){
    btn.addEventListener('click', function(){
        btn.style.display = 'none';
    });
}

//LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 

document.getElementById('email-confirm').addEventListener('keyup', function(event){
    const emailBtn = document.getElementById('subscribe-btn');
    if(event.target.value == 'email'){
        emailBtn.removeAttribute('disabled');
    }
    else{
        emailBtn.setAttribute('disabled', true);
    }
});

//(অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 

// black  bag
document.getElementById("img").addEventListener("mouseenter", mouseEnter);
document.getElementById("img").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    document.getElementById('img').src="images/bags/bag-2.png";
}

function mouseLeave() {
    document.getElementById('img').src="images/bags/bag-3.png";
}
// blue  bag
document.getElementById("bag-2").addEventListener("mouseenter", mouseEnterBlue);
document.getElementById("bag-2").addEventListener("mouseleave", mouseLeaveBlue);

function mouseEnterBlue() {
    document.getElementById('bag-2').src="images/bags/bag-1.png";
}

function mouseLeaveBlue() {
    document.getElementById('bag-2').src="images/bags/bag-2.png";
}
// red bag
document.getElementById("bag-1").addEventListener("mouseenter", mouseEnterRed);
document.getElementById("bag-1").addEventListener("mouseleave", mouseLeaveRed);

function mouseEnterRed() {
    document.getElementById('bag-1').src="images/bags/bag-3.png";
}

function mouseLeaveRed() {
    document.getElementById('bag-1').src="images/bags/bag-1.png";
}


//(অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
/* document.getElementById('Subscribe').addEventListener('dblclick', function(){
    document.getElementById('Subscribe').style.backgroundColor = 'pink';
}); */

document.getElementById('Subscribe').addEventListener('dblclick', function(){
    document.getElementById('Subscribe').style.backgroundColor = 'lightblue';

    document.getElementById('Subscribe').addEventListener('dblclick', function(){
        document.getElementById('Subscribe').style.backgroundColor = 'aqua';
    })
});

