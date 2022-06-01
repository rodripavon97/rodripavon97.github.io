window.addEventListener("DOMContentLoaded", () => {
    function navbarActive() {
        const activePage = window.location.pathname;
        const navLinks = document.querySelectorAll("nav a").forEach((link) => {
            if (link.href.includes(`${activePage}`)) {
                link.classList.add("active");
            }
        });
    }
    function formSend() {
        const myform = document.querySelector("form");
        const inputName = myform.querySelector('#name');
        const inputEmail = myform.querySelector("#email");
    const inputPhone = myform.querySelector("#phone");
    const inputMessage = myform.querySelector("#message");
    const submitButton = myform.querySelector("#submit");
    
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
      const contactInfo = {
        name: inputName.value,
        email: inputEmail.value,
        phone: inputPhone.value,
        message: inputMessage.value,
    };
      console.log(contactInfo);
      const savedData = JSON.parse(localStorage.getItem("contacts")) || [];
      if (
          contactInfo.name !== "" &&
        contactInfo.email !== "" &&
        contactInfo.phone !== "" &&
        contactInfo.message !== ""
        ) {
            localStorage.setItem(
          "contacts",
          JSON.stringify([...savedData, contactInfo])
        );
      } else {
          alert("Por favor llena todos los campos");
      }
    });
}
    

navbarActive();
formSend();
});
