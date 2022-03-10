const listElement = document.createElement("li")
const newA = document.createElement("a")
// const menu = document.getElementById("main-nav").getElementsByTagName("ul")[0]
// eerst element creeren en daarna element 
// menu.appendChild(listElement)
// listElement.appendChild(newA)
// newA.innerHTML = "test5"

// menu.insertBefore(listElement, menu.getElementsByTagName("li")[0])
// const ul-item - class = ".blue"
// Stap 2: Voeg eventueel dynamisch (meerdere) properties toe aan je HTML element

//Bijvoorbeeld:
// listItem.classList.add("list-item-class");
// Stap 3: Selecteer het element waar je jouw nieuwe element aan vast wilt maken.

// //Bijvoorbeeld (als je maar 1 ul hebt):
// const list = document.querySelector("ul");
// Stap 4: Bepaal hoe het bestaande element (in dit geval list) en het nieuwe element (in dit geval list-item) zicht tot elkaar verhouden (in dit geval een parent <> child). Append het nieuwe element (list-item) aan het geselecteerde element (list) met de toepasselijke functie

// //Bijvoorbeeld:
// list.appendChild(listItem);

// weghalen
const parent = document.getElementById("main-nav").getElementsByTagName("ul")[0]
const child = parent.getElementsByTagName("li")[2]

const removed = parent.removeChild(child);
//  in een const opgeslagen want dan kan je hem nog een keer terughalen door bijv":
// parent.appendChild(removed);