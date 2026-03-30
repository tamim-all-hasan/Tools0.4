// ১. টুলসের ডেটা এবং HTML স্ট্রাকচার
const toolData = {
    health: `
        <div class="tool-card">
            <h3>BMI Calculator</h3>
            <input type="number" id="h-weight" placeholder="Weight (kg)">
            <input type="number" id="h-height" placeholder="Height (cm)">
            <button class="calc-btn" onclick="calcBMI()">Calculate BMI</button>
            <div id="bmi-res" class="result">Result will appear here</div>
        </div>
        <div class="tool-card">
            <h3>Water Intake</h3>
            <input type="number" id="w-weight" placeholder="Weight (kg)">
            <button class="calc-btn" onclick="calcWater()">Daily Target</button>
            <div id="water-res" class="result">Liters per day</div>
        </div>
    `,
    finance: `
        <div class="tool-card">
            <h3>Loan EMI</h3>
            <input type="number" id="loan-amt" placeholder="Loan Amount">
            <input type="number" id="loan-rate" placeholder="Interest Rate (%)">
            <input type="number" id="loan-years" placeholder="Tenure (Years)">
            <button class="calc-btn" onclick="calcEMI()">Calculate EMI</button>
            <div id="emi-res" class="result">Monthly Payment</div>
        </div>
    `,
    tech: `
        <div class="tool-card">
            <h3>Data Converter</h3>
            <input type="number" id="gb-input" placeholder="Enter GB">
            <button class="calc-btn" onclick="calcData()">Convert to MB</button>
            <div id="data-res" class="result">0 MB</div>
        </div>
    `,
    unit: `
        <div class="tool-card">
            <h3>Temp Converter</h3>
            <input type="number" id="c-input" placeholder="Celsius (°C)">
            <button class="calc-btn" onclick="calcTemp()">Convert to Fahrenheit</button>
            <div id="temp-res" class="result">0 °F</div>
        </div>
    `
};

// ২. টুল লোড করার ফাংশন
function loadTools(category) {
    document.getElementById('app-content').innerHTML = toolData[category];
    
    // বাটন অ্যাক্টিভ ক্লাস ম্যানেজমেন্ট
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category)) btn.classList.add('active');
    });
}

// ৩. ক্যালকুলেশন ফাংশনসমূহ
function calcBMI() {
    const w = parseFloat(document.getElementById('h-weight').value);
    const h = parseFloat(document.getElementById('h-height').value) / 100;
    if(w && h) {
        const bmi = (w / (h * h)).toFixed(1);
        document.getElementById('bmi-res').innerText = `Your BMI is ${bmi}`;
    }
}

function calcEMI() {
    const P = parseFloat(document.getElementById('loan-amt').value);
    const R = parseFloat(document.getElementById('loan-rate').value) / 12 / 100;
    const N = parseFloat(document.getElementById('loan-years').value) * 12;
    if(P && R && N) {
        const emi = Math.round((P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1));
        document.getElementById('emi-res').innerText = `EMI: ৳${emi} / month`;
    }
}

function calcWater() {
    const weight = document.getElementById('w-weight').value;
    const liters = (weight * 0.033).toFixed(2);
    document.getElementById('water-res').innerText = `Drink ${liters} Liters daily`;
}

function calcData() {
    const gb = document.getElementById('gb-input').value;
    document.getElementById('data-res').innerText = `${gb * 1024} MB`;
}

function calcTemp() {
    const c = document.getElementById('c-input').value;
    const f = (c * 9/5) + 32;
    document.getElementById('temp-res').innerText = `${f.toFixed(1)} °F`;
}

// ৪. ডার্ক মোড লজিক
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
});

// শুরুতে হেলথ টুলস লোড হবে
window.onload = () => loadTools('health');
