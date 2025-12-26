// ========== ข้อความบอกรักสำหรับ Typewriter Effect ==========
const mainLoveMessage = "You know... Every day with you is the most beautiful day of my life. Thank you for being part of my life. I love you 💕";

// ========== ข้อความหวานๆ สุ่ม 20 ข้อความ ==========
const randomLoveMessages = [
    "I love you more than words can express 💖",
    "You and only you make my heart flutter 💕",
    "Every moment with you is a precious treasure ✨",
    "I want you to know that you are everything to me 💝",
    "You make my world brighter and more beautiful 🌸",
    "Your smile is the strength that keeps me going every day 😊",
    "Thank you for coming into my life and making it meaningful 🌹",
    "I'm so lucky to have someone as special as you 🍀",
    "You are the answer to all my questions in life 💫",
    "There's not a single day I don't think about you 💭",
    "My heart beats faster every time I see you 💓",
    "You are my dream come true ✨",
    "I love you more than yesterday and will love you more tomorrow 📈",
    "You make me a better person every day 🌟",
    "My happiness is being by your side 💑",
    "You are the reason I smile every day 😄",
    "I love everything about you, even your little flaws 💖",
    "I hope we can be together for a very long time 🌈",
    "You are the best gift life has given me 🎁",
    "I love you, now and forever 💕♾️"
];

// ========== ตัวแปรสำหรับ DOM Elements ==========
const loveMessageElement = document.getElementById('loveMessage');
const surpriseBtn = document.getElementById('surpriseBtn');
const loveBtn = document.getElementById('loveBtn');
const randomMessageElement = document.getElementById('randomMessage');
const bgAnimation = document.getElementById('bgAnimation');
const surpriseContainer = document.getElementById('surpriseContainer');

// ========== ฟังก์ชัน Typewriter Effect ==========
let typewriterIndex = 0;
let typingSpeed = 80; // ความเร็วในการพิมพ์ (มิลลิวินาที)

function typeWriter() {
    if (typewriterIndex < mainLoveMessage.length) {
        loveMessageElement.textContent += mainLoveMessage.charAt(typewriterIndex);
        typewriterIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        // เมื่อพิมพ์เสร็จ ให้เอาเคอร์เซอร์กระพริบออก
        loveMessageElement.classList.add('typing-complete');
    }
}

// ========== ฟังก์ชันสร้างหัวใจและดอกไม้ลอยพื้นหลัง ==========
function createFloatingElement() {
    const element = document.createElement('div');
    const isHeart = Math.random() > 0.5;
    
    // สุ่มเลือกระหว่างหัวใจและดอกไม้
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💞'];
    const flowers = ['🌸', '🌺', '🌼', '🌻', '🌹', '🏵️'];
    
    element.textContent = isHeart 
        ? hearts[Math.floor(Math.random() * hearts.length)]
        : flowers[Math.floor(Math.random() * flowers.length)];
    
    // กำหนดตำแหน่งเริ่มต้นสุ่ม
    element.style.position = 'absolute';
    element.style.left = Math.random() * 100 + '%';
    element.style.fontSize = (Math.random() * 20 + 20) + 'px';
    element.style.opacity = '0';
    
    // ใช้แอนิเมชั่นตามชนิด
    element.style.animation = isHeart 
        ? `floatHeart ${Math.random() * 10 + 15}s linear infinite`
        : `floatFlower ${Math.random() * 10 + 15}s linear infinite`;
    
    // หน่วงเวลาเริ่มแอนิเมชั่นสุ่ม
    element.style.animationDelay = Math.random() * 5 + 's';
    
    bgAnimation.appendChild(element);
    
    // ลบ element เมื่อแอนิเมชั่นจบ
    setTimeout(() => {
        element.remove();
    }, (Math.random() * 10 + 15) * 1000);
}

// สร้างหัวใจและดอกไม้ลอยเป็นระยะ
function startBackgroundAnimation() {
    // สร้างตอนเริ่มต้น
    for (let i = 0; i < 15; i++) {
        setTimeout(createFloatingElement, i * 500);
    }
    
    // สร้างต่อเนื่องทุก 2 วินาที
    setInterval(createFloatingElement, 2000);
}

// ========== ฟังก์ชันเอฟเฟกต์เซอร์ไพรส์ ==========
function createSurpriseEffect() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // สร้างหัวใจแตกกระจายเยอะๆ เหมือนดอกไม้ไฟ
    for (let i = 0; i < 80; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-burst';
        heart.textContent = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
        
        // คำนวณตำแหน่งแตกกระจายแบบสุ่มรอบๆ
        const angle = (Math.PI * 2 * i) / 80 + Math.random() * 0.5;
        const distance = Math.random() * 400 + 250;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.setProperty('--tx', tx + 'px');
        heart.style.setProperty('--ty', ty + 'px');
        
        surpriseContainer.appendChild(heart);
        
        // ลบหลังแอนิเมชั่นจบ
        setTimeout(() => heart.remove(), 1500);
    }
    
    // สร้างดอกไม้บานเยอะๆ กระจายทั้งหน้าจอ
    setTimeout(() => {
        for (let i = 0; i < 60; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower-bloom';
            flower.textContent = ['🌸', '🌺', '🌼', '🌻', '🌹', '💐', '🏵️', '🌷'][Math.floor(Math.random() * 8)];
            
            // สุ่มตำแหน่งกระจายทั้งหน้าจอ
            flower.style.left = Math.random() * window.innerWidth + 'px';
            flower.style.top = Math.random() * window.innerHeight + 'px';
            
            surpriseContainer.appendChild(flower);
            
            // ลบหลังแอนิเมชั่นจบ
            setTimeout(() => flower.remove(), 2000);
        }
    }, 300);
    
    // เพิ่มดอกไม้ระลอกที่ 2 เพื่อความหนาแน่น
    setTimeout(() => {
        for (let i = 0; i < 40; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower-bloom';
            flower.textContent = ['🌸', '🌺', '🌼', '🌻', '🌹', '💐', '🏵️', '🌷'][Math.floor(Math.random() * 8)];
            
            // สุ่มตำแหน่งกระจายทั้งหน้าจอ
            flower.style.left = Math.random() * window.innerWidth + 'px';
            flower.style.top = Math.random() * window.innerHeight + 'px';
            
            surpriseContainer.appendChild(flower);
            
            // ลบหลังแอนิเมชั่นจบ
            setTimeout(() => flower.remove(), 2000);
        }
    }, 700);
}

// ========== ฟังก์ชันแสดงข้อความสุ่ม ==========
function showRandomMessage() {
    // สุ่มข้อความ
    const randomIndex = Math.floor(Math.random() * randomLoveMessages.length);
    const message = randomLoveMessages[randomIndex];
    
    // แสดงข้อความ
    randomMessageElement.textContent = message;
    randomMessageElement.classList.add('show');
    
    // ซ่อนข้อความหลัง 8 วินาที
    setTimeout(() => {
        randomMessageElement.classList.remove('show');
    }, 8000);
}

// ========== Event Listeners ==========
surpriseBtn.addEventListener('click', () => {
    // เพิ่มเอฟเฟกต์กดปุ่ม
    surpriseBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        surpriseBtn.style.transform = '';
    }, 100);
    
    // เรียกเอฟเฟกต์เซอร์ไพรส์
    createSurpriseEffect();
});

loveBtn.addEventListener('click', () => {
    // เพิ่มเอฟเฟกต์กดปุ่ม
    loveBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        loveBtn.style.transform = '';
    }, 100);
    
    // แสดงข้อความสุ่ม
    showRandomMessage();
});

// ========== เริ่มต้นเว็บไซต์ ==========
window.addEventListener('DOMContentLoaded', () => {
    // เริ่ม typewriter effect
    setTimeout(typeWriter, 500);
    
    // เริ่มแอนิเมชั่นพื้นหลัง
    startBackgroundAnimation();
});
