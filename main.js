document.addEventListener('DOMContentLoaded', () => {
    initNewsletter();
});

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

        const qtyControl = document.querySelector('.qty-control');
        const addBtn = document.getElementById('m-add-btn');
        
        if(qtyControl) qtyControl.style.display = 'none';
        
        if(addBtn) {
            addBtn.innerText = "ZAMKNIJ";
            addBtn.onclick = closeModal;
        }

        modal.style.display = 'block';
    }
};

window.closeModal = function() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.style.display = 'none';
};

window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function initNewsletter() {
    const box = document.getElementById('newsletter-box');
    const closeBtn = document.getElementById('newsletter-close');
    
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
function initSideMenu() {
    const menuBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close');
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('side-menu-overlay');

    function toggleMenu() {
        sideMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', () => {
    initSideMenu();
});