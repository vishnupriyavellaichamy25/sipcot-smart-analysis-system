// --- ACCESSIBILITY: FONT SIZE ---
let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 16;
const bodyElement = document.documentElement;

function increaseFont() {
    currentFontSize += 2;
    if (currentFontSize > 24) currentFontSize = 24;
    applyFontSize();
}

function decreaseFont() {
    currentFontSize -= 2;
    if (currentFontSize < 12) currentFontSize = 12;
    applyFontSize();
}

function resetFont() {
    currentFontSize = 16;
    applyFontSize();
}

function applyFontSize() {
    bodyElement.style.fontSize = currentFontSize + 'px';
    document.body.style.fontSize = currentFontSize + 'px';
    localStorage.setItem('fontSize', currentFontSize);
}

// --- MOCK DATABASE AND AUTH ---
const mockUsers = [
    { username: 'company_01', password: 'pass123', role: 'user', companyName: 'TechCorp Industries' },
    { username: 'company_02', password: 'pass123', role: 'user', companyName: 'Innovate Manufacturing' }
];

// Re-hydrate session from local storage if exists
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// --- i18n Translation Dictionary ---
const translations = {
    en: {
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_contact": "Contact",
        "nav_login": "Login",
        "system_title": "SIPCOT Industrial Monitoring System",
        "system_subtitle": "Industrial Data Management and Analysis",
        "hero_title": "Welcome to the SIPCOT Industrial Monitoring System",
        "hero_subtitle": "A centralized platform for monitoring real-time industrial performance, resource management, and investment tracking across all SIPCOT parks in Tamil Nadu.",
        "hero_btn": "Access Portal",
        "info_title": "Empowering Industrial Growth",
        "info_desc": "Our system securely manages company data, tracks efficiency, and promotes sustainable industrial practices by monitoring key metrics like water and power consumption.",
        "role_title": "Select Login Role",
        "role_user": "Login as User",
        "role_user_desc": "For SIPCOT Companies",
        "role_admin": "Login as Admin",
        "role_admin_desc": "For SIPCOT Officials",
        "login_uname": "Company ID / Username",
        "login_pwd": "Password",
        "login_btn": "Login to Dashboard"
    },
    ta: {
        "nav_home": "முகப்பு",
        "nav_about": "எங்களை பற்றி",
        "nav_contact": "தொடர்புக்கு",
        "nav_login": "உள்நுழை",
        "system_title": "சிப்காட் தொழில் கண்காணிப்பு அமைப்பு",
        "system_subtitle": "தொழில்துறை தரவு மேலாண்மை மற்றும் பகுப்பாய்வு",
        "hero_title": "சிப்காட் தொழில் கண்காணிப்பு அமைப்பிற்கு வரவேற்கிறோம்",
        "hero_subtitle": "தமிழ்நாடு முழுவதும் உள்ள அனைத்து சிப்காட் பூங்காக்களிலும் நிகழ்நேர செயல்திறன், வள மேலாண்மை மற்றும் முதலீடுகளை கண்காணிப்பதற்கான மைய தளம்.",
        "hero_btn": "போர்ட்டலை அணுகவும்",
        "info_title": "தொழில்துறை வளர்ச்சியை மேம்படுத்துதல்",
        "info_desc": "எங்கள் அமைப்பு தரவை பாதுகாப்பாக நிர்வகிக்கிறது, செயல்திறனைக் கண்காணிக்கிறது மற்றும் நீர் மற்றும் மின் நுகர்வு போன்ற முக்கிய அளவீடுகளைக் கண்காணிப்பதன் மூலம் நிலையான நடைமுறைகளை ஊக்குவிக்கிறது.",
        "role_title": "உள்நுழைவு பாத்திரத்தை தேர்வு செய்யவும்",
        "role_user": "பயனராக உள்நுழையவும்",
        "role_user_desc": "சிப்காட் நிறுவனங்களுக்கு",
        "role_admin": "நிர்வாகியாக உள்நுழையவும்",
        "role_admin_desc": "சிப்காட் அதிகாரிகளுக்கு",
        "login_uname": "நிறுவனத்தின் ஐடி / பயனர் பெயர்",
        "login_pwd": "கடவுச்சொல்",
        "login_btn": "டாஷ்போர்டில் உள்நுழையவும்"
    },
    hi: {
        "nav_home": "मुख्य पृष्ठ",
        "nav_about": "हमारे बारे में",
        "nav_contact": "संपर्क",
        "nav_login": "लॉग इन",
        "system_title": "सिपकोट औद्योगिक निगरानी प्रणाली",
        "system_subtitle": "औद्योगिक डेटा प्रबंधन और विश्लेषण",
        "hero_title": "सिपकोट औद्योगिक निगरानी प्रणाली में आपका स्वागत है",
        "hero_subtitle": "पूरे तमिलनाडु के सिपकोट पार्कों में वास्तविक समय के औद्योगिक प्रदर्शन, संसाधन प्रबंधन और निवेश ट्रैकिंग की निगरानी के लिए एक केंद्रीकृत मंच।",
        "hero_btn": "पोर्टल तक पहुंचें",
        "info_title": "औद्योगिक विकास को सशक्त बनाना",
        "info_desc": "हमारी प्रणाली सुरक्षित रूप से कंपनी डेटा का प्रबंधन करती है, कार्यकुशलता को ट्रैक करती है, और पानी और बिजली की खपत जैसे प्रमुख मैट्रिक्स की निगरानी करके टिकाऊ औद्योगिक प्रथाओं को बढ़ावा देती है।",
        "role_title": "लॉगिन भूमिका चुनें",
        "role_user": "उपयोगकर्ता के रूप में लॉगिन करें",
        "role_user_desc": "सिपकोट कंपनियों के लिए",
        "role_admin": "एक्सेस लॉगिन",
        "role_admin_desc": "सिपकोट अधिकारियों के लिए",
        "login_uname": "पंजीकरण आईडी / उपयोगकर्ता नाम",
        "login_pwd": "पासवर्ड",
        "login_btn": "डैशबोर्ड पर जाएँ"
    }
};

function changeLanguage(langCode) {
    localStorage.setItem('sipcot_lang', langCode);
    const elements = document.querySelectorAll('[data-i18n-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n-key');
        if (translations[langCode] && translations[langCode][key]) {
            el.innerText = translations[langCode][key];
        }
    });

    const selectBox = document.getElementById('langSelector');
    if(selectBox && selectBox.value !== langCode) selectBox.value = langCode;
}

let sipcotData = JSON.parse(localStorage.getItem('sipcot_data')) || [];
let userProgressChartInstance = null;

// --- VIEW ROUTING ---
function showView(viewId) {
    // Hide all views
    document.querySelectorAll('.view-section').forEach(view => {
        view.classList.remove('active-view');
        // fallback for inline styles
        view.style.display = 'none'; 
    });
    
    // Show target view
    const target = document.getElementById(viewId);
    if(target) {
        target.classList.add('active-view');
        target.style.display = 'block';
    }

    // Un-target scroll links natively on custom view switches
    if(viewId !== 'public-view') {
        document.querySelectorAll('.scroll-link').forEach(link => link.classList.remove('active'));
    }
}

// --- AUTHENTICATION LOGIC ---
function showLogin(role) {
    document.getElementById('login-role').value = role;
    document.getElementById('login-title').innerText = role === 'admin' ? 'Admin Login' : 'Company User Login';
    document.getElementById('login-error').style.display = 'none';
    document.getElementById('loginForm').reset();
    showView('login-view');
}

function togglePassword() {
    const pwd = document.getElementById('password');
    pwd.type = pwd.type === 'password' ? 'text' : 'password';
}

function logout() {
    console.log("Logging out user:", currentUser.username);
    currentUser = null;
    localStorage.removeItem('currentUser');
    document.getElementById('user-controls').style.display = 'none';
    document.getElementById('nav-login-btn').style.display = 'block';
    showView('public-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function login(e) {
    e.preventDefault();
    const roleReq = document.getElementById('login-role').value;
    const userIn = document.getElementById('username').value.trim();
    const passIn = document.getElementById('password').value;

    console.log(`Attempting login for username: ${userIn} with role: ${roleReq}`);

    let user = null;

    if (roleReq === 'admin') {
        // Admin credentials validation (Separate system)
        if (userIn === 'admin' && passIn === 'admin123') {
            user = { username: 'admin', role: 'admin', companyName: 'System Admin' };
        }
    } else {
        // Company User validation
        user = mockUsers.find(u => u.username === userIn && u.password === passIn && u.role === 'user');
    }

    if (user) {
        console.log("Login successful!", user);
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        document.getElementById('login-error').style.display = 'none';
        
        // Update global nav header
        document.getElementById('nav-welcome-msg').innerText = `Welcome, ${user.companyName}`;
        document.getElementById('user-controls').style.display = 'block';
        document.getElementById('nav-login-btn').style.display = 'none';
        
        // Role-based Redirection
        if (user.role === 'admin') {
            console.log("Redirecting to Admin Dashboard");
            initAdminDashboard();
            showView('admin-dashboard-view');
        } else {
            console.log("Redirecting to User Dashboard");
            initUserDashboard();
            showView('user-dashboard-view');
        }
    } else {
        console.error("Login failed: Invalid credentials or role mismatch.");
        const errDiv = document.getElementById('login-error');
        if (roleReq === 'admin') {
            errDiv.innerText = "Invalid admin credentials";
        } else {
            errDiv.innerText = "Invalid username or password";
        }
        errDiv.style.display = 'block';
    }
}

// --- USER DASHBOARD LOGIC ---

function initUserDashboard() {
    document.getElementById('dashboard-company-name').innerText = currentUser.companyName;
    document.getElementById('entryCompanyName').value = currentUser.companyName;
    refreshUserDashboardData();
}

function refreshUserDashboardData() {
    // Filter data for current user only
    const userData = sipcotData.filter(d => d.username === currentUser.username);
    
    // 1. Calculate Summary Cards & Efficiency (based on latest entry if exists)
    calculateUserMetrics(userData);
    
    // 2. Render History Table
    renderUserTable(userData);
    
    // 3. Render Chart
    renderUserChart(userData);
}

function calculateUserMetrics(data) {
    const alertsDiv = document.getElementById('dashboard-alerts');
    alertsDiv.innerHTML = ''; // clear previous alerts
    
    if (data.length === 0) {
        document.getElementById('stat-investment').innerText = "0.00";
        document.getElementById('stat-employees').innerText = "0";
        document.getElementById('stat-power').innerText = "0";
        const badgeDiv = document.getElementById('efficiency-badge');
        badgeDiv.className = "badge";
        badgeDiv.innerHTML = "Efficiency: No Data <small>▼</small>";
        document.getElementById('efficiency-details').innerHTML = '<p style="margin:0; font-style:italic;">Please enter data to see efficiency analysis.</p>';
        return;
    }

    // Accumulate valid totals or get latest
    const latest = data[data.length - 1]; // Data is appended chronologically
    
    document.getElementById('stat-investment').innerText = parseFloat(latest.investment).toFixed(2);
    document.getElementById('stat-employees').innerText = latest.employees;
    document.getElementById('stat-power').innerText = parseFloat(latest.power).toLocaleString();

    // Smart Rule Alerts
    if (parseFloat(latest.power) > 50000) {
        alertsDiv.innerHTML += `<div class="alert alert-danger"><strong>Warning:</strong> Power consumption constraint exceeded (>50,000 kWh). Please review usage.</div>`;
    }
    if (parseFloat(latest.water) > 15000) {
        alertsDiv.innerHTML += `<div class="alert alert-warning"><strong>Notice:</strong> High water usage detected. Verify compliance with SIPCOT limits.</div>`;
    }

    // Simple Efficiency Indicator
    const turnover = parseFloat(latest.turnover);
    const power = parseFloat(latest.power);
    let efficiencyMsg = "Average";
    let badgeClass = "badge-average";
    
    if (power === 0) {
        efficiencyMsg = "N/A";
    } else {
        const ratio = turnover / (power / 1000); 
        if (ratio > 1.5) {
            efficiencyMsg = "Good";
            badgeClass = "badge-good";
        } else if (ratio < 0.5) {
            efficiencyMsg = "Poor";
            badgeClass = "badge-poor";
        }
    }
    
    const badgeDiv = document.getElementById('efficiency-badge');
    badgeDiv.innerHTML = `Efficiency: ${efficiencyMsg} <small>▼</small>`;
    badgeDiv.className = `badge ${badgeClass}`;

    // --- Dynamic Advanced Analysis ---
    const investment = parseFloat(latest.investment);
    const employees = parseInt(latest.employees) || 1; // avoid div by 0
    const water = parseFloat(latest.water);
    const detailsBox = document.getElementById('efficiency-details');
    
    let analysisHtml = '<ul>';
    
    // Water per employee
    const waterPerEmp = water / employees;
    if (waterPerEmp > 50) {
        analysisHtml += `<li>⚠️ <span>Water usage per employee is high (${waterPerEmp.toFixed(1)} L/employee), indicating inefficiency.</span></li>`;
    } else {
        analysisHtml += `<li>✅ <span>Good water efficiency (${waterPerEmp.toFixed(1)} L/employee).</span></li>`;
    }

    // Power per turnover
    if (turnover > 0) {
        const powerPerTurnover = power / turnover;
        if (powerPerTurnover > 1000) {
            analysisHtml += `<li>⚠️ <span>Power consumption is high compared to output (${powerPerTurnover.toFixed(0)} kWh/Cr).</span></li>`;
        } else {
            analysisHtml += `<li>✅ <span>Power consumption is well managed relative to turnover.</span></li>`;
        }
    } else if (power > 0) {
        analysisHtml += `<li>⚠️ <span>Power consumption is high compared to output (No turnover reported yet).</span></li>`;
    }

    // Investment vs Turnover (Return on investment)
    if (turnover < investment) {
        analysisHtml += `<li>⚠️ <span>Return on investment is low (Turnover: ${turnover} Cr &lt; Investment: ${investment} Cr).</span></li>`;
    } else {
        analysisHtml += `<li>✅ <span>Positive return on investment (${turnover} Cr Turnover vs ${investment} Cr Investment).</span></li>`;
    }

    // Employee productivity
    const productivity = turnover / employees;
    if (productivity < 0.05) {
        analysisHtml += `<li>⚠️ <span>Employee productivity is low (${productivity.toFixed(2)} Cr/employee).</span></li>`;
    } else {
        analysisHtml += `<li>✅ <span>Employee productivity is stable (${productivity.toFixed(2)} Cr/employee).</span></li>`;
    }

    analysisHtml += '</ul>';
    if(detailsBox) detailsBox.innerHTML = analysisHtml;
}

function toggleEfficiencyDetails() {
    const box = document.getElementById('efficiency-details');
    if (!box) return;
    if (box.style.display === 'none') {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
}

function renderUserTable(data) {
    const tbody = document.getElementById('userTableBody');
    tbody.innerHTML = '';
    
    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" class="text-center" style="padding:30px!important; font-style:italic;">No past records found. Enter your first data log below.</td></tr>`;
        return;
    }
    
    // Reverse to show latest first
    const reversedData = [...data].reverse();
    
    reversedData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${new Date(row.timestamp).toLocaleString()}</td>
            <td>&#8377; ${parseFloat(row.investment).toFixed(2)}</td>
            <td>${row.employees}</td>
            <td>${parseInt(row.water).toLocaleString()}</td>
            <td>${parseInt(row.power).toLocaleString()}</td>
            <td>&#8377; ${parseFloat(row.turnover).toFixed(2)}</td>
            <td>${row.csrName || '-'}</td>
            <td>&#8377; ${parseFloat(row.csrAmount || 0).toFixed(2)}</td>
            <td><small>${row.companyName}</small></td>
        `;
        tbody.appendChild(tr);
    });
}

let currentChartMetric = 'power';

function updateChartMetric(metric) {
    currentChartMetric = metric;
    
    // Update active button state
    document.querySelectorAll('.chart-btn').forEach(btn => {
        if(btn.dataset.metric === metric) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Refresh data using the current user's data
    const userData = sipcotData.filter(d => d.username === currentUser.username);
    updateChartData(userData);
}

function updateChartData(data) {
    if (!userProgressChartInstance) return;
    
    const chartData = data.slice(-6);
    const labels = chartData.map(d => new Date(d.timestamp).toLocaleDateString());
    
    let chartValues = [];
    let label = '';
    let yAxisLabel = '';

    switch(currentChartMetric) {
        case 'water':
            chartValues = chartData.map(d => d.water);
            label = 'Water Usage (L/Day)';
            yAxisLabel = 'Liters / Day';
            break;
        case 'power':
            chartValues = chartData.map(d => d.power);
            label = 'Power Usage (kWh)';
            yAxisLabel = 'kWh';
            break;
        case 'investment':
            chartValues = chartData.map(d => d.investment);
            label = 'Investment (Cr)';
            yAxisLabel = 'Crores (₹)';
            break;
        case 'employees':
            chartValues = chartData.map(d => d.employees);
            label = 'Employees';
            yAxisLabel = 'Count';
            break;
    }

    userProgressChartInstance.data.labels = labels.length > 0 ? labels : ['No Data'];
    userProgressChartInstance.data.datasets[0].data = chartValues.length > 0 ? chartValues : [0];
    userProgressChartInstance.data.datasets[0].label = label;
    
    // Dynamically update axes titles
    if (!userProgressChartInstance.options.scales.y.title) {
        userProgressChartInstance.options.scales.y.title = {};
    }
    userProgressChartInstance.options.scales.y.title.display = true;
    userProgressChartInstance.options.scales.y.title.text = yAxisLabel;
    
    if (!userProgressChartInstance.options.scales.x.title) {
        userProgressChartInstance.options.scales.x.title = {};
    }
    userProgressChartInstance.options.scales.x.title.display = true;
    userProgressChartInstance.options.scales.x.title.text = 'Time (Date/Entries)';

    userProgressChartInstance.update();
    
    // Update intelligent insights
    updateChartInsight(chartData);
}

function updateChartInsight(chartData) {
    const msgBox = document.getElementById('chart-insight-msg');
    if (!msgBox) return;

    if (chartData.length === 0) {
        msgBox.style.display = 'none';
        return;
    }

    msgBox.style.display = 'flex';
    msgBox.className = 'insight-box'; // reset classes

    const latest = chartData[chartData.length - 1];
    const prev = chartData.length > 1 ? chartData[chartData.length - 2] : null;

    let msg = "";
    let statusClass = "info";

    switch(currentChartMetric) {
        case 'water': {
            const w = parseFloat(latest.water);
            if (w > 15000) {
                msg = "⚠️ High resource consumption detected. Consider optimizing usage.";
                statusClass = "warning";
            } else if (w > 5000) {
                msg = "ℹ️ Usage is within normal range.";
                statusClass = "info";
            } else {
                msg = "✅ Good efficiency. Resource usage is well managed.";
                statusClass = "success";
            }
            break;
        }
        case 'power': {
            const p = parseFloat(latest.power);
            if (p > 50000) {
                msg = "⚠️ High resource consumption detected. Consider optimizing usage.";
                statusClass = "warning";
            } else if (p > 10000) {
                msg = "ℹ️ Usage is within normal range.";
                statusClass = "info";
            } else {
                msg = "✅ Good efficiency. Resource usage is well managed.";
                statusClass = "success";
            }
            break;
        }
        case 'investment': {
            if (prev) {
                const diff = parseFloat(latest.investment) - parseFloat(prev.investment);
                if (diff >= 0) {
                    msg = "📈 Investment growth is positive.";
                    statusClass = "success";
                } else {
                    msg = "⚠️ Investment drop observed.";
                    statusClass = "warning";
                }
            } else {
                msg = "📈 Investment tracked.";
                statusClass = "info";
            }
            break;
        }
        case 'employees': {
            if (prev) {
                const diff = parseInt(latest.employees) - parseInt(prev.employees);
                if (diff >= 0) {
                    msg = "✅ Workforce is stable.";
                    statusClass = "success";
                } else {
                    msg = "⚠️ Employee count is reducing.";
                    statusClass = "warning";
                }
            } else {
                msg = "✅ Workforce is stable.";
                statusClass = "info";
            }
            break;
        }
    }

    msgBox.classList.add(statusClass);
    msgBox.innerHTML = `<span>${msg}</span>`;
}

// --- ADMIN DASHBOARD LOGIC ---
let adminProgressChartInstance = null;
let latestAdminEntries = [];
let currentAdminChartMode = 'power';
let globalCompanyRanks = [];

function saveAdminGoals(e) {
    if(e) e.preventDefault();
    const maxWater = document.getElementById('adminMaxWater').value;
    const maxPower = document.getElementById('adminMaxPower').value;
    const goals = { maxWater: parseFloat(maxWater) || 15000, maxPower: parseFloat(maxPower) || 50000 };
    localStorage.setItem('sipcot_admin_goals', JSON.stringify(goals));
    alert("Safety Limits Enforced Successfully!");
    refreshAdminDashboardData();
}

function openDrilldownModal(username) {
    const dataObj = globalCompanyRanks.find(c => c.username === username);
    if(!dataObj) return;

    document.getElementById('modalCompanyName').innerText = dataObj.companyName;
    document.getElementById('modalSustainabilityScore').innerText = dataObj.score + '/100';
    document.getElementById('modalWaterEff').innerText = dataObj.waterEff + '%';
    document.getElementById('modalPowerEff').innerText = dataObj.powerEff + '%';
    document.getElementById('modalRoiEff').innerText = dataObj.roi + '%';

    const historyTbody = document.getElementById('modalHistoryBody');
    historyTbody.innerHTML = '';
    
    // Sort chronological normally
    const history = sipcotData.filter(d => d.username === username).reverse();
    history.forEach(row => {
        historyTbody.innerHTML += `<tr>
            <td>${new Date(row.timestamp).toLocaleDateString()}</td>
            <td>${parseFloat(row.investment).toFixed(2)}</td>
            <td>${row.employees}</td>
            <td>${parseInt(row.water).toLocaleString()}</td>
            <td>${parseInt(row.power).toLocaleString()}</td>
            <td>${parseFloat(row.turnover).toFixed(2)}</td>
        </tr>`;
    });

    document.getElementById('drilldownModal').style.display = 'block';
}

function closeDrilldownModal() {
    document.getElementById('drilldownModal').style.display = 'none';
}

function setAdminChartMode(mode) {
    currentAdminChartMode = mode;
    
    // Update active button classes
    document.querySelectorAll('[data-admin-mode]').forEach(btn => {
        if(btn.dataset.adminMode === mode) {
            btn.classList.add('active');
            // reset style trick purely for 'company_view' highlights
            if (mode === 'company_view') {
                btn.style.backgroundColor = 'var(--brand-blue)';
                btn.style.color = 'white';
            } else {
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }
        } else {
            btn.classList.remove('active');
            if (btn.dataset.adminMode === 'company_view') {
                btn.style.backgroundColor = 'transparent';
                btn.style.color = 'var(--brand-blue)';
            }
        }
    });

    const selectorContainer = document.getElementById('admin-company-selector-container');
    if (mode === 'company_view') {
        selectorContainer.style.display = 'block';
    } else {
        selectorContainer.style.display = 'none';
    }

    updateAdminChart();
}

function initAdminDashboard() {
    refreshAdminDashboardData();
}

function refreshAdminDashboardData() {
    // 1. Get latest entries per company
    const latestEntriesMap = new Map();
    if(sipcotData) {
        sipcotData.forEach(d => {
            // Assuming data is chronological, last seen is latest
            latestEntriesMap.set(d.username, d);
        });
    }

    latestAdminEntries = Array.from(latestEntriesMap.values());
    
    // Efficiency calculation helper
    function getEfficiency(turnover, power) {
        if (power == 0) return "Average";
        const ratio = parseFloat(turnover) / (parseFloat(power) / 1000);
        if (ratio > 1.5) return "Good";
        if (ratio < 0.5) return "Poor";
        return "Average";
    }

    // 2. Summary stats
    let totalCompanies = latestAdminEntries.length;
    let totalInvestment = 0;
    let totalPower = 0;
    
    // Read Admin Goals (Step 8)
    const activeGoals = JSON.parse(localStorage.getItem('sipcot_admin_goals')) || { maxWater: 15000, maxPower: 50000 };
    const goalWatIn = document.getElementById('adminMaxWater');
    const goalPowIn = document.getElementById('adminMaxPower');
    if(goalWatIn) goalWatIn.value = activeGoals.maxWater;
    if(goalPowIn) goalPowIn.value = activeGoals.maxPower;

    let companyRanks = [];
    let totalCsrSpending = 0;
    let totalCsrPeople = 0;
    let anomaliesHtml = '';
    let predictionsHtml = '';
    let alertsHtml = '';
    let goodCount = 0;
    let poorCount = 0;

    // Isolate histories per company
    const allCompaniesDict = {};
    if (sipcotData) {
        sipcotData.forEach(d => {
            if (!allCompaniesDict[d.username]) allCompaniesDict[d.username] = [];
            allCompaniesDict[d.username].push(d);
        });
    }

    Object.keys(allCompaniesDict).forEach(uname => {
        const history = allCompaniesDict[uname];
        const latest = history[history.length - 1]; // Guaranteed to exist via iteration

        // Core Admin Stat Iteration
        totalInvestment += parseFloat(latest.investment || 0);
        totalPower += parseFloat(latest.power || 0);
        
        let eff = getEfficiency(latest.turnover, latest.power);
        if (eff === "Poor") poorCount++;
        if (eff === "Good") goodCount++;

        // Alerts & Smart Suggestions (Step 4 & 8)
        if (parseFloat(latest.water) > activeGoals.maxWater) {
            alertsHtml += `<div class="alert alert-warning" style="margin-bottom:8px;"><strong>⚠️ Goal Exceeded (${latest.companyName}):</strong> Water > ${activeGoals.maxWater}. <em>Suggestion: Implement immediate leak checks & reduction limits.</em></div>`;
        }
        if (parseFloat(latest.power) > activeGoals.maxPower) {
            alertsHtml += `<div class="alert alert-danger" style="margin-bottom:8px;"><strong>⚠️ Goal Exceeded (${latest.companyName}):</strong> Power > ${activeGoals.maxPower}. <em>Suggestion: Switch off non-critical lines during peak load.</em></div>`;
        }
        if (eff === "Poor") {
            const sInvest = parseFloat(latest.investment||1);
            const sTurn = parseFloat(latest.turnover||0);
            if((sTurn / sInvest) < 0.5) {
                alertsHtml += `<div class="alert alert-danger" style="margin-bottom:8px;"><strong>Poor Efficiency (${latest.companyName}):</strong> ROI is very low. <em>Suggestion: Improve output efficiency and evaluate raw costs.</em></div>`;
            } else {
                alertsHtml += `<div class="alert alert-danger" style="margin-bottom:8px;"><strong>Poor Efficiency (${latest.companyName}):</strong> High resource drain per output. <em>Suggestion: Conduct immediate energy audit.</em></div>`;
            }
        }

        // --- Accumulate Global CSR (Step 7) ---
        totalCsrSpending += parseFloat(latest.csrAmount || 0);
        totalCsrPeople += parseInt(latest.csrPeople || 0);

        // --- Anomaly Detection (Step 5) ---
        if (history.length > 1) {
            const prev = history[history.length - 2];
            const curPower = parseFloat(latest.power || 0);
            const prevPower = parseFloat(prev.power || 0);
            if (prevPower > 0 && curPower > (prevPower * 2)) {
                anomaliesHtml += `<div style="color: #e74c3c; margin-bottom: 5px;">⚠️ <strong>${latest.companyName}</strong>: Unusual spike in Power Usage (${curPower.toLocaleString()} kWh)</div>`;
            }
            const curWater = parseFloat(latest.water || 0);
            const prevWater = parseFloat(prev.water || 0);
            if (prevWater > 0 && curWater > (prevWater * 2)) {
                anomaliesHtml += `<div style="color: #e74c3c; margin-bottom: 5px;">⚠️ <strong>${latest.companyName}</strong>: Unusual spike in Water Usage (${curWater.toLocaleString()} L)</div>`;
            }
        }

        // --- Predictive Analysis (Step 6) ---
        if (history.length >= 3) {
            const p1 = parseFloat(history[history.length-1].power || 0);
            const p2 = parseFloat(history[history.length-2].power || 0);
            const p3 = parseFloat(history[history.length-3].power || 0);
            const predPower = ((p1 + p2 + p3) / 3).toFixed(0);
            predictionsHtml += `<div style="color: var(--brand-blue); margin-bottom: 5px;">📈 <strong>${latest.companyName}</strong> predicted next power: ${predPower} kWh</div>`;
        }

        // --- Calculate Advanced Efficiency / Sustainability (Steps 1, 2) ---
        const waterVal = parseFloat(latest.water || 0);
        const powerVal = parseFloat(latest.power || 0);
        const investVal = parseFloat(latest.investment || 1); // fallback to 1 to prevent /0
        const turnVal = parseFloat(latest.turnover || 0);
        const emps = parseInt(latest.employees || 1);
        const csrAmt = parseFloat(latest.csrAmount || 0);
        const csrBens = parseFloat(latest.csrPeople || 0);

        const wpe = waterVal / emps;
        let waterScore = 0;
        if (wpe < 10) waterScore = 100 - (wpe/10 * 20); 
        else if (wpe <= 20) waterScore = 80 - ((wpe-10)/10 * 30);
        else waterScore = Math.max(0, 50 - ((wpe-20)/20 * 50));

        let ppt = turnVal > 0 ? (powerVal / turnVal) : (powerVal > 0 ? 20 : 0);
        let powerScore = 0;
        if (ppt < 5) powerScore = 100 - (ppt/5 * 20);
        else if (ppt <= 10) powerScore = 80 - ((ppt-5)/5 * 30);
        else powerScore = Math.max(0, 50 - ((ppt-10)/10 * 50));

        let csrRatio = turnVal > 0 ? (csrAmt / turnVal) : 0;
        let csrBase = 0;
        if(csrRatio > 0.1) csrBase = 100;
        else if(csrRatio >= 0.05) csrBase = 75;
        else if(csrRatio > 0) csrBase = 50;
        let peopleFactor = Math.min(100, (csrBens / 100) * 100);
        let csrScoreObj = (csrBase * 0.7) + (peopleFactor * 0.3);

        const sustainabilityScore = ((waterScore + powerScore + csrScoreObj) / 3).toFixed(0);

        companyRanks.push({
            username: uname,
            companyName: latest.companyName,
            score: parseInt(sustainabilityScore),
            waterEff: waterScore.toFixed(0),
            powerEff: powerScore.toFixed(0),
            roi: ((turnVal / investVal) * 100).toFixed(0)
        });
    });

    globalCompanyRanks = companyRanks;

    if(!anomaliesHtml) anomaliesHtml = '<p style="font-style:italic;" class="text-center text-muted">No anomalies detected.</p>';
    if(!predictionsHtml) predictionsHtml = '<p style="font-style:italic;" class="text-center text-muted">Awaiting more data for predictions (Need 3+ entries)</p>';

    document.getElementById('admin-anomalies-list').innerHTML = anomaliesHtml;
    document.getElementById('admin-predictions-list').innerHTML = predictionsHtml;

    // --- Rankings Configuration (Step 3) ---
    companyRanks.sort((a, b) => b.score - a.score);
    const topUl = document.getElementById('admin-top-ranking');
    const botUl = document.getElementById('admin-bottom-ranking');
    if(topUl) topUl.innerHTML = ''; 
    if(botUl) botUl.innerHTML = '';

    if (companyRanks.length === 0) {
        if(topUl) topUl.innerHTML = '<li>No data</li>';
        if(botUl) botUl.innerHTML = '<li>No data</li>';
    } else {
        const top3 = companyRanks.slice(0, 3);
        const bot3 = companyRanks.slice().reverse().slice(0, 3);
        
        top3.forEach((c, idx) => {
            if(topUl) topUl.innerHTML += `<li style="margin-bottom:8px; padding-bottom:5px; border-bottom:1px solid #eee;"><strong>#${idx+1}</strong> ${c.companyName} <span class="badge badge-good" style="float:right;">${c.score}</span></li>`;
        });
        bot3.forEach((c, idx) => {
            if(botUl) botUl.innerHTML += `<li style="margin-bottom:8px; padding-bottom:5px; border-bottom:1px solid #eee;"><strong>#${companyRanks.length - Math.min(2,idx)}</strong> ${c.companyName} <span class="badge badge-poor" style="float:right;">${c.score}</span></li>`;
        });
    }

    // --- Regional CSR Impact Box (Step 7) ---
    const adminCsrTotalNode = document.getElementById('admin-csr-total');
    const adminCsrPeopleNode = document.getElementById('admin-csr-people');
    if(adminCsrTotalNode) adminCsrTotalNode.innerText = totalCsrSpending.toFixed(2) + ' Cr';
    if(adminCsrPeopleNode) adminCsrPeopleNode.innerText = totalCsrPeople.toLocaleString();
    let globalCsrImpact = "Evaluating...";
    let csrClass = "badge-average";
    if (totalCsrSpending > 5) { globalCsrImpact = "High Social Impact"; csrClass = "badge-good"; }
    else if (totalCsrSpending > 0.5) { globalCsrImpact = "Moderate Impact"; csrClass = "badge-average"; }
    else { globalCsrImpact = "Low Impact"; csrClass = "badge-poor"; }
    
    const impMsg = document.getElementById('admin-csr-impact-msg');
    if(impMsg) {
        impMsg.innerText = globalCsrImpact;
        impMsg.className = `badge ${csrClass} mt-2`;
    }

    // Core Admin Summary Nodes Update
    document.getElementById('admin-stat-companies').innerText = totalCompanies;
    document.getElementById('admin-stat-investment').innerText = totalInvestment.toFixed(2);
    document.getElementById('admin-stat-power').innerText = totalPower.toLocaleString();
    
    let avgEff = "N/A";
    if (totalCompanies > 0) {
        if (goodCount > poorCount) avgEff = "Good";
        else if (poorCount > goodCount) avgEff = "Poor";
        else avgEff = "Average";
    }
    document.getElementById('admin-stat-efficiency').innerText = avgEff;
    
    document.getElementById('admin-dashboard-alerts').innerHTML = alertsHtml;

    // 3. Render Table
    const tbody = document.getElementById('adminTableBody');
    tbody.innerHTML = '';
    
    if (latestAdminEntries.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center" style="padding:30px!important; font-style:italic;">No company data available.</td></tr>`;
    } else {
        latestAdminEntries.forEach(row => {
            const eff = getEfficiency(row.turnover, row.power);
            let badgeClass = eff === "Good" ? "badge-good" : (eff === "Poor" ? "badge-poor" : "badge-average");
            
            const tr = document.createElement('tr');
            tr.onclick = () => openDrilldownModal(row.username);
            tr.style.cursor = 'pointer';
            tr.innerHTML = `
                <td><strong>${row.companyName}</strong></td>
                <td>&#8377; ${parseFloat(row.investment).toFixed(2)}</td>
                <td>${row.employees}</td>
                <td>${parseInt(row.water).toLocaleString()}</td>
                <td>${parseInt(row.power).toLocaleString()}</td>
                <td>&#8377; ${parseFloat(row.turnover).toFixed(2)}</td>
                <td><span class="badge ${badgeClass}">${eff}</span></td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Populate the dropdown
    const selectBox = document.getElementById('adminCompanySelect');
    if (selectBox) {
        selectBox.innerHTML = '';
        latestAdminEntries.forEach(entry => {
            const opt = document.createElement('option');
            opt.value = entry.username;
            opt.innerText = entry.companyName;
            selectBox.appendChild(opt);
        });
    }

    // --- System Audit Log Population (Step 10) ---
    const auditTbody = document.getElementById('adminAuditTableBody');
    if (auditTbody && sipcotData) {
        auditTbody.innerHTML = '';
        // Sort entire dataset sequentially descending
        const latestAudits = sipcotData.slice().sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 15);
        if(latestAudits.length === 0) auditTbody.innerHTML = '<tr><td colspan="3" class="text-center font-italic">No audit records found</td></tr>';
        
        latestAudits.forEach(row => {
            auditTbody.innerHTML += `<tr>
                <td>${new Date(row.timestamp).toLocaleString()}</td>
                <td><strong>${row.username}</strong><br><small>${row.companyName}</small></td>
                <td>Data Log Submitted<br><small class="text-muted">Invest: ${parseFloat(row.investment).toFixed(2)}Cr | Power: ${parseInt(row.power).toLocaleString()}kWh | Water: ${parseInt(row.water).toLocaleString()}L</small></td>
            </tr>`;
        });
    }

    // 4. Render Chart
    updateAdminChart();
}

function updateAdminChart() {
    const ctx = document.getElementById('adminProgressChart');
    if (!ctx) return;
    if (typeof Chart === 'undefined') return;

    let labels = [];
    let datasets = [];
    let xAxisTitle = '';
    let yAxisTitle = 'Values';

    if (currentAdminChartMode !== 'company_view') {
        // MODE 1: Metric Comparison (One metric, all companies)
        labels = latestAdminEntries.map(d => d.companyName);
        xAxisTitle = 'Companies';

        let dataValues = [];
        let labelName = '';
        let bgColor = '';

        switch(currentAdminChartMode) {
            case 'power':
                dataValues = latestAdminEntries.map(d => d.power || 0);
                labelName = 'Power Usage (kWh)';
                bgColor = 'rgba(241, 196, 15, 0.7)';
                yAxisTitle = 'kWh';
                break;
            case 'water':
                dataValues = latestAdminEntries.map(d => d.water || 0);
                labelName = 'Water Usage (L/Day)';
                bgColor = 'rgba(52, 152, 219, 0.7)';
                yAxisTitle = 'Liters / Day';
                break;
            case 'investment':
                dataValues = latestAdminEntries.map(d => d.investment || 0);
                labelName = 'Investment (Cr)';
                bgColor = 'rgba(155, 89, 182, 0.7)';
                yAxisTitle = 'Crores (₹)';
                break;
            case 'turnover':
                dataValues = latestAdminEntries.map(d => d.turnover || 0);
                labelName = 'Turnover (Cr)';
                bgColor = 'rgba(46, 204, 113, 0.7)';
                yAxisTitle = 'Crores (₹)';
                break;
            case 'csr':
                dataValues = latestAdminEntries.map(d => d.csrAmount || 0);
                labelName = 'CSR Spending (Cr)';
                bgColor = 'rgba(230, 126, 34, 0.7)';
                yAxisTitle = 'Crores (₹)';
                break;
        }

        datasets = [{
            label: labelName,
            data: dataValues.length > 0 ? dataValues : [0],
            backgroundColor: bgColor
        }];

    } else {
        // MODE 2: Company View (One company, all metrics)
        const selectBox = document.getElementById('adminCompanySelect');
        const selectedUsername = selectBox ? selectBox.value : null;
        
        const companyData = latestAdminEntries.find(d => d.username === selectedUsername);
        
        labels = ['Power', 'Water', 'Invest(Cr)', 'Turnover(Cr)', 'CSR(Cr)'];
        xAxisTitle = companyData ? companyData.companyName : 'Metrics';
        yAxisTitle = 'Values (Mixed Units)';
        
        let powerVal = companyData ? parseFloat(companyData.power || 0) : 0;
        let waterVal = companyData ? parseFloat(companyData.water || 0) : 0;
        let investVal = companyData ? parseFloat(companyData.investment || 0) : 0;
        let turnVal = companyData ? parseFloat(companyData.turnover || 0) : 0;
        let csrVal = companyData ? parseFloat(companyData.csrAmount || 0) : 0;

        datasets = [{
            label: companyData ? companyData.companyName : 'Selected Company',
            data: [powerVal, waterVal, investVal, turnVal, csrVal],
            backgroundColor: [
                'rgba(241, 196, 15, 0.7)', // Power
                'rgba(52, 152, 219, 0.7)', // Water
                'rgba(155, 89, 182, 0.7)', // Invest
                'rgba(46, 204, 113, 0.7)', // Turn
                'rgba(230, 126, 34, 0.7)'  // CSR
            ]
        }];
    }

    if (!adminProgressChartInstance) {
        adminProgressChartInstance = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: labels.length > 0 ? labels : ['No Data'],
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        title: { display: true, text: xAxisTitle }
                    },
                    y: { 
                        beginAtZero: true,
                        title: { display: true, text: yAxisTitle }
                    }
                }
            }
        });
    } else {
        adminProgressChartInstance.data.labels = labels.length > 0 ? labels : ['No Data'];
        adminProgressChartInstance.data.datasets = datasets;
        
        if (adminProgressChartInstance.options.scales.x.title) {
            adminProgressChartInstance.options.scales.x.title.text = xAxisTitle;
        }
        if (adminProgressChartInstance.options.scales.y.title) {
            adminProgressChartInstance.options.scales.y.title.text = yAxisTitle;
        }

        adminProgressChartInstance.update();
    }
}

function renderUserChart(data) {
    const ctx = document.getElementById('userProgressChart');
    if (!ctx) return;
    
    // Safety check just in case the Chart.js CDN was blocked by a firewall
    if (typeof Chart === 'undefined') {
        console.warn("Chart.js failed to load. Skipping chart render but running the rest of the application safely.");
        return;
    }
    
    if (!userProgressChartInstance) {
        userProgressChartInstance = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: '',
                    data: [],
                    backgroundColor: 'rgba(28, 82, 153, 0.2)',
                    borderColor: 'rgba(28, 82, 153, 1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { 
                        beginAtZero: true,
                        title: { display: true, text: '' }
                    },
                    x: {
                        title: { display: true, text: 'Time (Date/Entries)' }
                    }
                }
            }
        });
    }
    
    updateChartData(data);
}

function handleSubmitUserData(e) {
    e.preventDefault();
    
    const investment = document.getElementById('entryInvestment').value;
    const employees = document.getElementById('entryEmployees').value;
    const water = document.getElementById('entryWater').value;
    const power = document.getElementById('entryPower').value;
    const turnover = document.getElementById('entryTurnover').value;
    
    // CSR Fields
    const csrName = document.getElementById('entryCsrName').value;
    const csrAmount = document.getElementById('entryCsrAmount').value || 0;
    const csrPeople = document.getElementById('entryCsrPeople').value || 0;
    const csrDesc = document.getElementById('entryCsrDesc').value;
    
    if (investment < 0 || employees < 0 || water < 0 || power < 0 || turnover < 0) {
        alert("System Error: Check values, negatives are not allowed.");
        return;
    }

    const newData = {
        id: Date.now(),
        username: currentUser.username,
        companyName: currentUser.companyName,
        investment: investment,
        employees: employees,
        water: water,
        power: power,
        turnover: turnover,
        csrName: csrName,
        csrAmount: csrAmount,
        csrPeople: csrPeople,
        csrDesc: csrDesc,
        timestamp: new Date().toISOString()
    };
    
    sipcotData.push(newData);
    localStorage.setItem('sipcot_data', JSON.stringify(sipcotData));
    
    document.getElementById('userDataForm').reset();
    document.getElementById('entryCompanyName').value = currentUser.companyName;
    
    refreshUserDashboardData();
}

// INITIALIZE: Connect Event Listeners and Show default views
document.addEventListener('DOMContentLoaded', () => {
    // 0. Language Enforcement
    const savedLang = localStorage.getItem('sipcot_lang') || 'en';
    changeLanguage(savedLang);

    // 1. Initial Font Size
    applyFontSize();
    
    // 2. Connect Forms
    const loginFormElement = document.getElementById('loginForm');
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', login);
    }
    
    const udFormElement = document.getElementById('userDataForm');
    if (udFormElement) {
        udFormElement.addEventListener('submit', handleSubmitUserData);
    }
    
    // Admin Goals Form (Step 8)
    const adminGoalsFormElement = document.getElementById('adminGoalsForm');
    if (adminGoalsFormElement) {
        adminGoalsFormElement.addEventListener('submit', saveAdminGoals);
    }

    // 4. User Session Routing
    if (currentUser) {
        document.getElementById('nav-welcome-msg').innerText = `Welcome, ${currentUser.companyName}`;
        document.getElementById('user-controls').style.display = 'block';
        document.getElementById('nav-login-btn').style.display = 'none';
        
        if (currentUser.role === 'admin') {
            initAdminDashboard();
            showView('admin-dashboard-view');
        } else {
            initUserDashboard();
            showView('user-dashboard-view');
        }
    } else {
        showView('public-view');
    }

    // 5. Scroll Interaction Logic (Step 2, 3, 4)
    document.querySelectorAll('.scroll-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // If currently hidden (e.g. role-selection-view), revert to public-view
            if(document.getElementById('public-view').style.display === 'none') {
                 showView('public-view');
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observerOptions = { root: null, rootMargin: '-20% 0px -40% 0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Highlight corresponding nav link
                document.querySelectorAll('.scroll-link').forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('href') === '#' + entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-section').forEach(section => {
        observer.observe(section);
    });
});
