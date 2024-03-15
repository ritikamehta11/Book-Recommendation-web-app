const books = [
    {title: "Book1", genre : "mystery"},
    {title: "Book12", genre : "romance"}
]
  
window.onload = pageLoad;
function pageLoad(){
    var formHandle = document.forms.bookForm;
    
    document.getElementById("submit").onclick = check;
    function check()
    {
        var genreInput = formHandle.genre.value;
        // console.log(formHandle.genre.value);
        // console.log(books[1].genre);
        books.forEach(function(index){
            // console.log(index.genre);
            // console.log(genreInput);

            if(index.genre === genreInput)
            console.log(index.genre+" "+ genreInput);
        });
    }
    return false;
};