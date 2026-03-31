// ১. ৩৬টি টুলের ডাটাবেস
const allTools = [
    { id: 'bmi', name: 'BMI Calc', cat: 'health', icon: '💪' },
    { id: 'bmr', name: 'BMR Calc', cat: 'health', icon: '🔥' },
    { id: 'water', name: 'Water Intake', cat: 'health', icon: '💧' },
    { id: 'emi', name: 'Loan EMI', cat: 'finance', icon: '💰' },
    { id: 'si', name: 'Simple Interest', cat: 'finance', icon: '📈' },
    { id: 'ci', name: 'Compound Int.', cat: 'finance', icon: '💹' },
    { id: 'pct', name: 'Percentage', cat: 'basic', icon: '📊' },
    { id: 'age', name: 'Age Calc', cat: 'daily', icon: '📅' },
    { id: 'disc', name: 'Discount', cat: 'daily', icon: '🏷️' },
    { id: 'bin', name: 'Binary Conv.', cat: 'tech', icon: '🔢' },
    { id: 'hex', name: 'Hex Conv.', cat: 'tech', icon: '🎨' },
    { id: 'gpa', name: 'GPA Calc', cat: 'edu', icon: '🎓' },
    { id: 'unit', name: 'Unit Conv.', cat: 'daily', icon: '📏' },
    { id: 'fuel', name: 'Fuel Cost', cat: 'daily', icon: '⛽' },
    { id: 'tip', name: 'Tip Calc', cat: 'daily', icon: '💸' },
    { id: 'pomo', name: 'Pomodoro', cat: 'daily', icon: '🍅' },
    { id: 'storage', name: 'Storage Conv', cat: 'tech', icon: '💾' },
    { id: 'stats', name: 'Mean/Median', cat: 'edu', icon: '📉' }
    // আরও টুলস একইভাবে অ্যাড করা যাবে
];

const grid = document.getElementById('tool-grid');
const modal = document.getElementById('toolModal');
const body = document.getElementById('modal-body');

// ২. টুল রেন্ডার করা
function renderTools(list) {
    grid.innerHTML = list.map(t => `
        <div class="tool-item" onclick="openTool('${t.id}')">
            <i>${t.icon}</i>
            <span>${t.name}</span>
        </div>
    `).join('');
}

// ৩. টুল ইউআই (UI) মেকার
function openTool(id) {
    modal.style.display = "block";
    let html = "";

    switch(id) {
        case 'bmi':
            html = `<h3>BMI Calculator</h3>
                    <input type="number" id="w" placeholder="Weight (kg)">
                    <input type="number" id="h" placeholder="Height (cm)">
                    <button class="calc-btn" onclick="resBMI()">Calculate</button>`;
            break;
            case 'bmr':
    html = `<h3>BMR Calculator</h3>
            <select id="gen">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input type="number" id="age_val" placeholder="Age (Years)">
            <input type="number" id="w_val" placeholder="Weight (kg)">
            <input type="number" id="h_val" placeholder="Height (cm)">
            <button class="calc-btn" onclick="resBMR()">Calculate BMR</button>`;
            break;
            case 'water':
    html = `<h3>Water Intake Calculator</h3>
            <p style="font-size: 0.9rem; margin-bottom: 10px;">Calculate how much water you should drink daily.</p>
            <input type="number" id="weight_kg" placeholder="Your Weight (kg)">
            <select id="activity_level">
                <option value="0">Normal Activity</option>
                <option value="350">Moderate Exercise (30 min)</option>
                <option value="700">Intense Exercise (60 min+)</option>
            </select>
            <button class="calc-btn" onclick="resWater()">Calculate Target</button>`;
            break;
            case 'tip':
    html = `<h3>Tip Calculator</h3>
            <input type="number" id="tip_bill" placeholder="Bill Amount (৳)">
            <input type="number" id="tip_percent" placeholder="Tip (%)">
            <input type="number" id="tip_people" placeholder="Number of People">
            <button class="calc-btn" onclick="resTip()">Calculate Tip</button>`;
    break;
        case 'emi':
            html = `<h3>Loan EMI</h3>
                    <input type="number" id="p" placeholder="Principal Amount">
                    <input type="number" id="r" placeholder="Interest Rate %">
                    <input type="number" id="t" placeholder="Years">
                    <button class="calc-btn" onclick="resEMI()">Calculate</button>`;
                break;
            case 'si':
                html = `<h3>Simple Interest Calculator</h3>
            <input type="number" id="p_amt" placeholder="Principal Amount (৳)">
            <input type="number" id="r_rate" placeholder="Annual Interest Rate (%)">
            <input type="number" id="t_year" placeholder="Time (Years)">
            <button class="calc-btn" onclick="resSI()">Calculate Interest</button>`;
            break;
        case 'age':
            html = `<h3>Age Calculator</h3>
                    <input type="date" id="dob">
                    <button class="calc-btn" onclick="resAge()">Calculate</button>`;
            break;
        case 'bin':
            html = `<h3>Binary Converter</h3>
                    <input type="number" id="dec" placeholder="Decimal Number">
                    <button class="calc-btn" onclick="resBin()">Convert</button>`;
            break;
            case 'hex':
    html = `<h3>Decimal to Hex Converter</h3>
            <input type="number" id="dec_num" placeholder="Enter Decimal Number (e.g. 255)">
            <button class="calc-btn" onclick="resHex()">Convert to Hex</button>`;
    break;
            case 'pomodoro':
    html = `<h3>Pomodoro Timer</h3>
            <input type="number" id="pomo_time" placeholder="Minutes (e.g. 25)">
            <button class="calc-btn" onclick="startPomo()">Start</button>
            <button class="calc-btn" onclick="stopPomo()">Stop</button>
            <h2 id="pomo_display">00:00</h2>`;
    break;

case 'unit':
    html = `<h3>Length Converter</h3>
            <input type="number" id="unit_val" placeholder="Enter Value">
            <div style="display: flex; gap: 10px;">
                <select id="from_unit">
                    <option value="m">Meter (m)</option>
                    <option value="km">Kilometer (km)</option>
                    <option value="ft">Feet (ft)</option>
                    <option value="inch">Inch (in)</option>
                </select>
                <span style="align-self: center;">to</span>
                <select id="to_unit">
                    <option value="m">Meter (m)</option>
                    <option value="km">Kilometer (km)</option>
                    <option value="ft">Feet (ft)</option>
                    <option value="inch">Inch (in)</option>
                </select>
            </div>
            <button class="calc-btn" onclick="resUnit()">Convert Unit</button>`;
    break;
            case 'pct':
    html = `<h3>Percentage Calculator</h3>
            <p>What is <input type="number" id="p_val" style="width:80px; display:inline;"> % of <input type="number" id="t_val" style="width:120px; display:inline;"></p>
            <button class="calc-btn" onclick="resPct()">Calculate</button>`;
    break;

case 'disc':
    html = `<h3>Discount Calculator</h3>
            <input type="number" id="orig_price" placeholder="Original Price (৳)">
            <input type="number" id="disc_pct" placeholder="Discount Percentage (%)">
            <button class="calc-btn" onclick="resDisc()">Calculate Discount</button>`;
    break;
        case 'gpa':
            html = `<h3>GPA Calculator (Avg)</h3>
                    <input type="text" id="marks" placeholder="Enter marks (comma separated: 80,70,90)">
                    <button class="calc-btn" onclick="resGPA()">Calculate</button>`;
            break;
            case 'ci':
    html = `<h3>Compound Interest</h3>
            <input type="number" id="ci_p" placeholder="Principal Amount (৳)">
            <input type="number" id="ci_r" placeholder="Annual Interest Rate (%)">
            <input type="number" id="ci_t" placeholder="Time (Years)">
            <select id="ci_n">
                <option value="1">Compounded Annually (Yearly)</option>
                <option value="4">Compounded Quarterly (3 Months)</option>
                <option value="12">Compounded Monthly</option>
                <option value="365">Compounded Daily</option>
            </select>
            <button class="calc-btn" onclick="resCI()">Calculate Total</button>`;
    break;
        case 'fuel':
            html = `<h3>Fuel Cost</h3>
                    <input type="number" id="dist" placeholder="Distance (km)">
                    <input type="number" id="mile" placeholder="Mileage (km/L)">
                    <input type="number" id="price" placeholder="Fuel Price (per L)">
                    <button class="calc-btn" onclick="resFuel()">Calculate</button>`;
            break;
        default:
            html = `<h3>${id.toUpperCase()} Tool</h3><p>Coming Soon...</p>`;
    }

    body.innerHTML = html + `<div id="res" class="res-box">Result: ---</div>`;
}

// ৪. ক্যালকুলেশন লজিক (Functions)
const resBMI = () => {
    const w = document.getElementById('w').value, h = document.getElementById('h').value/100;
    const bmi = (w/(h*h)).toFixed(2);
    document.getElementById('res').innerText = `Your BMI is: ${bmi}`;
};
// Tip Calculator Logic
const resTip = () => {
    const bill = parseFloat(document.getElementById('tip_bill').value);
    const percent = parseFloat(document.getElementById('tip_percent').value);
    const people = parseInt(document.getElementById('tip_people').value);

    if (bill > 0 && percent >= 0 && people > 0) {
        const tip = (bill * percent) / 100;
        const total = bill + tip;
        const perPerson = total / people;

        document.getElementById('res').innerHTML = `
            Tip: <strong>৳${tip.toFixed(2)}</strong><br>
            Total: <strong>৳${total.toFixed(2)}</strong><br>
            Per Person: <strong style="color:var(--primary);">৳${perPerson.toFixed(2)}</strong>
        `;
    } else {
        document.getElementById('res').innerText = "Enter valid values!";
    }
};

// Pomodoro Logic
let pomoInterval;

const startPomo = () => {
    let minutes = parseInt(document.getElementById('pomo_time').value);

    if (minutes > 0) {
        let time = minutes * 60;

        clearInterval(pomoInterval);

        pomoInterval = setInterval(() => {
            let min = Math.floor(time / 60);
            let sec = time % 60;

            document.getElementById('pomo_display').innerText =
                `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

            time--;

            if (time < 0) {
                clearInterval(pomoInterval);
                alert("Time's up!");
            }
        }, 1000);
    } else {
        alert("Enter valid time!");
    }
};

const stopPomo = () => {
    clearInterval(pomoInterval);
};

const resBMR = () => {
    const gender = document.getElementById('gen').value;
    const age = parseFloat(document.getElementById('age_val').value);
    const weight = parseFloat(document.getElementById('w_val').value);
    const height = parseFloat(document.getElementById('h_val').value);

    if (age && weight && height) {
        let bmr = 0;
        if (gender === 'male') {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }

        document.getElementById('res').innerHTML = `
            Your BMR: <strong>${bmr.toFixed(2)} kcal/day</strong><br>
            <small style="color:gray; font-size:12px;">This is the energy your body needs at rest.</small>
        `;
    } else {
        document.getElementById('res').innerText = "Please fill all fields!";
    }
};
const resCI = () => {
    const p = parseFloat(document.getElementById('ci_p').value);
    const r = parseFloat(document.getElementById('ci_r').value) / 100;
    const t = parseFloat(document.getElementById('ci_t').value);
    const n = parseInt(document.getElementById('ci_n').value);

    if (p > 0 && r > 0 && t > 0) {
        // Formula: A = P * (1 + r/n)^(n*t)
        const amount = p * Math.pow((1 + r / n), (n * t));
        const interest = amount - p;

        document.getElementById('res').innerHTML = `
            Total Amount: <strong>৳${amount.toLocaleString(undefined, {maximumFractionDigits: 2})}</strong><br>
            Compound Interest: <strong>৳${interest.toLocaleString(undefined, {maximumFractionDigits: 2})}</strong><br>
            <small style="color:var(--primary);">Compounded ${n} times per year</small>
        `;
    } else {
        document.getElementById('res').innerText = "Please enter valid values!";
    }
};
// Percentage Logic
const resPct = () => {
    const p = parseFloat(document.getElementById('p_val').value);
    const t = parseFloat(document.getElementById('t_val').value);

    if (p >= 0 && t > 0) {
        const result = (p / 100) * t;
        document.getElementById('res').innerHTML = `
            ${p}% of ${t} is: <strong>${result.toFixed(2)}</strong>
        `;
    } else {
        document.getElementById('res').innerText = "Please enter valid numbers!";
    }
};

// Discount Logic
const resDisc = () => {
    const price = parseFloat(document.getElementById('orig_price').value);
    const discount = parseFloat(document.getElementById('disc_pct').value);

    if (price > 0 && discount >= 0) {
        const savings = (price * discount) / 100;
        const finalPrice = price - savings;

        document.getElementById('res').innerHTML = `
            Final Price: <strong>৳${finalPrice.toLocaleString()}</strong><br>
            You Save: <span style="color: #10b981;">৳${savings.toLocaleString()}</span>
        `;
    } else {
        document.getElementById('res').innerText = "Please enter valid price and discount!";
    }
};

const resEMI = () => {
    const p = document.getElementById('p').value, r = document.getElementById('r').value/12/100, t = document.getElementById('t').value*12;
    const emi = Math.round((p * r * Math.pow(1+r, t)) / (Math.pow(1+r, t) - 1));
    document.getElementById('res').innerText = `Monthly EMI: $${emi}`;
};

const resWater = () => {
    const weight = parseFloat(document.getElementById('weight_kg').value);
    const extraWater = parseFloat(document.getElementById('activity_level').value);

    if (weight > 0) {
        // ওজন অনুযায়ী পানি (ওজন * ০.০৩৩ লিটার)
        // মিলিমিটারে নিতে ১০০০ দিয়ে গুণ
        const baseWaterML = weight * 33; 
        const totalML = baseWaterML + extraWater;
        const totalLiters = (totalML / 1000).toFixed(2);
        const glasses = Math.round(totalML / 250); // ২৫০ মিলি এর গ্লাস ধরে

        document.getElementById('res').innerHTML = `
            Daily Target: <strong>${totalLiters} Liters</strong><br>
            <small style="color:var(--primary);">Approx. ${glasses} glasses (250ml each)</small>
        `;
    } else {
        document.getElementById('res').innerText = "Please enter a valid weight!";
    }
};

const resSI = () => {
    const p = parseFloat(document.getElementById('p_amt').value);
    const r = parseFloat(document.getElementById('r_rate').value);
    const t = parseFloat(document.getElementById('t_year').value);

    if (p > 0 && r > 0 && t > 0) {
        const interest = (p * r * t) / 100;
        const total = p + interest;

        document.getElementById('res').innerHTML = `
            Interest: <strong>৳${interest.toLocaleString()}</strong><br>
            Total Amount: <strong>৳${total.toLocaleString()}</strong><br>
            <small style="color:gray;">Principal: ৳${p.toLocaleString()}</small>
        `;
    } else {
        document.getElementById('res').innerText = "Please enter valid values!";
    }
};
// Hex Converter Logic
const resHex = () => {
    const dec = parseInt(document.getElementById('dec_num').value);
    if (!isNaN(dec)) {
        const hex = dec.toString(16).toUpperCase();
        document.getElementById('res').innerHTML = `
            Decimal: <strong>${dec}</strong><br>
            Hexadecimal: <strong style="color:var(--primary);">#${hex}</strong>
        `;
    } else {
        document.getElementById('res').innerText = "Please enter a valid decimal number!";
    }
};

// Unit Converter Logic (Length)
const resUnit = () => {
    const val = parseFloat(document.getElementById('unit_val').value);
    const from = document.getElementById('from_unit').value;
    const to = document.getElementById('to_unit').value;

    if (val >= 0) {
        // মিটারকে বেস ইউনিট ধরে কনভার্ট করা (মিটার ফ্যাক্টর)
        const factors = { m: 1, km: 1000, ft: 0.3048, inch: 0.0254 };

        // বেস মিটারে রূপান্তর (Meter)
        const valInMeters = val * factors[from];
        // আউটপুট ইউনিটে রূপান্তর
        const result = valInMeters / factors[to];

        document.getElementById('res').innerHTML = `
            Result: <strong>${result.toFixed(4)} ${to.toUpperCase()}</strong><br>
            <small style="color:gray;">${val} ${from} = ${result.toFixed(4)} ${to}</small>
        `;
    } else {
        document.getElementById('res').innerText = "Please enter a positive value!";
    }
};

const resAge = () => {
    const dob = new Date(document.getElementById('dob').value);
    const diff = new Date() - dob;
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById('res').innerText = `Age: ${age} Years`;
};

const resBin = () => {
    const dec = parseInt(document.getElementById('dec').value);
    document.getElementById('res').innerText = `Binary: ${dec.toString(2)}`;
};

const resGPA = () => {
    const marks = document.getElementById('marks').value.split(',').map(Number);
    const avg = marks.reduce((a, b) => a + b) / marks.length;
    document.getElementById('res').innerText = `Average Marks: ${avg.toFixed(2)}`;
};

const resFuel = () => {
    const d = document.getElementById('dist').value, m = document.getElementById('mile').value, p = document.getElementById('price').value;
    const cost = (d / m) * p;
    document.getElementById('res').innerText = `Total Cost: $${cost.toFixed(2)}`;
};

// ৫. সিস্টেম ফাংশনস (Search, Theme, Close)
function closeModal() { modal.style.display = "none"; }

function searchTool() {
    const q = document.getElementById('toolSearch').value.toLowerCase();
    renderTools(allTools.filter(t => t.name.toLowerCase().includes(q)));
}

function filterTools(cat) {
    const filtered = cat === 'all' ? allTools : allTools.filter(t => t.cat === cat);
    renderTools(filtered);
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.toggle('active', b.innerText.toLowerCase().includes(cat)));
}

document.getElementById('theme-toggle').onclick = () => {
    const current = document.body.getAttribute('data-theme');
    document.body.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
};

window.onclick = (e) => { if(e.target == modal) closeModal(); };

// Initial Render
renderTools(allTools);
