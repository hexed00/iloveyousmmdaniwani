    const floatChars = ['♡','🎃','✦','🦇','✧','♥','⋆'];
    const floaters = document.getElementById('floaters');
    for (let i = 0; i < 18; i++) {
      const el = document.createElement('div');
      el.className = 'floater';
      el.textContent = floatChars[Math.floor(Math.random() * floatChars.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.animationDuration = (14 + Math.random() * 16) + 's';
      el.style.animationDelay = (Math.random() * 12) + 's';
      el.style.fontSize = (14 + Math.random() * 14) + 'px';
      floaters.appendChild(el);
    }

    const START_DATE = "2025-12-03T00:00:00";
    function updateCounter() {
      const start = new Date(START_DATE);
      const now = new Date();
      const ms = Math.max(0, now - start);
      const days = Math.floor(ms / 86400000);
      const hours = Math.floor(ms / 3600000) % 24;
      const minutes = Math.floor(ms / 60000) % 60;
      const seconds = Math.floor(ms / 1000) % 60;
      document.getElementById('days').textContent = days.toLocaleString();
      document.getElementById('timeTogether').textContent =
        days.toLocaleString() + ' days · ' +
        String(hours).padStart(2,'0') + ':' +
        String(minutes).padStart(2,'0') + ':' +
        String(seconds).padStart(2,'0');
    }
    setInterval(updateCounter, 1000);
    updateCounter();

    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const reaction = document.getElementById('reaction');
    let noClicks = 0;
    const noLines = [
      "are you sure? 🥺", "really?? 😭", "think again... ♡",
      "the heart says yes...", "dani is waiting... 👀", "okay, you're making me blush 😭💕"
    ];
    noBtn.addEventListener('click', () => {
      noClicks++;
      noBtn.textContent = noLines[Math.min(noClicks - 1, noLines.length - 1)];
      reaction.textContent = noClicks < 4
        ? "hmm... i don't think that was the answer you meant. ♡"
        : "okay okay... i'll give you one more chance. 💗";
      noBtn.classList.add('wiggle');
      setTimeout(() => noBtn.classList.remove('wiggle'), 450);
      if (noClicks >= 6) {
        noBtn.textContent = "fine... YES ♡";
        noBtn.onclick = () => yesBtn.click();
      }
    });
    yesBtn.addEventListener('click', () => {
      reaction.textContent = "i knew it. then come a little closer... i have something for you. 💕";
      yesBtn.textContent = "♡ forever & always ♡";
      noBtn.style.display = 'none';
      yesBtn.classList.add('celebrate');
      burstHearts();
    });
    function burstHearts() {
      for (let i = 0; i < 20; i++) {
        const h = document.createElement('span');
        h.className = 'burst-heart';
        h.textContent = ['♥','♡','✦','🎃'][Math.floor(Math.random()*4)];
        h.style.setProperty('--x', ((Math.random()-.5)*280) + 'px');
        h.style.setProperty('--y', (-80 - Math.random()*180) + 'px');
        h.style.setProperty('--r', ((Math.random()*80-40)) + 'deg');
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 1400);
      }
    }

    document.getElementById('songBtn').addEventListener('click', () => {
      document.getElementById('songPanel').classList.toggle('open');
    });

    ['secret1','secret2','secret3'].forEach((id, i) => {
      document.getElementById(id).addEventListener('click', () => {
        document.getElementById('modal' + (i+1)).classList.add('show');
      });
    });
    document.querySelectorAll('.close').forEach(btn => {
      btn.addEventListener('click', () => document.getElementById(btn.dataset.close).classList.remove('show'));
    });
    document.querySelectorAll('.modal-overlay').forEach(m => {
      m.addEventListener('click', e => { if (e.target === m) m.classList.remove('show'); });
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('show'));
    });

document.getElementById('halloweenSecret')?.addEventListener('click', () => {
  document.getElementById('modalHalloween').classList.add('show');
});
