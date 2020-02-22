const STORE = {
  apiKey: 'kz3NOTmurcVo44zaGtCJazRfj4gmtNrx5rpMdoZC',
  apiUrl: 'https://developer.nps.gov/api/v1/parks'
};

// Each API request contains:
// Resource Endpoint
// Query String Parameters
// HTTP Request Header with an API Key


// Display Functions:
const displayParks = function(parks) {
  $( '.parkData' ).html('');
  parks.forEach(park => {
    const parkCard = `
      <section class="parkCard">
        <h2>${park.fullName}</h2>
        <article>${park.description}</article>
        <a href="${park.url}" target="_blank">Park Website</a>
      </section>
    `;
    $( '.parkData' ).append(parkCard);
  });
};





// Handler Functions:
const handleSearchSubmit = function() {
  $( '.parks' ).submit(function(e) {
    e.preventDefault();
    let state = $('#states').val();
    let limit = $('#maxResults').val();
    handleApiCall(state, limit);
});
};

const handleApiCall = function(state, limit) {
  fetch(`${STORE.apiUrl}?stateCode=${state}&limit=${limit}&api_key=${STORE.apiKey}`)
    .then(response => response.json())
    .then(responseJson => {
      let parkData = responseJson.data.map(park => {
        return {
          description: park.description,
          fullName: park.fullName,
          url: park.url
        }
      })
      displayParks(parkData);
    })
    .catch(error => console.log('Something went wrong. Try again later.'));
};

// Render Functions:



const handleVacationSearch = function () {
  handleSearchSubmit();
};



$(handleVacationSearch);




