let searchButton = document.getElementById("searchButton");
let searchInput = document.getElementById("searchInput");
let cancelSearch = document.getElementById("cancelSearch");

searchButton.addEventListener("click",function(){
    cancelSearch.style.display = "block";
    searchInput.style.display = "block";
    searchButton.style.display = "none";
    searchButton.focus();
})

cancelSearch.addEventListener("click",function(){
    cancelSearch.style.display = "none";
    searchInput.style.display = "none";
    searchInput.value = "";
    searchButton.style.display = "block";
})