/* assets/js/main.js
   Wersja uproszczona: Tylko Modal (Informacje) i Newsletter
   Brak koszyka, brak zmiany motywu.
*/

document.addEventListener('DOMContentLoaded', () => {
    initNewsletter();
});

/* --- 1. BAZA DANYCH PRODUKTÓW (Do wyświetlania w modalu) --- */
const productsData = {
    'spadziowy': { 
        title: 'Miód Spadziowy', 
        price: 55.00, 
        desc: 'Wyjątkowy miód ze spadzi iglastej. Ciemny, gęsty, o żywicznym aromacie. Doskonały na odporność.' 
    },
    'lipowy': { 
        title: 'Miód Lipowy', 
        price: 45.00, 
        desc: 'Klasyka gatunku. Jasny, ostry w smaku. Niezastąpiony przy przeziębieniach i grypie.' 
    },
    'rzepakowy': { 
        title: 'Miód Rzepakowy', 
        price: 40.00, 
        desc: 'Kremowy, biały miód o łagodnym smaku. Bogaty w glukozę, idealny do regeneracji po wysiłku.' 
    }
};

/* --- 2. MODAL PRODUKTOWY (Tylko podgląd) --- */
window.openProduct = function(id) {
    const modal = document.getElementById('product-modal');
    const data = productsData[id];

    if (modal && data) {
        // Wypełnij dane tekstowe
        const titleEl = document.getElementById('m-title');
        const priceEl = document.getElementById('m-price');
        const descEl = document.getElementById('m-desc');

        if(titleEl) titleEl.innerText = data.title;
        if(priceEl) priceEl.innerText = data.price.toFixed(2) + ' PLN';
        if(descEl) descEl.innerText = data.desc;
        
        // Ukrywamy ewentualne elementy ilości i przycisk dodawania, 
        // jeśli HTML nie został jeszcze wyczyszczony.
        // Jeśli HTML zostanie zaktualizowany, te linie nie zaszkodzą.
        const qtyControl = document.querySelector('.qty-control');
        const addBtn = document.getElementById('m-add-btn');
        
        if(qtyControl) qtyControl.style.display = 'none'; // Ukryj plus/minus
        
        if(addBtn) {
            addBtn.innerText = "ZAMKNIJ"; // Zmień tekst przycisku
            addBtn.onclick = closeModal;  // Przycisk teraz zamyka okno zamiast dodawać do koszyka
        }

        modal.style.display = 'block';
    }
};

window.closeModal = function() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.style.display = 'none';
};

// Zamknij modal klikając w tło (poza oknem)
window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

/* --- 3. NEWSLETTER (Pop-up) --- */
function initNewsletter() {
    const box = document.getElementById('newsletter-box');
    const closeBtn = document.getElementById('newsletter-close');
    
    // Pokaż po 3 sekundach, jeśli user go nie zamknął w tej sesji
    if (box && !sessionStorage.getItem('newsletter_closed')) {
        setTimeout(() => {
            box.classList.remove('hidden');
        }, 3000);

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                box.classList.add('hidden');
                sessionStorage.setItem('newsletter_closed', 'true');
            });
        }
    }
}