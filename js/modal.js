(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();

(() => {
  const refs = {
    openBtn: document.querySelector('[data-mobile-open]'),
    closeBtn: document.querySelector('[data-mobile-close]'),
    menu: document.querySelector('[data-mobile-menu]'),
  };

  if (!refs.openBtn || !refs.closeBtn || !refs.menu) return;

  refs.openBtn.addEventListener('click', toggleMenu);
  refs.closeBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();
