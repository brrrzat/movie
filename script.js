const API_KEY = "3f03a5c5";
const API_URL = "https://www.omdbapi.com/";

const themeBtn = document.getElementById("theme-btn");
const body = document.body;
if(localStorage.getItem('theme') === 'dark'){
    body.classList.add('dark')
    themeBtn.textContent = '🌑'
}

themeBtn.addEventListener('click', ()=>{
body.classList.toggle('dark');
const isDark = body.classList.contains('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
themeBtn.textContent = isDark ? '🌞' : '🌚';
})