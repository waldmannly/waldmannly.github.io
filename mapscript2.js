import jwtDecode from 'https://esm.run/jwt-decode';
console.log(typeof onSignIn)
function onSignIn(response) {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    console.log(response);
    console.log(response.credential);
    const responsePayload = jwtDecode(response.credential);
    console.log(responsePayload);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
}