/* 
টাস্ক-১:

৯. সিম্পল একটা ওয়েবসাইট বানাও। সেখানে একটি ইনপুট ফিল্ডে ইমেইল লিখবে। তারপর সেটার পাশে একটা submit নামে বাটন আছে। সেই সাবমিট বাটনে চাপ দিলে রেগুলার এক্সপ্রেশন (গুগলে সার্চ দিয়ে বের করবে) দিয়ে চেক করবে এটা ভ্যালিড ইমেইল কিনা। 

১০. ইমেইল যদি ভ্যালিড হয়। তাহলে একটা গ্রিন কালার দিয়ে কোন একটা টেক্সট লিখে দিয়ে বলবে তোমার ইমেইল ঠিক আছে। আর যদি ইমেইল ঠিক না হয়। তাহলে একটা লাল কালারের টেক্সট দিয়ে বলবে। ইমেইল ঠিক নাই। ভালো করে ইমেইল দাও। 
 */


const messageText = (msg, type) => {
    const message = document.getElementById('message');
    message.innerText = msg;
    if(type === 'success') {
        message.classList.add('text-success');
        message.classList.remove('text-danger');
    }
    if(type === 'error') {
        message.classList.add('text-danger');
        message.classList.remove('text-success');
    }
}

const showMsg = (type) => {
    if(type === 'success'){
        messageText('Congratulations!!! Your Email is Valid.', 'success');
    }
    if(type === 'empty') {
        messageText('Your Email Field is empty. Please enter the correct email.', 'error')
    }
    if(type === 'error') {
        messageText('Sorry!!! Your Email is not Correct. Please enter the correct email.', 'error')
    }
}

const validateEmail = () => {
    const email = document.getElementById('email-field').value;
    document.getElementById('email-field').value = '';
    if(email === ''){
        showMsg('empty');
    }
    else {
        const validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(validator.test(email)){
            showMsg('success');
        }
        else {
            showMsg('error');
        }
    }    
}
document.getElementById('submit-btn').addEventListener('click', () => {
    validateEmail();
});