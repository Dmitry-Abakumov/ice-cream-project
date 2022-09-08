(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open-header]"),
        closeModalBtn: document.querySelector("[data-modal-close-header]"),
        modal: document.querySelector("[data-modal-header]"),
        openModalMobileBtn: document.querySelector("[data-modal-open-header-mobile]"),
        closeModalmobileBtn: document.querySelector("[data-modal-close-header-mobile]"),
        modal: document.querySelector("[data-modal-header-mobile]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.openModalMobileBtn.addEventListener("click", toggleModal);
    refs.closeModalmobileBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();