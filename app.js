const BERT_IMG = 'data:image/png;base64,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';
document.querySelectorAll('#loginBertImg,#headerBertImg,#welcomeBertImg').forEach(el => el.src = BERT_IMG);

const SUPABASE_URL = 'https://xkixxhcuzkczpgrkzdzu.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhraXh4aGN1emtjenBncmt6ZHp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4NDU5NTUsImV4cCI6MjA4ODQyMTk1NX0.qBJPoWvXoCX0o_FoOQRh8Y5TnQmSNJoEfcWHwtrTPXk';
const ADMIN_EMAIL = 'sandra.gall@hak-reutte.ac.at';
const WEEKLY_LIMIT = 20;

let currentToken = null;
let currentUser = null;
let schultyp = 'HAK';
let currentTopic = 'jahresabschluss';
let conversationHistory = [];
let cachedCount = 0;

async function sbFetch(path, method, body, token) {
  const res = await fetch(SUPABASE_URL + path, {
    method, headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + (token || SUPABASE_KEY),
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  });
  return res.json();
}

function isAdmin() {
  return currentUser && currentUser.email &&
    currentUser.email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
}

function vornameAusEmail(email) {
  const local = email.split('@')[0];           // vorname.nachname
  const first = local.split('.')[0];           // vorname
  return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
}

function getTageszeit() {
  const h = new Date().getHours();
  if (h >= 5 && h < 10) return 'morgen';
  if (h >= 10 && h < 13) return 'vormittag';
  if (h >= 13 && h < 15) return 'mittag';
  if (h >= 15 && h < 18) return 'nachmittag';
  if (h >= 18 && h < 22) return 'abend';
  return 'nacht';
}

function getBegruessung(vorname) {
  const t = getTageszeit();
  const name = vorname ? ', ' + vorname : '';
  const map = {
    morgen:     'Guten Morgen' + name + '! Früh am Start – das gefällt mir! 🌅',
    vormittag:  'Hallo' + name + '! Schön, dass du vorbeischaust. 😊',
    mittag:     'Hey' + name + '! Mittagspause zum Lernen nutzen – sehr vorbildlich! 💪',
    nachmittag: 'Hallo' + name + '! Bereit für eine Runde RW? 📚',
    abend:      'Guten Abend' + name + '! Noch schnell ein bisschen lernen? 🌙',
    nacht:      'Hey' + name + '! So spät noch am Lernen? Respekt – aber geh auch irgendwann schlafen! 😄'
  };
  return map[t];
}

function showApp() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('appHeader').style.display = '';
  document.getElementById('appMain').style.display = '';
}

async function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  const btn = document.getElementById('loginBtn');
  if (!email || !pass) { errEl.style.color='#f87171'; errEl.textContent='Bitte E-Mail und Passwort eingeben!'; return; }
  errEl.style.color='#c8a96e'; errEl.textContent='Verbinde...';
  btn.disabled=true; btn.textContent='Bitte warten...';
  try {
    const res = await fetch(SUPABASE_URL + '/auth/v1/token?grant_type=password', {
      method:'POST',
      headers:{'apikey':SUPABASE_KEY,'Authorization':'Bearer '+SUPABASE_KEY,'Content-Type':'application/json'},
      body:JSON.stringify({email,password:pass})
    });
    const data = await res.json();
    btn.disabled=false; btn.textContent='Anmelden';
    if (data.access_token) {
      currentToken=data.access_token; currentUser=data.user;
      const vorname = vornameAusEmail(email);
      sessionStorage.setItem('bb_session',JSON.stringify({token:data.access_token,email,vorname}));
      errEl.style.color='#34d399'; errEl.textContent='Hallo ' + vorname + '! 👋';
      if(isAdmin()) document.getElementById('adminMenuBtn').style.display='flex';
      setTimeout(()=>{ showApp(); initWelcome(vorname); },800);
      loadRequestCount().then(updateCounterDisplay);
    } else {
      errEl.style.color='#f87171';
      errEl.textContent = data.error_description || data.msg || 'E-Mail oder Passwort falsch';
    }
  } catch(e) {
    btn.disabled=false; btn.textContent='Anmelden';
    errEl.style.color='#f87171'; errEl.textContent='Verbindungsfehler: '+e.message;
  }
}

['loginEmail','loginPassword'].forEach(id => {
  const el = document.getElementById(id);
  if(el) el.addEventListener('keydown', e => { if(e.key==='Enter') doLogin(); });
});

(function restoreSession() {
  try {
    const saved = sessionStorage.getItem('bb_session');
    if (saved) {
      const s = JSON.parse(saved);
      if (s.token && s.email) {
        currentToken=s.token; currentUser={email:s.email};
        showApp();
        if(isAdmin()) document.getElementById('adminMenuBtn').style.display='flex';
        loadRequestCount().then(updateCounterDisplay);
        if(s.vorname) initWelcome(s.vorname);
      }
    }
  } catch(e) {}
})();

function getWeekKey() {
  const now=new Date(), jan1=new Date(now.getFullYear(),0,1);
  const week=Math.ceil(((now-jan1)/86400000+jan1.getDay()+1)/7);
  return now.getFullYear()+'-W'+String(week).padStart(2,'0');
}
function getNextMonday() {
  const d=new Date(), day=d.getDay(), diff=day===0?1:8-day;
  d.setDate(d.getDate()+diff);
  return d.toLocaleDateString('de-AT',{day:'2-digit',month:'2-digit'});
}
async function loadRequestCount() {
  if(!currentUser||!currentToken||isAdmin()) return 0;
  try {
    const data=await sbFetch('/rest/v1/request_counts?user_email=eq.'+encodeURIComponent(currentUser.email)+'&week_key=eq.'+getWeekKey()+'&select=count','GET',null,currentToken);
    cachedCount=(data&&data.length>0)?data[0].count:0; return cachedCount;
  } catch(e){return 0;}
}
async function incrementRequestCount() {
  if(!currentUser||!currentToken||isAdmin()) return;
  const newCount=cachedCount+1;
  try {
    const patched=await sbFetch('/rest/v1/request_counts?user_email=eq.'+encodeURIComponent(currentUser.email)+'&week_key=eq.'+getWeekKey(),'PATCH',{count:newCount},currentToken);
    if(!patched||patched.length===0) await sbFetch('/rest/v1/request_counts','POST',{user_email:currentUser.email,week_key:getWeekKey(),count:1},currentToken);
    cachedCount=newCount;
  } catch(e){}
  updateCounterDisplay();
}
function updateCounterDisplay() {
  const badge=document.getElementById('counterBadge'),text=document.getElementById('counterText');
  if(!badge||!text||!currentUser||isAdmin()) return;
  const remaining=WEEKLY_LIMIT-cachedCount;
  badge.style.display='block';
  if(remaining<=0){text.textContent='0 Anfragen - erneuert am '+getNextMonday();badge.className='counter-badge danger';}
  else{text.textContent=remaining+' / '+WEEKLY_LIMIT+' Anfragen';badge.className=remaining<=5?'counter-badge warning':'counter-badge';}
}
function isLimitReached(){return currentUser&&!isAdmin()&&cachedCount>=WEEKLY_LIMIT;}

async function addUser() {
  const email=document.getElementById('newUserEmail').value.trim();
  const pass=document.getElementById('newUserPass').value;
  const msg=document.getElementById('adminMsg');
  if(!email||pass.length<6){msg.textContent='E-Mail und Passwort (min. 6 Zeichen) angeben!';return;}
  const data=await sbFetch('/auth/v1/admin/users','POST',{email,password:pass,email_confirm:true},currentToken);
  if(data.id){msg.style.color='#34d399';msg.textContent=email+' angelegt!';document.getElementById('newUserEmail').value='';document.getElementById('newUserPass').value='';loadUsers();}
  else{msg.style.color='#f87171';msg.textContent=data.message||JSON.stringify(data);}
}
async function loadUsers() {
  const list=document.getElementById('userList');
  list.innerHTML='<div style="color:var(--text-dim);font-size:0.83rem;">Lade...</div>';
  try {
    const data=await sbFetch('/auth/v1/admin/users?per_page=50','GET',null,currentToken);
    if(!data||!data.users){list.innerHTML='<div style="color:var(--text-dim)">Keine Benutzer.</div>';return;}
    list.innerHTML=data.users.map(u=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 10px;background:var(--bg);border-radius:8px;margin-bottom:5px;font-size:0.83rem;color:var(--text-muted)">`+
      `<span>${u.email}</span>`+(u.email.toLowerCase()!==ADMIN_EMAIL.toLowerCase()?
      `<button onclick="deleteUser('${u.id}','${u.email}')" style="padding:4px 9px;background:#ef4444;color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:0.78rem;">Loeschen</button>`:
      `<span style="color:var(--orange);font-size:0.72rem;">Admin</span>`)+`</div>`).join('');
  } catch(e){list.innerHTML='<div style="color:var(--text-dim)">Fehler.</div>';}
}
async function deleteUser(id,email) {
  if(!confirm('Benutzer '+email+' wirklich loeschen?')) return;
  await sbFetch('/auth/v1/admin/users/'+id,'DELETE',null,currentToken);
  document.getElementById('adminMsg').textContent=email+' geloescht';
  loadUsers();
}
function openAdmin(){document.getElementById('adminPanel').style.display='flex';loadUsers();}
function closeAdmin(){document.getElementById('adminPanel').style.display='none';}

function setSchultyp(typ) {
  schultyp=typ;
  document.getElementById('btnHAK').classList.toggle('active',typ==='HAK');
  document.getElementById('btnHLW').classList.toggle('active',typ==='HLW');
  const ba=document.getElementById('badge-anlage'),bw=document.getElementById('badge-waren');
  if(typ==='HAK'){ba.textContent='3.Kl';ba.className='nav-badge orange';bw.textContent='3.Kl';bw.className='nav-badge orange';}
  else{ba.textContent='';ba.className='nav-badge';bw.textContent='';bw.className='nav-badge';}
}

function toggleSubmenu(el, id) {
  el.classList.toggle('open');
  document.getElementById(id).classList.toggle('open');
}

function navClick(el, topic, message, hidden) {
  document.querySelectorAll('.nav-item').forEach(e=>e.classList.remove('active'));
  el.classList.add('active');
  currentTopic = topic;
  if (hidden) {
    // Send as hidden prompt: don't show in chat, inject directly into conversation
    sendHiddenPrompt(message);
  } else {
    document.getElementById('userInput').value = message;
    sendMessage();
  }
}

async function sendHiddenPrompt(prompt) {
  if (isLimitReached()) return;
  addTyping();
  const systemWithSolutions = buildSystemPrompt();
  try {
    const res = await fetch('https://bilanz-bert-proxy.sandygall1412.workers.dev', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        model:'claude-haiku-4-5-20251001', max_tokens:2000,
        system: systemWithSolutions,
        messages: [...conversationHistory, {role:'user', content: prompt}]
      })
    });
    const data = await res.json(); removeTyping();
    if (data.content && data.content[0]) {
      const reply = data.content[0].text;
      conversationHistory.push({role:'user', content: prompt});
      conversationHistory.push({role:'assistant', content: reply});
      addMsg('bert', renderText(postProcessBertOutput(reply)));
      await incrementRequestCount();
    }
  } catch(e) { removeTyping(); addMsg('bert','<em>Verbindungsfehler</em>'); }
}

let currentVorname = '';

function initWelcome(vorname) {
  currentVorname = vorname || '';
  const greet = getBegruessung(vorname);
  document.getElementById('messages').innerHTML=`
    <div class="welcome-card">
      <div class="bert-avatar"><img src="${BERT_IMG}" alt="Bert"></div>
      <h2>${greet}</h2>
      <p>Egal ob Anlagen, Forderungen, R&uuml;ckstellungen oder Rechnungsabgrenzung &ndash; wir arbeiten uns Schritt f&uuml;r Schritt durch den Jahresabschluss 🙂<br>W&auml;hle oben <strong>HAK</strong> oder <strong>HLW</strong>, dann starten wir.</p>
      <p style="font-size:0.85em;opacity:0.7;">By the way – I speak English too! Just ask! 😎</p>
    </div>`;
}

function clearChat() {
  conversationHistory=[];
  lastFoundExerciseContext='';
  initWelcome(currentVorname);
}

function autoResize(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,120)+'px';}
function handleKey(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();}}

function buildSystemPrompt() {
  const isHLW=schultyp==='HLW';
  const hinweis=isHLW
    ?`Die Schuelerin/der Schueler ist in der HLW (4. Klasse). In der HLW werden ALLE Jahresabschlussthemen in der 4. Klasse behandelt, inklusive Anlagenbewertung (lineare AfA) und Warenbewertung.`
    :`Die Schuelerin/der Schueler ist in der HAK (4. Klasse). Anlagenbewertung (AfA) und Warenbewertung wurden bereits in der 3. Klasse behandelt – Bert erklaert diese Themen trotzdem wenn gefragt. Hauptthemen 4. Klasse: Forderungsbewertung, Rechnungsabgrenzung, Rueckstellungen, Jahresabschluss.`;
  const vornameHinweis = currentVorname ? `Der Name des Schuelers/der Schuelerin ist ${currentVorname}. Sprich ihn/sie REGELMAESSIG mit dem Vornamen an – z.B. beim Begruessen, beim Loben, beim Erklaeren. Das macht die Unterhaltung persoenlicher und motivierender.` : '';
  const motivationsHinweis = 'KOMMUNIKATION: 1. LOB: Lobe KONKRET und PERSOENLICH wenn etwas richtig ist – z.B. "Super, ' + (currentVorname||'') + '! Das hast du perfekt erklaert!" Sei spezifisch. 2. FEHLER: Korrigiere ERMUTIGEND – z.B. "Fast! Der Ansatz stimmt, nur beim Konto nochmal schauen." Nie entmutigen. 3. FORTSCHRITT: Wenn ein Thema abgeschlossen ist, fasse kurz zusammen was erarbeitet wurde. 4. MOTIVIEREN: Erinnere den Schueler gelegentlich daran, dass er das schafft – besonders bei Schwierigkeiten.';
  const benimmHinweis = `WICHTIG BENIMM-REGEL MIT ZAEHLER: Merke dir im Gespraechsverlauf wie oft der Schueler bereits geflucht oder beleidigt hat (starte bei 0). Falls der Schueler flucht, beleidigt oder unangemessene Ausdruecke verwendet: Erhoehe den Zaehler um 1. Beim 1. Mal schreibe GENAU: "Das war jetzt nicht okay, ${currentVorname}. Beim naechsten Mal informiere ich Frau Prof. Gall! 😉" Ab dem 2. Mal schreibe GENAU: "${currentVorname}, ich hab es ernst gemeint – Frau Prof. Gall wurde soeben informiert. 📧" Reagiere danach nicht weiter auf die Beleidigung sondern mach normal mit dem Thema weiter.`;
  return `Du bist "Bilanz-Bert", ein freundlicher, motivierender Rechnungswesen-Tutor fuer oesterreichische ${schultyp}-Schuelerinnen und Schueler. ${hinweis} ${vornameHinweis} ${benimmHinweis} ${motivationsHinweis}

KAPITELSTRUKTUR HAK IV: Kap.1 Forderungsbewertung | Kap.2 Rechnungsabgrenzung | Kap.3 Rueckstellungen (KoeSt-RS, Garantie-RS, Urlaubs-RS) | Kap.4 Jahresabschluss (e.U., OG/KG, GmbH)
KAPITELSTRUKTUR HLW IV: Kap.1 Grundlagen | Kap.2 Anlagenbewertung | Kap.3 Warenbewertung | Kap.4 Forderungsbewertung | Kap.5 Rechnungsabgrenzung | Kap.6 Rueckstellungen | Kap.7 Jahresabschluss

WARENBEWERTUNG – TABELLENFORMAT – KRITISCH WICHTIG:
Bei Identitaetspreisverfahren und FIFO-Verfahren IMMER und AUSSCHLIESSLICH dieses Format verwenden – KEINE andere Tabellenstruktur, KEIN Markdown, KEINE eigene Tabelle!
<WARENTABELLE>
{"verfahren":"Identitaet","zeilen":[
  {"pos":"AB","stueck":"4","preis":"200,00","gesamt":"800,00","abgang":"2","sollEB":"2","istEB":"1","schwund":"1"},
  {"pos":"1. Zukauf","stueck":"22","preis":"220,00","gesamt":"4.840,00","abgang":"20","sollEB":"2","istEB":"2","schwund":"0"},
  {"pos":"2. Zukauf","stueck":"30","preis":"250,00","gesamt":"7.500,00","abgang":"25","sollEB":"5","istEB":"5","schwund":"0"}
]}
</WARENTABELLE>
Spalten: pos=Position, stueck=Stück, preis=Preis€, gesamt=Gesamt€, abgang=Abfassungen, sollEB=SOLL-EB, istEB=IST-EB, schwund=Schwund
Danach separat (als normaler Text, KEIN HTML): EB-Berechnung, Schwund, Abwertung, dann Buchungssaetze im JSON-Format.

<BUCHUNGSSAETZE>
[
  {"datum":"31.12.","beleg":"U 33","sollKto":"7806","sollBez":"Zuweisungen an WB zu Forderungen","sollBetrag":"5400,00","habenKto":"2080","habenBez":"Einzel-WB Lieferforderungen Inland","habenBetrag":"5400,00","hinweis":"Zuweisung EWB 80%"}
]
</BUCHUNGSSAETZE>

WICHTIG: Mehrere Buchungszeilen = mehrere Objekte im Array. Niemals HTML ausgeben!

WICHTIG: habenBetrag MUSS immer den korrekten Betrag enthalten – NIEMALS 0,00 oder leer lassen! Bei Aufloesung einer Rueckstellung: habenBetrag = Betrag der Bankzahlung. Bei Buchungen mit mehreren Zeilen: jede Zeile bekommt ihren eigenen korrekten Betrag.

${getBertAnweisungen()}

Aktuelles Thema: ${currentTopic} | (c) GALS Bilanz-Bert`;
}

function getKtoClass(nr) {
  const first=parseInt(String(nr).trim()[0]);
  if([0,1,2,3,9].includes(first)) return 'bestand';
  if(first===4) return 'ertrag';
  if(first===8) return parseInt(nr)<=8099?'ertrag':'aufwand';
  return 'aufwand';
}
function ktoSpan(nr){const c=getKtoClass(nr);return `<span class="kto-${c}">${nr}</span>`;}
function bezSpan(nr,bez){const c=getKtoClass(nr);return `<span class="kto-${c}">${bez}</span>`;}

function renderBuchungssaetze(items) {
  const groups=[];let last=null;
  for(const b of items){
    const key=(b.datum||'')+'|'+(b.beleg||'');
    if(!last||last.key!==key){last={key,datum:b.datum||'',beleg:b.beleg||'',rows:[],hinweis:b.hinweis||''};groups.push(last);}
    last.rows.push(b);if(b.hinweis)last.hinweis=b.hinweis;
  }
  return groups.map(g=>{
    const meta = (g.datum||g.beleg) ? 
      `<div class="bs-meta"><span>Datum:</span>${g.datum}&nbsp;&nbsp;&nbsp;<span>Beleg:</span>${g.beleg}</div>` : '';
    const rows=g.rows.map((b,i)=>{
      const sep = i>0 ? `<tr class="bs-row-sep"><td colspan="7"></td></tr>` : '';
      return sep+`<tr>
      <td>${ktoSpan(b.sollKto)}</td><td>${bezSpan(b.sollKto,b.sollBez)}</td><td class="betrag">${fmtEuro(b.sollBetrag)}</td>
      <td class="bs-divider-col">/</td>
      ${(()=>{const hb=String(b.habenBetrag||'').replace(/[^0-9,.]/g,'').replace(/\./g,'').replace(',','.');const isZero=!b.habenBetrag||b.habenBetrag===''||parseFloat(hb)===0;return isZero?'<td></td><td></td><td></td>':`<td>${ktoSpan(b.habenKto)}</td><td>${bezSpan(b.habenKto,b.habenBez)}</td><td class="betrag">${fmtEuro(b.habenBetrag)}</td>`})()}
    </tr>`;
    }).join('');
    const hint=g.hinweis?`<div class="bs-hinweis">&#128161; ${g.hinweis}</div>`:'';
    return `<div class="bs-wrap">
      ${meta}
      <div class="bs-table-wrap"><table class="bs-table">
        <thead><tr>
          <th>Nr Soll</th><th>Konto Soll</th><th style="text-align:right">Betrag</th><th></th>
          <th>Nr Haben</th><th>Konto Haben</th><th style="text-align:right">Betrag</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table></div>
      ${hint}
    </div>`;
  }).join('');
}
function fmtEuro(v){
  if(!v||v==='') return '';
  let s=String(v).replace(/[^0-9,.]/g,'');
  // European format: 4.000,00 → remove thousand dots → replace decimal comma
  if(s.includes(',')){ s=s.replace(/\./g,'').replace(',','.'); }
  const n=parseFloat(s);
  if(isNaN(n))return String(v);
  return n.toLocaleString('de-AT',{minimumFractionDigits:2,maximumFractionDigits:2})+' €';
}

// Convert Bert's raw HTML table output to proper BUCHUNGSSAETZE JSON format
function postProcessBertOutput(text) {
  // If no HTML tables, return as-is
  if (!/<(table|div class="bs-)/i.test(text)) return text;

  // Try to extract booking data from HTML spans
  const rows = [];
  // Match pairs of kto spans: kto-aufwand/kto-ertrag/kto-bestand + betrag
  const rowRegex = /<td><span class="kto-[^"]*">(\d+)<\/span><\/td><td><span class="kto-[^"]*">([^<]+)<\/span><\/td><td class="betrag">[^€]*€\s*([\d\s.,]+)<\/td>\s*<td[^>]*>\/[^<]*<\/td>\s*<td><span class="kto-[^"]*">(\d+)<\/span><\/td><td><span class="kto-[^"]*">([^<]+)<\/span><\/td><td class="betrag">[^€]*€\s*([\d\s.,]+)<\/td>/g;
  
  const metaMatch = text.match(/Datum:\s*<\/span>([\d.]+).*?Beleg:\s*<\/span>([A-Z]\s*\d+)/);
  const datum = metaMatch ? metaMatch[1] : '31.12.';
  const beleg = metaMatch ? metaMatch[2] : '';
  const hintMatch = text.match(/bs-hinweis[^>]*>&#128161;\s*([^<]+)</);
  const hinweis = hintMatch ? hintMatch[1] : '';

  let match;
  while ((match = rowRegex.exec(text)) !== null) {
    rows.push({
      datum, beleg,
      sollKto: match[1], sollBez: match[2].trim(), sollBetrag: match[3].trim().replace(/\s/g,''),
      habenKto: match[4], habenBez: match[5].trim(), habenBetrag: match[6].trim().replace(/\s/g,''),
      hinweis
    });
  }

  if (rows.length > 0) {
    // Replace the HTML block with proper BUCHUNGSSAETZE
    const jsonBlock = '<BUCHUNGSSAETZE>' + JSON.stringify(rows) + '</BUCHUNGSSAETZE>';
    // Remove the HTML div block
    text = text.replace(/<div class="bs-wrap">[\s\S]*?<\/div><\/div>/g, jsonBlock);
    text = text.replace(/<div class="bs-wrap">[\s\S]*?<\/div>/g, jsonBlock);
  }
  return text;
}
function renderText(text) {
  let h = text;

  // Strip ** that wrap entire <BUCHUNGSSAETZE> blocks (Bert sometimes bolds the whole block)
  h = h.replace(/\*\*(<BUCHUNGSSAETZE>[\s\S]*?<\/BUCHUNGSSAETZE>)\*\*/g, '$1');

  // Detect raw JSON arrays that look like BUCHUNGSSAETZE (Bert forgot the tags)
  h = h.replace(/\[\s*\{[^[\]]*"sollKto"[^[\]]*\}\s*\]/g, function(match) {
    try {
      const cleanMatch = match.replace(/\*\*/g, ''); // strip bold markers from JSON
      const items = JSON.parse(cleanMatch);
      if (items.length && items[0].sollKto) {
        return '<BUCHUNGSSAETZE>' + cleanMatch + '</BUCHUNGSSAETZE>';
      }
    } catch(e) {}
    return match;
  });

  // If Bert output raw HTML, strip it cleanly
  if (/<(div|table|span class="kto)[^>]*>/i.test(h)) {
    h = h.replace(/<[^>]+>/g, ' ');
    h = h.replace(/&euro;/g, '€').replace(/&nbsp;/g, ' ').replace(/&#\d+;/g, '');
    h = h.replace(/\s{2,}/g, ' ').trim();
    return '<p>' + h + '</p>';
  }

  // Parse BUCHUNGSSAETZE blocks
  const bsRegex = new RegExp('<BUCHUNGSSAETZE>([\\s\\S]*?)<\\/BUCHUNGSSAETZE>', 'g');
  h = h.replace(bsRegex, function(_, json) {
    try {
      let cleanJson = json.trim();
      // Strip nested/duplicate BUCHUNGSSAETZE tags (Bert sometimes double-wraps)
      cleanJson = cleanJson.replace(/<\/?BUCHUNGSSAETZE>/g, '');
      // Strip markdown code fences (```json ... ``` or ``` ... ```)
      cleanJson = cleanJson.replace(/^```[a-z]*\n?/i, '').replace(/\n?```$/,'');
      // Strip all asterisks (bold/italic markdown)
      cleanJson = cleanJson.replace(/\*/g, '');
      // Replace smart/curly quotes with straight quotes
      cleanJson = cleanJson.replace(/[\u201c\u201d\u201e]/g, '"').replace(/[\u2018\u2019]/g, "'");
      // Remove any trailing commas before ] or } (common LLM mistake)
      cleanJson = cleanJson.replace(/,\s*([}\]])/g, '$1');
      return renderBuchungssaetze(JSON.parse(cleanJson));
    }
    catch(e) {
      console.error('BUCHUNGSSAETZE parse error:', e, 'raw:', json);
      return '<em style="color:var(--red)">Fehler beim Parsen</em>';
    }
  });

  // Parse WARENTABELLE blocks
const wtRegex = new RegExp('<WARENTABELLE>([\\s\\S]*?)<\\/WARENTABELLE>', 'g');
h = h.replace(wtRegex, function(_, json) {
  try {
    let clean = json.trim().replace(/^```[a-z]*\n?/i,'').replace(/\n?```$/,'').replace(/\*/g,'');
    clean = clean.replace(/[\u201c\u201d\u201e]/g,'"').replace(/[\u2018\u2019]/g,"'");
    clean = clean.replace(/,\s*([}\]])/g,'$1');
    const d = JSON.parse(clean);
    const cols = ['Position','Stück','Preis €','Gesamt €','Abgänge €','SOLL-EB','IST-EB','Schwund'];
    const keys = ['pos','stueck','preis','gesamt','abgang','sollEB','istEB','schwund'];
    const ths = cols.map(c=>'<th style="background:var(--surface2);color:var(--text-dim);padding:6px 10px;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid var(--border);text-align:left">'+c+'</th>').join('');
    const trs = d.zeilen.map(z=>'<tr>'+keys.map(k=>'<td style="padding:6px 10px;border-bottom:1px solid rgba(46,50,80,0.3);font-size:0.82rem">'+(z[k]||'')+'</td>').join('')+'</tr>').join('');
    return '<div style="overflow-x:auto;border-radius:8px;border:1px solid var(--border);margin:8px 0"><table style="width:100%;border-collapse:collapse"><thead><tr>'+ths+'</tr></thead><tbody>'+trs+'</tbody></table></div>';
  } catch(e) {
    return '<em style="color:var(--red)">Fehler beim Parsen der Warentabelle</em>';
  }
});
  
  // Markdown tables → HTML table
  if (h.includes('|')) {
    const tableRegex = new RegExp('(\\|[^\n]+\\|\n?)+', 'g');
    h = h.replace(tableRegex, function(tableStr) {
      const lines = tableStr.trim().split('\n').filter(function(l) {
        const stripped = l.replace(/[|\- ]/g,'');
        return stripped.trim().length > 0;
      });
      if (lines.length < 1) return tableStr;
      const rows = lines.map(function(l) {
        return l.split('|').filter(function(_,i,a){return i>0&&i<a.length-1;}).map(function(c){return c.trim();});
      });
      const header = rows[0];
      const body = rows.slice(1);
      const ths = header.map(function(h){return '<th style="background:var(--surface2);color:var(--text-dim);padding:6px 10px;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid var(--border);text-align:left">'+h+'</th>';}).join('');
      const trs = body.map(function(r){return '<tr>'+r.map(function(c){return '<td style="padding:6px 10px;border-bottom:1px solid rgba(46,50,80,0.3);font-size:0.82rem">'+c+'</td>';}).join('')+'</tr>';}).join('');
      return '<div style="overflow-x:auto;border-radius:8px;border:1px solid var(--border);margin:8px 0"><table style="width:100%;border-collapse:collapse"><thead><tr>'+ths+'</tr></thead><tbody>'+trs+'</tbody></table></div>';
    });
  }

  // Bold
  h = h.replace(new RegExp('\\*\\*(.*?)\\*\\*', 'g'), '<strong>$1</strong>');
  // Code
  h = h.replace(/`([^`]+)`/g, '<strong>$1</strong>');
  // Headers
  h = h.replace(/^# (.+)$/gm, '<h3>$1</h3>');
  h = h.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  h = h.replace(/^## (.+)$/gm, '<h3>$1</h3>');
  // Emoji number lines (1️⃣ 2️⃣ etc.) → each on its own line as a div
  h = h.replace(/^(.+⃣.*)$/gm, '<div style="margin:0">$1</div>');
 // List items
  h = h.replace(/^- (.+)$/gm, '<li>$1</li>');
  // a) b) c) d) each on own line
  h = h.replace(/(\s)([b-e]\))/g, '<br>$2');
  h = h.replace(/^<br>/, '');
  // Remove excessive blank lines
  h = h.replace(/\n{3,}/g, '\n\n');
  // Paragraphs
  // Collapse blank lines between emoji-div lines to avoid extra paragraph spacing
  h = h.replace(/(<\/div>)\s*\n\n\s*(<div)/g, '$1\n$2');
  h = h.replace(/\n\n/g, '</p><p>');
  h = h.replace(/\n/g, '<br>');
  return '<p>' + h + '</p>';
}
// Convert Bert's raw HTML table output to proper BUCHUNGSSAETZE JSON format
function addMsg(role,html) {
  const msgs=document.getElementById('messages');
  const d=document.createElement('div');d.className='msg '+role;
  if(role==='bert') d.innerHTML=`<div class="avatar"><img src="${BERT_IMG}" alt="Bert"></div><div class="bubble">${html}</div>`;
  else d.innerHTML=`<div class="avatar user-av">&#128100;</div><div class="bubble">${html}</div>`;
  msgs.appendChild(d);
  // Scroll so the TOP of the new message is visible
  setTimeout(() => d.scrollIntoView({behavior:'smooth', block:'start'}), 50);
}
function addTyping(){const msgs=document.getElementById('messages');const d=document.createElement('div');d.className='msg bert';d.id='typing';d.innerHTML=`<div class="avatar"><img src="${BERT_IMG}" alt="Bert"></div><div class="bubble"><div class="typing"><span></span><span></span><span></span></div></div>`;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;}
function removeTyping(){document.getElementById('typing')?.remove();}

async function sendMessage() {
  const input=document.getElementById('userInput');
  const text=input.value.trim();if(!text) return;
  if(isLimitReached()){addMsg('bert','<em style="color:var(--red)">Dein woechentliches Limit von '+WEEKLY_LIMIT+' Anfragen ist erreicht. Erneuerung am '+getNextMonday()+'.</em>');return;}
  input.value='';input.style.height='auto';
  document.getElementById('sendBtn').disabled=true;
  addMsg('user',text.replace(/</g,'&lt;').replace(/>/g,'&gt;'));
  conversationHistory.push({role:'user',content:text});
  addTyping();
  try {
    // Inject solution data if user references an exercise
  const solutionContext = findSolutionContext(text);
  const zusatzContext = findZusatzContext(text);
  let systemWithSolutions = buildSystemPrompt();
  if (solutionContext) {
    systemWithSolutions += '\n\nABSOLUT KRITISCH – LOESUNGSDATEN SIND VERBINDLICH:\n1. Uebernimm ALLE Buchungssaetze EXAKT aus den Loesungsdaten – erfinde KEINE eigenen, lass KEINE weg, verwende EXAKT die Kontonummern und Betraege!\n2. Uebernimm ALLE Berechnungen (Wareneinsatz, Abwertung, Schwund, Bestandsveraenderung etc.) EXAKT aus den Loesungsdaten – NIEMALS selbst nachrechnen oder korrigieren!\n3. Wenn die Loesung einen Buchungssatz enthaelt, zeige ihn VOLLSTAENDIG – lasse KEINEN einzigen Buchungssatz weg!\n4. Wenn die Loesung mehrere Buchungssaetze enthaelt (z.B. Bestandsveraenderung UND Abwertung UND Schwund), zeige ALLE – KEINEN weglassen!\n\nRELEVANTE LOESUNGSDATEN AUS DEM MEHR!-BUCH:' + solutionContext;
  }
  if (zusatzContext) {
    systemWithSolutions += '\n\n' + zusatzContext;
  }

  const res=await fetch('https://bilanz-bert-proxy.sandygall1412.workers.dev',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:2000,system:systemWithSolutions,messages:conversationHistory})
    });
    const data=await res.json();removeTyping();
    if(data.content&&data.content[0]){
      const raw=data.content[0].text;
      conversationHistory.push({role:'assistant',content:raw});
      addMsg('bert',renderText(postProcessBertOutput(raw)));
      await incrementRequestCount();
    } else {
      addMsg('bert','<em style="color:var(--red)">Fehler: '+(data.error?.message||'Keine Antwort')+'</em>');
    }
  } catch(e){removeTyping();addMsg('bert','<em style="color:var(--red)">Verbindungsfehler: '+e.message+'</em>');}
  document.getElementById('sendBtn').disabled=false;
  document.getElementById('userInput').focus();
}

// Lösungen werden aus loesungen.js geladen (const SOLUTIONS)

// Detect exercise references like "Ü 3.3", "U 3.3", "Ü 3.3 a)", "K 2.1"

const LONG_THRESHOLD = 3000; // Zeichen – ab hier wird nachgefragt
let lastFoundExerciseContext = ''; // Merkt sich letzte Aufgabe für Folgefragen

function buildLongSolutionInstruction(keys, fullContext) {
  const partList = keys.join(', ');
  return `\n\nHINWEIS FUER BERT – LANGE AUFGABE:
Diese Aufgabe hat mehrere Teile: ${partList}.
Frage den Schueler ZUERST freundlich, welchen Teil er benoetigt – schlage z.B. vor:
"Diese Aufgabe ist ziemlich umfangreich! 📋 Welchen Teil brauchst du?
1️⃣ Um- und Nachbuchungen (a + b)
2️⃣ Erfolgsermittlung / KöSt (c)
3️⃣ Bilanz & GuV (e)
4️⃣ Erfolgsaufteilung (f)"
Warte auf die Antwort – zeige NOCH KEINE Loesung!
Die vollstaendigen Loesungsdaten (fuer spaeter):
${fullContext}`;
}

function findSolutionContext(userMsg) {
  const pattern = /[ÜU]\s*(\d+\.\d+)|K\s*(\d+\.\d+)/gi;
  const matches = [...userMsg.matchAll(pattern)];

  // ── FIRMENNAMEN-FALLBACK ──────────────────────────────────────
  if (!matches.length) {
    const lowerMsg = userMsg.toLowerCase();
    let context = '';
    let matchedKeys = [];
    for (const [key, value] of Object.entries(SOLUTIONS)) {
      if (!key.startsWith(schultyp)) continue;
      const firstLine = value.split('\n')[1] || '';
      const words = firstLine.toLowerCase().split(/\s+/).filter(w => w.length > 3);
      if (words.filter(w => lowerMsg.includes(w)).length >= 2) {
        context += '\n\n=== Loesung ' + key + ' ===\n' + value;
        matchedKeys.push(key);
      }
    }
    if (context) {
      const result = context.length > LONG_THRESHOLD
        ? buildLongSolutionInstruction(matchedKeys, context)
        : context;
      lastFoundExerciseContext = result;
      return result;
    }
    // Keine neue Aufgabe erkannt → letzte Aufgabe erneut einblenden (für Folgefragen)
    return lastFoundExerciseContext;
  }

  // ── ÜBUNGSNUMMER-SUCHE ────────────────────────────────────────
  let context = '';
  for (const m of matches) {
    const num = m[1] || m[2];
    const prefix = m[0].trim().toUpperCase().startsWith('K') ? 'K' : 'Ü';
    const allMatching = Object.keys(SOLUTIONS).filter(k =>
      k.startsWith(schultyp + ' ' + prefix + ' ' + num)
    );
    let exerciseContext = '';
    const exerciseKeys = [];
    for (const key of allMatching) {
      if (SOLUTIONS[key]) {
        exerciseContext += '\n\n=== Loesung ' + key + ' ===\n' + SOLUTIONS[key];
        exerciseKeys.push(key);
      }
    }
    context += exerciseContext.length > LONG_THRESHOLD
      ? buildLongSolutionInstruction(exerciseKeys, exerciseContext)
      : exerciseContext;
  }

  if (context) lastFoundExerciseContext = context;
  return context || lastFoundExerciseContext;
}

// Zusatzbeispiele – themenbasierte Suche
// Schüler kennen keine Nummern – sie fragen nach Themen wie "Rückstellungen üben"
const ZUSATZ_THEMEN = [
  { keywords: ['bewertung','vermögen','verbindlichkeit','aktie','grundstück','wertpapier'], keys: ['JA_Z Ü 1','JA_Z Ü 2'] },
  { keywords: ['selbst erstellt','hergestellt','anlage in bau','anlagen in bau'], keys: ['JA_Z Ü 15','JA_Z Ü 16','JA_Z Ü 17','JA_Z Ü 18'] },
  { keywords: ['instandhaltung','erhaltung','herstellungsaufwand','erweiterung','gebäude'], keys: ['JA_Z Ü 19','JA_Z Ü 20'] },
  { keywords: ['anlagenverkauf','verkauf anlage','anlage verkauf','abgang anlage'], keys: ['JA_Z Ü 21','JA_Z Ü 22','JA_Z Ü 23','JA_Z Ü 24'] },
  { keywords: ['in zahlung','inzahlung'], keys: ['JA_Z Ü 25','JA_Z Ü 26'] },
  { keywords: ['schadensfall','unfall','anlage ausscheiden'], keys: ['JA_Z Ü 27','JA_Z Ü 28'] },
  { keywords: ['abschreibung','afa','absetzung'], keys: ['JA_Z Ü 29','JA_Z Ü 30','JA_Z_AFA Ü 57','JA_Z_AFA Ü 58','JA_Z_AFA Ü 59','JA_Z_AFA Ü 60','JA_Z_AFA Ü 61','JA_Z_AFA Ü 62','JA_Z_AFA Ü 63','JA_Z_AFA Ü 64','JA_Z_AFA Ü 65','JA_Z_AFA Ü 66','JA_Z_AFA Ü 67','JA_Z_AFA Ü 68'] },
  { keywords: ['anschaffungswert','anschaffungskosten'], keys: ['JA_Z_AFA Ü 57','JA_Z_AFA Ü 58','JA_Z_AFA Ü 59','JA_Z_AFA Ü 60'] },
  { keywords: ['identität','identitäts','chargenweise'], keys: ['JA_Z Ü 31','JA_Z Ü 32','JA_Z Ü 37'] },
  { keywords: ['fifo','first in first out'], keys: ['JA_Z Ü 33','JA_Z Ü 34','JA_Z Ü 38'] },
  { keywords: ['durchschnitt','gleitend'], keys: ['JA_Z Ü 35','JA_Z Ü 36'] },
  { keywords: ['warenbewertung','waren bewert','vorrat bewert'], keys: ['JA_Z Ü 31','JA_Z Ü 32','JA_Z Ü 33','JA_Z Ü 34','JA_Z Ü 35','JA_Z Ü 36','JA_Z Ü 37','JA_Z Ü 38'] },
  { keywords: ['forderung','ewb','wertberichtigung','einzel-wb','einzelwb','zweifelha'], keys: ['JA_Z Ü 39','JA_Z Ü 40','JA_Z Ü 41','JA_Z Ü 42'] },
  { keywords: ['export','fremdwährung','fremdwaehrung','währung'], keys: ['JA_Z Ü 43','JA_Z Ü 44','JA_Z Ü 45','JA_Z Ü 46'] },
  { keywords: ['import'], keys: ['JA_Z Ü 45','JA_Z Ü 46'] },
  { keywords: ['vorauszahlung','ara','pra','voraus'], keys: ['JA_Z Ü 47','JA_Z Ü 48','JA_Z Ü 49','JA_Z Ü 50','JA_Z Ü 51'] },
  { keywords: ['rückstand','ruckstand'], keys: ['JA_Z Ü 52','JA_Z Ü 53','JA_Z Ü 54'] },
  { keywords: ['rechnungsabgrenzung','abgrenzung'], keys: ['JA_Z Ü 55','JA_Z Ü 56','JA_Z Ü 57','JA_Z Ü 58'] },
  { keywords: ['körperschaftsteuer','köst','koest','koerperschaft'], keys: ['JA_Z Ü 61','JA_Z Ü 62'] },
  { keywords: ['garantie','gewährleistung'], keys: ['JA_Z Ü 63','JA_Z Ü 64'] },
  { keywords: ['urlaub','urlaubsrück'], keys: ['JA_Z Ü 65','JA_Z Ü 66'] },
  { keywords: ['rückstellung','ruckstellung'], keys: ['JA_Z Ü 59','JA_Z Ü 60','JA_Z Ü 61','JA_Z Ü 62','JA_Z Ü 63','JA_Z Ü 64','JA_Z Ü 65','JA_Z Ü 66','JA_Z Ü 67','JA_Z Ü 68'] },
  { keywords: ['og ','offene gesellschaft','og-abschluss','og abschluss'], keys: ['JA_Z Ü 77','JA_Z Ü 78','JA_Z Ü 81','JA_Z Ü 82'] },
  { keywords: ['kg ','kommanditgesellschaft','kg-abschluss','kg abschluss'], keys: ['JA_Z Ü 79','JA_Z Ü 80','JA_Z Ü 83','JA_Z Ü 84'] },
  { keywords: ['erfolgsaufteilung','gewinnverteilung','verlustverteilung'], keys: ['JA_Z Ü 77','JA_Z Ü 78','JA_Z Ü 79','JA_Z Ü 80'] },
  { keywords: ['jahresabschluss','abschlusstabelle','bilanz','guv','umbuchung','nachbuchung'], keys: ['JA_Z Ü 69','JA_Z Ü 70','JA_Z Ü 71','JA_Z Ü 72','JA_Z Ü 73','JA_Z Ü 74','JA_Z Ü 75','JA_Z Ü 76'] },
];

function findZusatzContext(userMsg) {
  if (typeof ZUSATZ === 'undefined') return '';

  const willUeben = /üb|beispiel|aufgabe|angabe|zeig|gib mir|ich will|ich möchte|ich moechte|eine aufgabe|ein beispiel|trainier|übungsbeispiel/i.test(userMsg);
  if (!willUeben) return '';

  const lower = userMsg.toLowerCase();

  // Passendes Thema suchen
  let candidateKeys = [];
  for (const thema of ZUSATZ_THEMEN) {
    if (thema.keywords.some(kw => lower.includes(kw))) {
      candidateKeys = thema.keys.filter(k => ZUSATZ[k]);
      break;
    }
  }

  // Kein Thema erkannt → alle verfügbaren Keys
  if (!candidateKeys.length) {
    candidateKeys = Object.keys(ZUSATZ);
  }

  if (!candidateKeys.length) return '';

  // Zufällige Aufgabe aus den passenden Keys wählen
  const randomKey = candidateKeys[Math.floor(Math.random() * candidateKeys.length)];
  const entry = ZUSATZ[randomKey];
  if (!entry || !entry.angabe) return '';

  return `ZUSATZBEISPIEL VERFÜGBAR – THEMA PASSEND ZUM AKTUELLEN GESPRÄCH:
Angabe: ${entry.angabe}

WICHTIG FÜR BERT: 
- Zeige dem Schüler NUR diese Angabe als Übungsaufgabe – schreib sie freundlich auf.
- Löse die Aufgabe NICHT vor!
- Fordere den Schüler auf, sie selbst zu versuchen.
- Biete an: "Wenn du fertig bist, zeig mir deine Lösung oder sag 'Lösung zeigen' – dann vergleichen wir!"
- Wenn der Schüler später "Lösung zeigen" oder "stimmt das?" schreibt, zeige diese offizielle Lösung und erkläre sie: ${entry.loesung}`;
}

// Lösungen aus allen Dateien zusammenführen
const SOLUTIONS = {
  ...(typeof SOLUTIONS_HAK4 !== 'undefined' ? SOLUTIONS_HAK4 : {}),
  ...(typeof SOLUTIONS_HLW4 !== 'undefined' ? SOLUTIONS_HLW4 : {}),
};

// Initialize schultyp badges on load
document.addEventListener('DOMContentLoaded', function(){ setSchultyp('HAK'); });
