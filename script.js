let currentInput = '';
let historyLog = []; // Array to store history

function updateScreen(value) {
    document.getElementById('screen').value = value;
}

function appendNumber(number) {
    if (currentInput === 'Error') currentInput = '';
    currentInput += number;
    updateScreen(currentInput);
    updatePreview();
}

function appendOperator(operator) {
    if (currentInput === 'Error') return;
    const lastChar = currentInput.slice(-1);
    // Standard Operator Logic
    if (currentInput === '' || ['+', '-', '*', '/', '%'].includes(lastChar)) {
        return;
    }
    currentInput += operator;
    updateScreen(currentInput);
    updatePreview();
}

function clearScreen() {
    currentInput = '';
    updateScreen('0');
}

function deleteLast() {
    if (currentInput === 'Error') {
        clearScreen();
        return;
    }
    currentInput = currentInput.toString().slice(0, -1);
    updateScreen(currentInput || '0');
    updatePreview();
}

// --- Main Calculation Logic ---
function calculateResult() {
    try {
        // Prevent Division by Zero Error
        if (currentInput.includes('/0')) {
             const check = eval(currentInput);
             if (check === Infinity || check === -Infinity) {
                 throw new Error("DivByZero");
             }
        }

        let result = eval(currentInput);

        // Format Result
        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(4));
        }

        // --- SAVE TO HISTORY ---
        // Save format: "10 + 5 = 15"
        addToHistory(currentInput, result);
        
        currentInput = result.toString();
        updateScreen(currentInput);
        document.getElementById('preview').innerText = '';

    } catch (error) {
        currentInput = 'Error';
        updateScreen('Error');
    }
}

// --- History Functions ---

function addToHistory(expression, result) {
    // Keep only last 10 entries (User Story requirement)
    if (historyLog.length >= 10) {
        historyLog.shift(); // Remove oldest
    }
    historyLog.push(`${expression} = ${result}`);
    renderHistory();
}

function renderHistory() {
    const list = document.getElementById('history-list');
    list.innerHTML = ''; // Clear current list
    
    // Loop through array in reverse (newest first)
    // .slice().reverse() creates a copy to reverse without affecting original array
    historyLog.slice().reverse().forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

function toggleHistory() {
    const historyView = document.getElementById('history-view');
    historyView.classList.toggle('hidden');
}

function clearHistory() {
    historyLog = [];
    renderHistory();
}

function toggleTheme() {
    // 1. สลับ class 'light-mode' ที่ body
    document.body.classList.toggle('light-mode');
    
    // 2. เปลี่ยนไอคอนปุ่ม (พระอาทิตย์ <-> พระจันทร์)
    const themeBtn = document.getElementById('theme-btn');
    const isLight = document.body.classList.contains('light-mode');
    
    if (isLight) {
        themeBtn.textContent = '🌙'; // ถ้าสว่างอยู่ ให้โชว์ปุ่มพระจันทร์ (เพื่อกดกลับไปมืด)
    } else {
        themeBtn.textContent = '☀️'; // ถ้ามืดอยู่ ให้โชว์ปุ่มพระอาทิตย์
    }
}

// --- [ส่วนที่เพิ่มใหม่] Live Preview Function ---

function updatePreview() {
    const previewEl = document.getElementById('preview');
    
    // ถ้าไม่มีข้อมูล หรือเป็น Error ให้เคลียร์ Preview
    if (currentInput === '' || currentInput === 'Error') {
        previewEl.innerText = '';
        return;
    }

    try {
        // สร้างตัวแปรสำหรับทดลองคำนวณ
        let expression = currentInput;

        const lastChar = expression.slice(-1);
        if (['+', '-', '*', '/', '%'].includes(lastChar)) {
            expression = expression.slice(0, -1);
        }

        // ถ้าตัดแล้วไม่มีอะไรเหลือ ก็จบ
        if (expression === '') {
            previewEl.innerText = '';
            return;
        }
        
        // ลองคำนวณดู
        let result = eval(expression);

        // จัด Format ทศนิยม
        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(4));
        }

        if (result.toString() === currentInput) {
            previewEl.innerText = '';
        } else {
            previewEl.innerText = result;
        }

    } catch (error) {
        // ถ้าคำนวณไม่ได้ (เช่น สูตรผิด) ไม่ต้องโชว์อะไร
        previewEl.innerText = '';
    }
}