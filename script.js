/* mise a jour en temps reel*/
function updateNom(){
  cvNom.textContent = prenom.value + " " + nom.value;
}
nom.oninput = updateNom;
prenom.oninput = updateNom;

titre.oninput = () => cvTitre.textContent = titre.value;

function updateContact(){
  let parts = [email.value, tel.value, ville.value, github.value].filter(v => v !== "");
  cvContact.textContent = parts.join(" | ");
}
email.oninput = updateContact;
tel.oninput = updateContact;
ville.oninput = updateContact;
github.oninput = updateContact;

profil.oninput = () => cvProfil.textContent = profil.value;

function addExp(){
  const d = document.createElement('div');
  d.className = 'dynamic-field';
  d.innerHTML = `<button class="rm-btn" onclick="this.parentElement.remove(); updateExp()">x</button>
    <input placeholder="Poste (ex: Stage dev web)" oninput="updateExp()">
    <input placeholder="Entreprise · Dates" oninput="updateExp()">`;
  expContainer.appendChild(d);
}

function updateExp(){
  let h = '';
  document.querySelectorAll('#expContainer .dynamic-field').forEach(f => {
    const ins = f.querySelectorAll('input');
    if(ins[0].value) h += `<p><b>${ins[0].value}</b>${ins[1].value ? ' — '+ins[1].value : ''}</p>`;
  });
  cvExp.innerHTML = h;
}

function addFormation(){
  const d = document.createElement('div');
  d.className = 'dynamic-field';
  d.innerHTML = `<button class="rm-btn" onclick="this.parentElement.remove(); updateFormation()">x</button>
    <input placeholder="Diplome (ex: Licence Informatique)" oninput="updateFormation()">
    <input placeholder="Etablissement · Annee" oninput="updateFormation()">`;
  formationContainer.appendChild(d);
}

function updateFormation(){
  let h = '';
  document.querySelectorAll('#formationContainer .dynamic-field').forEach(f => {
    const ins = f.querySelectorAll('input');
    if(ins[0].value) h += `<p><b>${ins[0].value}</b>${ins[1].value ? ' — '+ins[1].value : ''}</p>`;
  });
  cvFormation.innerHTML = h;
}

function addSkill(){
  const d = document.createElement('div');
  d.className = 'dynamic-field';
  d.innerHTML = `<button class="rm-btn" onclick="this.parentElement.remove(); updateSkills()">x</button>
    <input placeholder="Compétence (ex: JavaScript)" oninput="updateSkills()">`;
  skillContainer.appendChild(d);
}

function updateSkills(){
  let h = '';
  document.querySelectorAll('#skillContainer input').forEach(i => {
    if(i.value) h += `<span style="margin-right:10px">• ${i.value}</span>`;
  });
  cvSkills.innerHTML = h;
}

/*soft skills (avec tableau pour eviter les doublons)*/
const softList = [];

function addTag(tag){
  const v = tag || softInput.value.trim();
  if(!v || softList.includes(v)) return;
  softList.push(v);
  renderSoft();
  softInput.value = '';
}

function removeTag(t){
  softList.splice(softList.indexOf(t), 1);
  renderSoft();
}

function renderSoft(){
  cvSoft.innerHTML = softList.map(t =>
    `<span style="margin-right:8px;cursor:pointer" onclick="removeTag('${t}')" title="clic pour supprimer">• ${t}</span>`
  ).join('');
}

softInput.onkeydown = e => { if(e.key === 'Enter'){ e.preventDefault(); addTag(); } };

function setTheme(t){
  cv.className = 'cv ' + t;
}

function setFont(f){
  cv.style.fontFamily = f;
}

/* photo de profil*/
document.getElementById('photo').onchange = function(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    cvPhoto.src = ev.target.result;
    cvPhoto.style.display = 'block';
  };
  reader.readAsDataURL(file);
};

/* reinitialisation du formulaire */
function resetForm(){
  ["nom","prenom","titre","email","tel","ville","github","profil","softInput"].forEach(id => {
    document.getElementById(id).value = '';
  });
  expContainer.innerHTML = '';
  formationContainer.innerHTML = '';
  skillContainer.innerHTML = '';
  softList.length = 0;
  cvPhoto.src = ''; cvPhoto.style.display = 'none';
  cvNom.textContent = 'Nom Prénom';
  cvTitre.textContent = ''; cvContact.textContent = ''; cvProfil.textContent = '';
  cvExp.innerHTML = ''; cvFormation.innerHTML = ''; cvSkills.innerHTML = ''; cvSoft.innerHTML = '';
}

/* validation et telechargement */
function printCV(){
  const vides = ["nom","prenom","titre","email","tel","ville","profil"].filter(id => document.getElementById(id).value === "");
  if(vides.length > 0){
    alert("Merci de remplir tous les champs obligatoires (*) avant de télécharger.");
    document.getElementById(vides[0]).focus();
    return;
  }
  window.print();
}
