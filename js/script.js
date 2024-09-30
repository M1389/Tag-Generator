"use strict";

let sectionEl = document.querySelector(".generated-text");
let alldivEl = document.querySelectorAll(".generated-text div");
const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
];

let contentEl = document.querySelector("#tagContent");
let tagTypeEl = document.querySelector("#tagName");
let styleTagEl = document.querySelector("#styleTag");
let atterbuteEl = document.querySelector("#attrTag");
let classNameEl = document.querySelector("#classNtag");
let positionEl = document.querySelector("#positionTag");
let submitBtnEl = document.querySelector("#createBtn");

// htmlTags.map(e=>{
//     tagTypeEl.innerHTML += `<option value="${e}">e</option>`
// })
htmlTags.map((e) => {
  tagTypeEl.innerHTML += `<option value="${e}">${e}</option>`;
});

submitBtnEl.addEventListener("click", () => {
  // Filling the content
  let createdElement = document.createElement(`${tagTypeEl.value}`);
  createdElement.textContent = contentEl.value;
  // Adding class
  let clasArr = [];
  clasArr.push(classNameEl.value.split(" "));
  clasArr[0].map((e) => {
    createdElement.classList.add(e);
  });
  // Adding styles
  let styleArr = [];
  styleArr.push(styleTagEl.value.split(" "));
  createdElement.style = `${styleArr[0].join(";")}`;

  // let atterArr= []
  // atterArr.push(atterbuteEl.value.split(' '))
  let atterArr = atterbuteEl.value.split(",");
  atterArr.map((e) => {
    let newA = e.split("=");
    console.log(newA[0], newA[1]);
    createdElement.setAttribute(newA[0], newA[1]);
  });

  for (let i of alldivEl) {
    i.addEventListener("click", () => {
      if (positionEl.value == "before") {
        i.before(createdElement);
      } else if (positionEl.value == "after") {
        i.after(createdElement);
      } else if (positionEl.value == "append") {
        i.append(createdElement);
      } else if (positionEl.value == "prepend") {
        i.prepend(createdElement);
      } else {
        console.log("none");
      }
    });
  }

  console.log("hi im working");
});
