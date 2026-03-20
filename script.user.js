// ==UserScript==
// @name         Test Script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  test script
// @match        https://newtrier.instructure.com/courses/1869257/grades
// @updateURL   https://raw.githubusercontent.com/firemike208/tampermonkey-scripts/main/script.user.js
// @downloadURL https://raw.githubusercontent.com/firemike208/tampermonkey-scripts/main/script.user.js

// @grant        none
// ==/UserScript==

const replacements = {
  "60": "101",
  "315": "413",
  "76": "87",
  "78": "90",
  "69": "89",
  "65": "112"
};

function replaceNumbers() {
  let html = document.body.innerHTML;

  for (const [oldVal, newVal] of Object.entries(replacements)) {
    const regex = new RegExp(oldVal, "g");
    html = html.replace(regex, newVal);
  }

  document.body.innerHTML = html;
}

replaceNumbers();

setInterval(replaceNumbers, 1000);
