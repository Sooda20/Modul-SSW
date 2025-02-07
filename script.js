/*const conts = document.querySelectorAll(".cont");

conts.forEach((cont) => {
  cont.addEventListener("click", () => {
    cont.classList.toggle("active");
  });
});*/

const btnList1 = document.getElementById("btnList1");
const list1 = document.getElementById("list1");

list1.style.display = "none";

btnList1.addEventListener("click", () => {
  if(list1.style.display === "none"){
    list1.style.display = "block";
    btnList1.textContent = "-";
  }
  else{
    list1.style.display = "none";
    btnList1.textContent = "+";
  }
});

const btnList1_2 = document.getElementById("btnList1_2");
const list1_2 = document.getElementById("list1_2");

list1_2.style.display = "none";

btnList1_2.addEventListener("click", () => {
  if(list1_2.style.display === "none"){
    list1_2.style.display = "block";
    btnList1_2.textContent = "-";
  }
  else{
    list1_2.style.display = "none";
    btnList1_2.textContent = "+";
  }
});

/*divider*/

const btnList2 = document.getElementById("btnList2");
const list2 = document.getElementById("list2");

list2.style.display = "none";

btnList2.addEventListener("click", () => {
  if(list2.style.display === "none") {
    list2.style.display = "block";
    btnList2.textContent = "-";
  }
  else {
    list2.style.display = "none";
    btnList2.textContent = "+";
  }
});

const btnList2_2 = document.getElementById("btnList2_2");
const list2_2 = document.getElementById("list2_2");

list2_2.style.display = "none";

btnList2_2.addEventListener("click", () => {
  if(list2_2.style.display === "none"){
    list2_2.style.display = "block";
    btnList2_2.textContent = "-";
  }
  else{
    list2_2.style.display = "none";
    btnList2_2.textContent = "+";
  }
});

const btnList2_2_1 = document.getElementById("btnList2_2_1");
const list2_2_1 = document.getElementById("list2_2_1");

list2_2_1.style.display = "none";

btnList2_2_1.addEventListener("click", () => {
  if(list2_2_1.style.display === "none"){
    list2_2_1.style.display = "block";
    btnList2_2_1.textContent = "-";
  }
  else{
    list2_2_1.style.display = "none";
    btnList2_2_1.textContent = "+";
  }
});

const btnList2_2_2 = document.getElementById("btnList2_2_2");
const list2_2_2 = document.getElementById("list2_2_2");

list2_2_2.style.display = "none";

btnList2_2_2.addEventListener("click", () => {
  if(list2_2_2.style.display === "none"){
    list2_2_2.style.display = "block";
    btnList2_2_2.textContent = "-";
  }
  else{
    list2_2_2.style.display = "none";
    btnList2_2_2.textContent = "+";
  }
});

const btnList2_3 = document.getElementById("btnList2_3");
const list2_3 = document.getElementById("list2_3");

list2_3.style.display = "none";

btnList2_3.addEventListener("click", () => {
  if(list2_3.style.display === "none"){
    list2_3.style.display = "block";
    btnList2_3.textContent = "-";
  }
  else{
    list2_3.style.display = "none";
    btnList2_3.textContent = "+";
  }
});

const btnKana = document.getElementById("btnKana");

btnKana.addEventListener('click', function() {
    const rubyElements = document.querySelectorAll('ruby');
    let isHidden = btnKana.textContent === 'Show';

    btnKana.textContent = isHidden ? 'Hide' : 'Show'; // Update the button text first

    rubyElements.forEach(rubyElement => {
        const rtElements = rubyElement.querySelectorAll('rt:not(.sp)');
        rtElements.forEach(rtElement => {
            rtElement.style.visibility = isHidden ? 'visible' : 'hidden';
        });
    });
});

const btnRoma = document.getElementById("btnRoma");

btnRoma.addEventListener('click', function() {
    const rubyElements = document.querySelectorAll('ruby');
    let isHidden = btnRoma.textContent === 'Show';

    btnRoma.textContent = isHidden ? 'Hide' : 'Show'; // Update the button text first

    rubyElements.forEach(rubyElement => {
        const rtElements = rubyElement.querySelectorAll('rt.sp');
        rtElements.forEach(rtElement => {
            rtElement.style.visibility = isHidden ? 'visible' : 'hidden';
        });
    });
});
