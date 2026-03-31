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
        case 'emi':
            html = `<h3>Loan EMI</h3>
                    <input type="number" id="p" placeholder="Principal Amount">
                    <input type="number" id="r" placeholder="Interest Rate %">
                    <input type="number" id="t" placeholder="Years">
                    <button class="calc-btn" onclick="resEMI()">Calculate</button>`;
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
        case 'gpa':
            html = `<h3>GPA Calculator (Avg)</h3>
                    <input type="text" id="marks" placeholder="Enter marks (comma separated: 80,70,90)">
                    <button class="calc-btn" onclick="resGPA()">Calculate</button>`;
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

const resEMI = () => {
    const p = document.getElementById('p').value, r = document.getElementById('r').value/12/100, t = document.getElementById('t').value*12;
    const emi = Math.round((p * r * Math.pow(1+r, t)) / (Math.pow(1+r, t) - 1));
    document.getElementById('res').innerText = `Monthly EMI: $${emi}`;
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
