const tegelsMaat = document.getElementById('tegels-maat');

function aantalTegelsBerekenen() {
  let gekozenTegelMaat = tegelsMaat.value;
  let oppervlakte = oppervlakteBerekenen();
  let aantalTegels;

  if (isNaN(oppervlakte)) {
    showError();
    document.getElementById('hoeveelheid-tegels').innerHTML =
      'Vul alstublieft de lengte en breedte van uw kamer in.';
    document.getElementById('hoeveelheid-tegels').classList.remove('hidden');
    return;
  }

  switch (gekozenTegelMaat) {
    case '1':
      aantalTegels = ((oppervlakte * 10000) / (20 * 20)) * 1.15;
      break;
    case '2':
      aantalTegels = ((oppervlakte * 10000) / (30 * 30)) * 1.15;
      break;
    case '3':
      aantalTegels = ((oppervlakte * 10000) / (30 * 80)) * 1.15;
      break;
  }

  aantalTegels = Math.ceil(aantalTegels);
  console.log(aantalTegels);
  document.getElementById(
    'hoeveelheid-tegels'
  ).innerHTML = `Aantal tegels nodig: ${aantalTegels}`;
  document.getElementById('hoeveelheid-tegels').classList.remove('hidden');
}

function oppervlakteBerekenen() {
  let lengte = document.getElementById('lengte');
  let breedte = document.getElementById('breedte');
  let l = parseFloat(lengte.value);
  let b = parseFloat(breedte.value);

  return l * b;
}

function showError() {
  let lengte = document.getElementById('lengte');
  let breedte = document.getElementById('breedte');

  if (!lengte.value || isNaN(lengte.value)) {
    lengte.classList.add('input-error');
  } else {
    lengte.classList.remove('input-error');
  }

  if (!breedte.value || isNaN(breedte.value)) {
    breedte.classList.add('input-error');
  } else {
    breedte.classList.remove('input-error');
  }
}

document.getElementById('lengte').addEventListener('focus', removeErrorBorder);
document.getElementById('breedte').addEventListener('focus', removeErrorBorder);

function removeErrorBorder(event) {
  event.target.classList.remove('input-error');
}
