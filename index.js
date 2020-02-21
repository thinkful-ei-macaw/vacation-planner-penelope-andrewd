STORE = {

};

// Display Functions:






// Handler Functions:
const handleSearchSubmit = function() {
  $( '.parks' ).submit(function(e) {
    e.preventDefault();
    let state = $('#states').val();
    let amount = $('#maxResults').val();
    console.log(state, amount);
});
};



// Render Functions:



const handleVacationSearch = function () {
  handleSearchSubmit();
}




$(handleVacationSearch);