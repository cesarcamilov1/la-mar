const whatsappNumber: string = import.meta.env.VITE_WHATSAPP_NUMBER;

export function changePage() {
  document.querySelector("#app")!.innerHTML = `
  <main>
    <h1>You owe me an "Elote en vaso" for participating</h1>
    <button id="si" class="btn"><a href="https://api.whatsapp.com/send/?phone=${whatsappNumber}&text&type=phone_number&app_absent=0">Yes</a></button>
    <button id="no" class="btn"><a href="https://api.whatsapp.com/send/?phone=${whatsappNumber}&text&type=phone_number&app_absent=0">No</a></button>
  </main>
  `;
}
