let bgColor = 0;

function darkMode() {

    // if (bgColor = 0) {
    //     document.getElementById("test2").style.backgroundColor = "black";
    //     let bgColor = 1
    // }
    // else {
    //     document.getElementById("test2").style.backgroundColor = "#FAF9F6";
    // }

    switch (bgColor) {
        case 0:
            // Set Dark Mode
            bgColor = 1
            document.getElementById("test2").style.backgroundColor = "#141313";
            document.getElementById("test2").style.color = "#fcf8f7";
            document.getElementById("switchTheme").innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480.12-406q30.88 0 52.38-21.62 21.5-21.62 21.5-52.5t-21.62-52.38q-21.62-21.5-52.5-21.5t-52.38 21.62q-21.5 21.62-21.5 52.5t21.62 52.38q21.62 21.5 52.5 21.5ZM480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM223-417H17v-126h206v126Zm720 0H737v-126h206v126ZM417-737v-206h126v206H417Zm0 720v-206h126v206H417ZM255-616 123-745l88-93 130 130-86 92Zm494 494L618-253l86-89 133 127-88 93ZM618-704l127-133 93 88-130 130-90-85ZM122-211l131-131 89 86-127 133-93-88Zm358-269Z"/></svg>`
            
            break;

            // Set Light Mode
        default:
            bgColor = 0
            document.getElementById("test2").style.backgroundColor = "#fcf8f7";
            document.getElementById("test2").style.color = "#424341";
            document.getElementById("switchTheme").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#313030"><path d="M479.82-105q-156.17 0-265.5-109.32Q105-323.65 105-479.82 105-636 214.38-746 323.75-856 480-856q11 0 22.5.5T525-853q-29 33-47 74t-18 87q0 97.08 68.54 165.04T695-459q45 0 86-17.5t73-46.5q1 11 1.5 21.21.5 10.2.5 20.79 0 156-110 266T479.82-105Zm.18-126q62 0 116-28.5t87-77.5q-10 1-20 1t-19-2q-119-17-203-98.5T338-645q-1-9-1.5-19t1.5-19q-48 34-77.5 88T231-480q0 103.16 72.92 176.08Q376.84-231 480-231Zm-23-226Z"/></svg>`

        }

    console.log(bgColor)
}

// function checkBgColor() {
//     const backgroundColor = document.getElementById("body")

//     const fetchBgColor = backgroundColor.getAttribute("bgColor") 
// }

var displayDimension = window.innerWidth;

function checkWidth() {
    document.getElementById("searchIcon").style.marginLeft = displayDimension - 80 + "px";
    document.getElementById("switchTheme").style.marginLeft = displayDimension - 136 + "px";

    
    if (window.innerWidth !== displayDimension) {
        displayDimension = window.innerWidth;
        }

        console.log(displayDimension)
    }


setInterval(checkWidth, 100); // Check every 50 milliseconds
/////////////////////////////////////////////
// let x = 0

// function test(){
//    const x = document.getElementById("productTable").style.width = displayDimension / 5 + "%";
//    console.log(x)
// }



// window.onload = test

