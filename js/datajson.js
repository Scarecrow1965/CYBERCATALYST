//
// IMPORT JSON
//

// original jsons taken from: https://stefangabos.github.io/world_countries/
// moved to Github Scarecrow1965 under https://github.com/Scarecrow1965/DROPDOWN.git
// from "https://github.com/Scarecrow1965/DROPDOWN/blob/main/countries/countries.json"
// or https://github.com/Scarecrow1965/DROPDOWN/blob/c43d7f2351fa48a05a4aec29c35899a0c4dd8939/countries/countries.json
// id, alpha2, en=english fr=french
// from "https://github.com/Scarecrow1965/DROPDOWN/blob/main/subdivisions/subdivisions.json"
// "https://github.com/Scarecrow1965/DROPDOWN/blob/c43d7f2351fa48a05a4aec29c35899a0c4dd8939/subdivisions/subdivisions.json"
// country = alpha2, code = alpha2-numbers = states/provinces, name
// from "https://github.com/Scarecrow1965/DROPDOWN/blob/main/phones/phonecodes.json"
// "https://github.com/Scarecrow1965/DROPDOWN/blob/c43d7f2351fa48a05a4aec29c35899a0c4dd8939/phones/phonecodes.json"
// using en=english from countries = name(english only), flag=alpha2 + .png, number = phone code
// also depending on size of graphics
// local jsons are located at: /testing/json/


//gitlab.com/catamphetamine/libphonenumber-js.git

// import country from "../testing/json/countries.json" assert { type: "json" };
// import province from "../testing/json/subdivisions.json" assert {type: "json"};
// import phone from "../testing/json/phonecodes.json" assert {type: "json"};

// console.log(country.id);
// console.log(province.name);
// console.log(phone.flag);

// const country1 = document.getElementById("employer_country");
// const province1 = document.getElementById("employer_province");
// const phone1 = document.getElementById("employer_homephone");
// const mobile1 = document.getElementById("employer_mobilephone");


// ======== MUST KEEP ==========
// AN EXAMPLE FROM MOZILLA
// // Example POST method implementation:
// async function postData(url = "", data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }
// 
// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });
// ------------------------------------------
// UPLOADING JSON DATA FROM MOZILLA
// async function postJSON(data) {
//   try {
//     const response = await fetch("https://example.com/profile", {
    // // Checking that fetch was successful
    //  if (!response.ok) {
    //    throw new Error("Network response was not OK");
    //  }
//       method: "POST", // or 'PUT'
//       credentials: "same-origin",
   //       headers: {
   //         "Content-Type": "application/json",
   //       },
   //       body: JSON.stringify(data),
   //     });

   //     const result = await response.json();
   //     console.log("Success:", result);
   //   } catch (error) {
   //     console.error("Error:", error);
   //   }
   // }

   // const data = { username: "example" };
   // postJSON(data);
// 
//    RESPONSE: JSON() METHOD FROM MOZILLA
//    const myList = document.querySelector("ul");
//    const myRequest = new Request("products.json");

//    fetch(myRequest)
//      .then((response) => response.json())
//      .then((data) => {
//        for (const product of data.products) {
//          const listItem = document.createElement("li");
//          listItem.appendChild(document.createElement("strong")).textContent =
//            product.Name;
//          listItem.append(` can be found in ${product.Location}. Cost: `);
//          listItem.appendChild(
//            document.createElement("strong")
//          ).textContent = `£${product.Price}`;
//          myList.appendChild(listItem);
//        }
//      })
//      .catch(console.error);
// 
// =============================================================
