// https://www.omnicalculator.com/conversion/BTU-to-m3

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const BTURadio = document.getElementById('BTURadio');
const m3Radio = document.getElementById('m3Radio');

let BTU;
let m3 = v; 

// labels of the inpust
const variable = document.getElementById('variable');

BTURadio.addEventListener('click', function() {
  variable.textContent = 'm³';
  m3 = v;
  result.textContent = '';
});

m3Radio.addEventListener('click', function() {
  variable.textContent = 'BTU';
  BTU = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(BTURadio.checked)
    result.textContent = `BTU = ${computeBTU().toFixed(5)}`;

  else if(m3Radio.checked)
    result.textContent = `m³ = ${computem3().toFixed(5)}`;
})

// calculation

function computeBTU() {
  return Number(m3.value) * 36688;
}

function computem3() {
  return Number(BTU.value) / 36688;
}