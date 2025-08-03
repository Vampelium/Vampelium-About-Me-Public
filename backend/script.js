function showLanguageInfo(title, description) {
    document.getElementById('language-title').innerText = title;
    document.getElementById('language-description').innerText = description;
    document.getElementById('language-popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('language-popup').style.display = 'none';
}
// 🚨 Disable Keyboard Shortcuts for DevTools (F12, Ctrl+Shift+I/J/C/U)
document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || 
        (e.ctrlKey && e.key === "U") // Disable View Source
    ) {
        e.preventDefault();
        alert("No sneaky business, honey! 🔒");
    }
});

// 🚨 Disable Right-Click to Prevent Inspect Element
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Nope! You can't inspect me! 💖");
});

// 🚨 Detect Console Open and Redirect Them Away
(function() {
    let devtools = { open: false, orientation: null };
    const threshold = 160;
    
    setInterval(function() {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
            devtools.open = true;
            alert("Hey! Stop looking under my skirt! 🔒👀");
            window.location.href = "https://www.google.com"; // Redirect them away!
        } else {
            devtools.open = false;
        }
    }, 1000);
})();

// 🚨 Detect Console Open and Spam Messages
setInterval(() => {
    let start = performance.now();
    debugger;
    let end = performance.now();
    
    if (end - start > 10) {
        console.clear();
        console.log("%cStop right there! 🚨", "font-size: 30px; color: red; font-weight: bold;");
    }
}, 1000);

// 🚨 Freeze the Page When DevTools is Opened
(function() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            alert("Hey! Are you hacking me? 💀");
            while (true) {} // Freeze the page
        }
    });
    console.log(element);
})();

// 🚨 Spam "debugger;" to Annoy Anyone Inspecting
setInterval(() => {
    debugger; // Forces a pause in DevTools
}, 100);

// UI Update for Level Box
function showLevelBox() {
    document.getElementById('levelBox').style.display = 'block';
    document.getElementById('currentLevel').textContent = userLevel;
    document.getElementById('currentXP').textContent = userXP;
    let progress = Math.min((userXP % 100) / 100 * 100, 100);
    document.getElementById('levelFill').style.width = progress + "%";
}

// Call after XP gain
function updateLevel() {
    if (userXP >= userLevel * 100) {
        userLevel++;
        alert(`Level up! You're now Level ${userLevel}! Keep slaying, coding queen!`);
    }
    showLevelBox();
}

<script>
  const messages = {
    0: "Sunday Funday! Time to recharge, angel.",
    1: "Monday Motivation! Start strong, gorgeous!",
    2: "Tuesday Thoughts: You’re a coding queen!",
    3: "Work-it Wednesday! Slay your tasks!",
    4: "Thriving Thursday! Keep sparkling!",
    5: "Fabulous Friday! Wrap it up with glam!",
    6: "Weekend Vibes: Chill, babe — you earned it!"
  };

  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const messageEl = document.getElementById('weeklyMessage');
  messageEl.innerText = messages[today];
</script>


