(() => {
                    const refs = {
                        openMenuBtn: document.querySelector("[data-menu-open-header]"),
                        closeMenuBtn: document.querySelector("[data-menu-close-header]"),
                        aboutSection: document.querySelector("[data-about-section]"),
                        advantagesSection: document.querySelector("[data-advantages-section]"),
                        productsSection: document.querySelector("[data-products-section]"),
                        contactsSection: document.querySelector("[data-contacts-section]"),
                        menu: document.querySelector("[data-menu-header]"),
                    };

                    refs.openMenuBtn.addEventListener("click", toggleMenu);
                    refs.closeMenuBtn.addEventListener("click", toggleMenu);
                    refs.aboutSection.addEventListener("click", toggleMenu);
                    refs.advantagesSection.addEventListener("click", toggleMenu);
                    refs.productsSection.addEventListener("click", toggleMenu);
                    refs.contactsSection.addEventListener("click", toggleMenu);

                    function toggleMenu() {
                        refs.menu.classList.toggle("is-hidden");
                    }
                })();