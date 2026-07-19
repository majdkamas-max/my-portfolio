/* ==========================================
   معرض أعمال مجد خميس - ملف الحركات التفاعلية
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. التحكم في شفافية وخلفية شريط التنقل (Navbar Scroll Effect)
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            // إضافة خلفية داكنة معتمة وظلال احترافية عند النزول
            navbar.classList.add('bg-[#0f172a]', 'shadow-2xl', 'border-slate-800/80');
            navbar.classList.remove('bg-[#0f172a]/80', 'backdrop-blur-md');
        } else {
            // العودة للوضع الشفاف الأصلي عند الصعود للأعلى
            navbar.classList.remove('bg-[#0f172a]', 'shadow-2xl', 'border-slate-800/80');
            navbar.classList.add('bg-[#0f172a]/80', 'backdrop-blur-md');
        }
    });

    // 2. تفعيل التمرير الذكي والسلس للروابط الداخلية لضمان تجربة مستخدم ممتازة
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSelection = this.getAttribute('href');
            
            if (targetSelection === '#') return;
            
            const destinationElement = document.querySelector(targetSelection);
            if (destinationElement) {
                destinationElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});