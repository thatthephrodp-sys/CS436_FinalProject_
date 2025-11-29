เหตุผลในการเลือกใช้เทคโนโลยี (Technology Stack Justification)
โครงการ: Web Application เครื่องคิดเลข (Calculator Web App)
เอกสารฉบับนี้อธิบายถึงเหตุผลและปัจจัยในการตัดสินใจเลือกเครื่องมือ ภาษา และแพลตฟอร์มต่างๆ สำหรับการพัฒนาระบบ

1. Frontend Technologies (ส่วนหน้าบ้าน)

    1.1 HTML5 (HyperText Markup Language)
    เหตุผลที่เลือก: เป็นมาตรฐานสากลสำหรับการสร้างโครงสร้างเว็บ
    ประโยชน์: รองรับ Semantic Elements (เช่น <header>, <main>, <section>) ซึ่งช่วยในเรื่อง SEO และ Accessibility ทำให้ Screen Reader สามารถอ่านหน้าเว็บให้ผู้พิการทางสายตาใช้งานได้ง่ายขึ้น

    1.2 CSS3 (Cascading Style Sheets)
    เหตุผลที่เลือก: ใช้สำหรับจัดการรูปแบบและการแสดงผล
    ประโยชน์:
    Flexbox & Grid: ช่วยให้การจัด Layout ของปุ่มกด (Keypad) ทำได้ง่ายและยืดหยุ่นกว่าการใช้ Table แบบเก่า
    CSS Variables: เหมาะสำหรับการทำระบบ Theme (Dark/Light Mode) เพราะสามารถเปลี่ยนค่าสีในตัวแปรเดียวแล้วกระทบทั้งเว็บทันที
    Media Queries: จำเป็นสำหรับการทำ Responsive Design ให้รองรับทั้งมือถือและคอมพิวเตอร์

    1.3 JavaScript (Vanilla JS - ES6+)
    เหตุผลที่เลือก: เลือกใช้ JavaScript แบบเพียวๆ โดยไม่ใช้ Framework (เช่น React หรือ Vue)
    ประโยชน์:
    Performance: โหลดเร็วที่สุดเพราะไม่มี Library ขนาดใหญ่ติดมาด้วย (No overhead)
    Complexity: โปรเจกต์เครื่องคิดเลขมีความซับซ้อนไม่มาก การใช้ Framework อาจเป็นการ "ขี่ช้างจับตั๊กแตน" (Over-engineering)
    Browser Support: Modern Browsers รองรับ ES6+ แทบทั้งหมดแล้ว จึงเขียน Code ได้กระชับและมีประสิทธิภาพ

2. Data Persistence (การจัดเก็บข้อมูล)

    2.1 LocalStorage (Browser API)
    เหตุผลที่เลือก: ใช้แทน Database Server
    ประโยชน์:
    Simplicity: ใช้งานง่ายผ่าน Key-Value Pair ไม่ต้องตั้งค่า Database Server ให้ยุ่งยาก
    Offline Capable: ข้อมูลถูกเก็บในเครื่องผู้ใช้ ทำให้สามารถดูประวัติการคำนวณได้แม้ไม่มีอินเทอร์เน็ต
    Privacy: ข้อมูลส่วนตัวของผู้ใช้ (ประวัติการคิดเลข) ไม่ถูกส่งออกไปยัง Server ภายนอก

3. Deployment & Hosting (การนำขึ้นใช้งานจริง)

3.1 GitHub Pages หรือ Netlify
    เหตุผลที่เลือก: สำหรับโฮสต์ Static Website
    ประโยชน์:
    Cost: ฟรี ไม่มีค่าใช้จ่ายสำหรับ Static Site
    Speed: มี CDN (Content Delivery Network) ช่วยให้โหลดหน้าเว็บได้เร็วจากทั่วโลก
    Ease of Use: สามารถตั้งค่าให้ Deploy อัตโนมัติเมื่อมีการ Push Code ขึ้น GitHub Repository

4. Development Tools (เครื่องมือพัฒนา)

    VS Code: เป็น Editor ที่เบา มี Extension สนับสนุนเยอะ (เช่น Live Server สำหรับดูผลลัพธ์ทันที)
    Git: ใช้สำหรับจัดการ Version Control เพื่อติดตามการแก้ไขโค้ดและทำงานร่วมกัน
    Mermaid.js: ใช้สำหรับเขียน Diagram ต่างๆ ในรูปแบบ Code (Diagram as Code) ทำให้แก้ไขได้ง่ายและเก็บรวมกับ Source Code ได้เลย