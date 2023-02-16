import { clearInputs } from "../helpers/clearInputs";
import { postData } from "../helpers/postData";

const localUrl = "/static/mail.php";
const originUrl = "http://rudakevent.com/static/mail.php";

const sendingDataForms = () => {
  if (document.querySelectorAll('[data-form="sending"]').length) {
    document.querySelectorAll('[data-form="sending"]').forEach((form) => {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const textMessage = form.querySelector(".send-message");

        textMessage.style.display = "block";
        textMessage.innerText = "Sending...";

        try {
          const formData = new FormData(form);
          const { message, result } = await postData(originUrl, formData);

          if (result === "success") {
            console.log(message);
            textMessage.innerText = message;
          } else {
            console.log(message);
            textMessage.innerText = message;
          }
        } catch (error) {
          console.error("Error: ", error);
        } finally {
          clearInputs(form.querySelectorAll("input"));
          setTimeout(() => {
            textMessage.style.display = "none";
            textMessage.innerText = "";
          }, 5000);
        }
      });
    });
  }
};

export { sendingDataForms };
