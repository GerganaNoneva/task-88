import "./scss/app.scss";
import Application from "./js/Application.js";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  document.querySelector('article').addEventListener('click', ()=>{
    const app = new Application();
    // Used to access the app instance by the automated tests
    window.__JS_APP = app;
  })
  
});
