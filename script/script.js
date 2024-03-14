const books = [
    {title: "Book1", genre : "mystery"},
    {title: "Book12", genre : "romance"}
]
  
window.onload = pageLoad;
function pageLoad(){
    var formHandle = document.forms.bookForm;
    document.getElementById("submit").onclick = check;
    function check(){
        console.log(document.getElementByName("genre").value);
    }
    return false;
};