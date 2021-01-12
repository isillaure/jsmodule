// const getData = (url, funcionALlamar, selector, method = 'GET') => {
//     const httpRequest = new XMLHttpRequest()
//     httpRequest.addEventListener('readystatechange', () => {
//         if(httpRequest.readyState !== 4) {
//             return 
//         } else {
//             if(httpRequest.status >= 200 && httpRequest.status <= 299){
//                 const response  = httpRequest
//                 const objectResponse = JSON.parse(response.responseText)

//                 functionCallback(selector, objectResponse)

//             } else {
//                 console.log(`Error loading page ${httpRequest.status} ${httpRequest.statusText}`)
//             }
//         } 

//     })

//     httpRequest.open("GET", url, true)
//     httpRequest.send(null)
// }

// const profileXML = httpRequest.responseXML.getElementsByTagName('Profile')[0]
// const profileText = profileXML.childNodes[0].nodeValue

let xhr = new XMLHttpRequest();

xhr.open('GET', '/article/xmlhttprequest/hello.txt', true);

try {
    xhr.send();
    if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        alert(xhr.response);
    }
} catch (err) { // instead of onerror
    alert("Request failed");
}

var httpRequest;

/*
 * This method is called when the author is selected
 * It creates XMLHttpRequest object to communicate with the 
 * servlet
 */
function getProfile(authorSelected) {
    var url = 'http://www.javareference.com/' +
        'exampledemo/GetAuthorsProfile?author=' +
        authorSelected;

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () {
        processRequest();
    };
    httpRequest.send(null);
}

/*
 * This is the call back method                
 * If the call is completed when the readyState is 4
 * and if the HTTP is successfull when the status is 200
 * update the profileSection DIV
 */
function processRequest() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the XML send by the servlet
            var profileXML = httpRequest.responseXML.getElementsByTagName("Profile")[0];

            //Update the HTML
            updateHTML(profileXML);
        } else {
            alert("Error loading page\n" +
                httpRequest.status + ":" +
                httpRequest.statusText);
        }
    }
}

/*
 * This function parses the XML and updates the 
 * HTML DOM by creating a new text node is not present
 * or replacing the existing text node.
 */
function updateHTML(profileXML) {
    //The node valuse will give actual data
    var profileText = profileXML.childNodes[0].nodeValue;

    //Create the Text Node with the data received
    var profileBody = document.createTextNode(profileText);

    //Get the reference of the DIV in the HTML DOM by passing the ID
    var profileSection = document.getElementById("profileSection");

    //Check if the TextNode already exist
    if (profileSection.childNodes[0]) {
        //If yes then replace the existing node with the new one
        profileSection.replaceChild(profileBody,
            profileSection.childNodes[0]);
    } else {
        //If not then append the new Text node
        profileSection.appendChild(profileBody);
    }
}