
// AN ARRAY OF OBJECTS THAT CONTAINS INFORMATION ABOUT THE BOOKS
const books = [
  {
    // BOOK 1
    img: {
      url: "./images/the notebook.jpg",
      alt: "The Notebook",
    },
    title: "The Notebook",
    author: "Nicholas Sparks",
    genre: "romance",
    length: "longer Epics",
    storytellingType: "character-driven",
    plot: "A timeless love story spanning decades, focusing on the deep emotional bond between Noah Calhoun and Allie Hamilton as they navigate obstacles of class and family.",
  },
  {
    // BOOK 2
    img: {
      url: "./images/safe haven.jpg",
      alt: "safe haven",
    },
    title: "safe haven",
    author: "Nicholas Sparks",
    genre: "romance",
    length: "longer Epics",
    storytellingType: "plot-driven",
    plot: "A gripping story of love and suspense as a young woman with a mysterious past finds refuge in a small coastal town and forms a bond with a widowed father, uncovering dark secrets along the way.",
  },
  {
    // BOOK 3
    img: {
      url: "./images/last song.jpg",
      alt: "The last song",
    },
    title: "The last song",
    author: "Nicholas Sparks",
    genre: "romance",
    length: "shorter reads",
    storytellingType: "character-driven",
    plot: "A character-driven story following the emotional journey of Ronnie Miller as she spends a transformative summer reconnecting with her estranged father and discovering the power of love and forgiveness.",
  },
  {
    // BOOK 4
    img: {
      url: "./images/lucky one.jpg",
      alt: "The Lucky one",
    },
    title: "The Lucky one",
    author: "Nicholas Sparks",
    genre: "romance",
    length: "shorter reads",
    storytellingType: "plot-driven",
    plot: "A plot-driven tale of fate and redemption as a Marine, Logan Thibault, returns from Iraq on a quest to find the woman in a photograph that kept him safe during the war.",
  },

  {
    // BOOK 5
    img: {
      url: "./images/our impossible love.jpg",
      alt: "Our Impossible Love",
    },
    title: "Our Impossible Love",
    author: "Durjoy Datta",
    genre: "romance",
    length: "longer Epics",
    storytellingType: "character-driven",
    plot: "A poignant narrative of unrequited love and self-discovery as two young individuals navigate the complexities of their relationship, exploring themes of love, friendship, and societal expectations.",
  },
  {
    // BOOK 6
    img: {
      url: "./images/when only love remains.jpg",
      alt: "When Only Love Remains",
    },
    title: "When Only Love Remains",
    author: "Durjoy Datta",
    genre: "romance",
    length: "longer Epics",
    storytellingType: "plot-driven",
    plot: "A contemporary romance exploring the complexities of love, loss, and second chances as Avanti and Dev embark on a journey of healing and self-discovery.",
  },
  {
    // BOOK 7
    img: {
      url: "./images/if its not forever.jpg",
      alt: "If It's Not Forever",
    },
    title: "If It's Not Forever",
    author: "Durjoy Datta",
    genre: "romance",
    length: "shorter reads",
    storytellingType: "character-driven",
    plot: "A character-driven romance novel driven by suspense and mystery as Deb and Avantika embark on a journey to uncover the truth behind a tragic incident that changes their lives forever.",
  },
  {
    // BOOK 8
    img: {
      url: "./images/worlds best boyfriend.jpg",
      alt: "World's Best Boyfriend",
    },
    title: "World's Best Boyfriend",
    author: "Durjoy Datta",
    genre: "romance",
    length: "shorter reads",
    storytellingType: "plot-driven",
    plot: "A plot-driven romance filled with twists and turns as a young man struggles to win back the love of his life after a series of misunderstandings.",
  },

  {
    // BOOK 9
    img: {
      url: "./images/murder in the orient express.jpg",
      alt: "Murder on the Orient Express",
    },
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    genre: "mystery/thriller",
    length: "longer Epics",
    storytellingType: "character-driven",
    plot: "A classic whodunit featuring detective Hercule Poirot, where the focus is on unraveling the psychological motivations of the passengers aboard the train.",
  },
  {
    // BOOK 10
    img: {
      url: "./images/death on nile.jpg",
      alt: "Death on the Nile",
    },
    title: "Death on the Nile",
    author: "Agatha Christie",
    genre: "mystery/thriller",
    length: "longer Epics",
    storytellingType: "plot-driven",
    plot: "A gripping mystery set aboard a luxurious cruise ship on the Nile River, filled with twists and turns as Hercule Poirot investigates a murder amidst a web of deceit and betrayal.",
  },
  {
    // BOOK 11
    img: {
      url: "./images/murder of roger ackroyd.jpg",
      alt: "The Murder of Roger Ackroyd",
    },
    title: "The Murder of Roger Ackroyd",
    author: "Agatha Christie",
    genre: "mystery/thriller",
    length: "shorter reads",
    storytellingType: "character-driven",
    plot: "A character-driven mystery masterpiece where the intricate plot revolves around the development of the characters, leading to a shocking revelation at the end.",
  },
  {
    // BOOK 12
    img: {
      url: "./images/and then there were none.jpg",
      alt: "And Then There Were None",
    },
    title: "And Then There Were None",
    author: "Agatha Christie",
    genre: "mystery/thriller",
    length: "shorter reads",
    storytellingType: "plot-driven",
    plot: "A fast-paced, plot-driven thriller where ten strangers are lured to an isolated island and begin to die one by one, leading to a thrilling race to uncover the killer's identity",
  },

  {
    // BOOK 13
    img: {
      url: "./images/someone we know.jpg",
      alt: "Someone We Know",
    },
    title: "Someone We Know",
    author: "shari Lapena",
    genre: "mystery/thriller",
    length: "longer Epics",
    storytellingType: "character-driven",
    plot: "A contemporary psychological thriller delving into the complex dynamics of a suburban neighborhood as dark secrets are unearthed and neighbors become suspects in a series of crimes.",
  },
  {
    // BOOK 14
    img: {
      url: "./images/stranger in house.jpg",
      alt: "A Stranger in the House",
    },
    title: "A Stranger in the House",
    author: "shari Lapena",
    genre: "mystery/thriller",
    length: "longer Epics",
    storytellingType: "plot-driven",
    plot: "A gripping suspense novel filled with unexpected twists and turns as a woman's life is turned upside down when she wakes up with no memory of a night that ends in tragedy, leading to a race to uncover the truth before it's too late.",
  },
  {
    // BOOK 15
    img: {
      url: "./images/unwanted guest.jpg",
      alt: "An Unwanted Guest",
    },
    title: "An Unwanted Guest",
    author: "shari Lapena",
    genre: "mystery/thriller",
    length: "shorter reads",
    storytellingType: "character-driven",
    plot: "A character-driven thriller set in a remote hotel, where tensions rise and secrets are revealed as guests trapped by a snowstorm become suspects in a murder investigation.",
  },
  {
    // BOOK 16
    img: {
      url: "./images/couple next door.jpg",
      alt: "The Couple Next Door",
    },
    title: "The Couple Next Door",
    author: "shari Lapena",
    genre: "mystery/thriller",
    length: "shorter reads",
    storytellingType: "plot-driven",
    plot: "A fast-paced thriller driven by its suspenseful plot twists as a couple's life unravels when their baby disappears during a dinner party, leading to shocking revelations and betrayals.",
  },
];


//  AN OBJECT TO STORE THE RESULTS OF THE FORM ENTERED BY THE USER
var userBook = {
  img: {
    url: "",
    alt: "",
  },
  title: "",
  author: "",
  genre: "",
  length: "",
  storytellingType: "",
  plot: "",
};

window.onload = pageLoad;
function pageLoad() 
{

  // HIDE ALL SECTIONS AND JUST DISPLAY THE FIRST SCREEN
  $("section").hide();
  $("#submit").hide();

  // CLICKING ON "CLICK HERE TO CONTINUE" AND "HOME" WILL START THE NAVIGATION THROUGH THE FORM
  $("#continue").on("click",navigate);
  $("#home").on("click",navigate);
  
  // CLICKING ON 'ADD TO LIST' BUTTON WILL CALL THE ADDTOLIST FUNCTION WHICH WILL ADD THE PARTICULAR BOOK RECOMMENDATION INTO A LIST FOR THE USER
  $("#add-to-list").on("click",addToList);

  // CLICKING ON "LIST" WILL SHOW THE LIST FOR THE USER
  $("#list-section").on("click",showlist);



  // CHECK FUNCTION ACTUALLY CHECKS OR EQUATES THE USER OBJECT TO THE ARRAY OF BOOK OBJECTS TO FIND THE PARTICULAR BOOK THAT MATCHES WITH THE USER PREFERENCE
  function check() {
   
    // VAR TO HANDLE ALL THE FORM RELATED CODE
    var formHandle = document.forms.bookForm;

    // GETTING THE VALUES FROM THE FORM AND INPUT IT TO THE USER OBJECT
    // GENRE, AUTHOR , LENGTH AND THE TYPE OF THE BOOK ARE THE CONTRAINTS USED TO FIND THE BOOK
    userBook.genre = formHandle.genre.value;
    userBook.author = formHandle.author.value;
    userBook.length = formHandle.length.value;
    userBook.storytellingType = formHandle.storytelling.value;


    // ITERATING THROUGH THE OBJECT TO FIND THE BOOK THAT MATCHES
    books.forEach(function (index) {

      if (
        // CHECKING IF THE PARTICULAR ARRAY INDEX (A BOOK OBJECT) IS SAME AS OUR USER OBJECT
        // CONVERTING EVERYTHING TO LOWERCASE TO AVOID ANY CASE OF UNMATCHING
        index.genre.toLowerCase() === userBook.genre.toLowerCase() &&
        index.author.toLowerCase() === userBook.author.toLowerCase() &&
        index.length.toLowerCase() === userBook.length.toLowerCase() &&
        index.storytellingType.toLowerCase() ===
          userBook.storytellingType.toLowerCase()
      ) {
        // ONCE IT FIND THE SAME GENRE, AUTHOR, LENGTH AND TYPE(WHICH IS UNIQUE FOR ALL THE OBJECTS)
        // USER OBJECT IS FILLED BY THE MATCHED OBJECT
        // console.log(userBook);
        // console.log(index);
        userBook = index;
        
      } 
      else{
        // error handling
        document.getElementById("heading-under-show").innerHTML = "Sorry, can not recommend a book if all the questions arenot answered. please choose again.";
        // $("heading-under-show").html("Sorry, can not recommend a book if all the questions arenot answered. please choose again.")
        $("heading-under-show").show();

      }
    });

    // calling the show book function to show the recommended book
    showBook();

    return false;
  }


  // function to hide and show to form sections as required
  function navigate() {
    var formHandle = document.forms.bookForm;
    resetForm();

    $("section").hide();
    $("#submit").hide();
    $("#home-head").fadeOut();

    // GENRE FORM
    $("#genre-form").delay(1000).fadeIn(300);

    
    if (formHandle.genre.value !== null) {
      $("#genre-to-auth").on("click", function () {
        $("#genre-form").fadeOut(200);
        $("#authors").fadeIn(400);
        if (formHandle.genre.value === "romance") {
          $("#romance-authors").fadeIn(400);
        } else {
          $("#mystery-thriller-authors").fadeIn(400);
        }

        $("#auth-to-length").on("click", function () {
          $("#authors").fadeOut(200);
          $("#book-length-form").fadeIn(400);
          if (formHandle.length.value !== null) {
            $("#length-to-story").on("click", function () {
              $("#book-length-form").fadeOut(200);
              $("#book-storytelling").fadeIn(400);
              $("#submit").fadeIn(400);
              $("#submit").on("click", check);
            });
          }
          //   return false;
        });

        // return false;
      });
    }
  }

  //  function to show the book 
  function showBook() {
    $("section").hide();
    console.log(userBook.title);
    if (userBook.img.url !== "") {
      $("#book-cover").attr("src", userBook.img.url);
    } else {
      $("#book-cover").attr("alt", userBook.img.alt);
    }
    $("#book-name").html(userBook.title);
    $("#plot").html(userBook.plot);
    $("#recommended-book-info").show();
  }

// this function adds the book that is shown to user , inside the list tab
function addToList(){
  $("section").hide();
    $("#submit").hide();
    $("#home-head").fadeOut();

    // creating all the variables
    // this block of code craetes new divs everytime this function is called and then the innerhtml of these is adjusted to display the details of the book
    var list_display = document.getElementById("list-display");
    var one_book = document.createElement("div");
    var one_book_img_div = document.createElement("div");
    var one_book_img = document.createElement("img");
    var one_book_details = document.createElement("div");
    var one_book_name = document.createElement("div");
    var one_book_author = document.createElement("div");

// adding classes to the elements declared above
    one_book.classList.add("list-user-books");
    one_book_img_div.classList.add("book_img_div");
    one_book_img.classList.add("book_img");
    one_book_details.classList.add("tbr_book_info")
    one_book_name.classList.add("name_of_book");
    one_book_author.classList.add("name_of_author");

    // changing the innerhtml of the divs created
    one_book_name.innerText = userBook.title;
    one_book_author.innerText = userBook.author;
    one_book_img.setAttribute("src",userBook.img.url);
    one_book_img.setAttribute("alt","book cover image");


// appending all the divs one by one into the main div
    one_book_img_div.appendChild(one_book_img);
    one_book_details.appendChild(one_book_name);
    one_book_details.appendChild(one_book_author);

    one_book.appendChild(one_book_img_div);
    one_book.appendChild(one_book_details);

    list_display.appendChild(one_book);

  $("#list-display").fadeIn(2000);
}


// fucntion to show the tab on clicking the "list" tab in the nav
// this is also called when the user adds something to the list
function showlist(){
  $("section").hide();
    $("#submit").hide();
    $("#home-head").fadeOut();

    $("#list-display").fadeIn(2000);

}


// resets all the values of the form and clears the object for next recommendation
// everytime user presses "home" tab, this function is called
function resetForm(){
  var formHandle = document.forms.bookForm;
  formHandle.reset();
  userBook = {
    img: {
      url: "",
      alt: "",
    },
    title: "",
    author: "",
    genre: "",
    length: "",
    storytellingType: "",
    plot: "",
  };
 
}



// returning false the form doesnt submit
  return false;
}
