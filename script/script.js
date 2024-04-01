const books = [
    {
        img : {
            url: "./images/the notebook.jpg",
            alt: "The Notebook"
        },
        title: "The Notebook",
        author: "Nicholas Sparks",
        genre: "romance",
        length: "longer Epics",
        storytellingType: "character-driven",
        plot:"A timeless love story spanning decades, focusing on the deep emotional bond between Noah Calhoun and Allie Hamilton as they navigate obstacles of class and family."
    },
    {   
        img : {
            url: "./images/safe haven.jpg",
            alt: "safe haven"
        },
        title: "safe haven",
        author: "Nicholas Sparks",
        genre: "romance",
        length: "longer Epics",
        storytellingType: "plot-driven",
        plot:"A gripping story of love and suspense as a young woman with a mysterious past finds refuge in a small coastal town and forms a bond with a widowed father, uncovering dark secrets along the way."
    },
    {
        img : {
            url: "./images/last song.jpg",
            alt: "The last song"
        },
        title: "The last song",
        author: "Nicholas Sparks",
        genre: "romance",
        length: "shorter reads",
        storytellingType: "character-driven",
        plot:"A character-driven story following the emotional journey of Ronnie Miller as she spends a transformative summer reconnecting with her estranged father and discovering the power of love and forgiveness."
    },
    {
        img : {
            url: "./images/lucky one.jpg",
            alt: "The Lucky one"
        },
        title: "The Lucky one",
        author: "Nicholas Sparks",
        genre: "romance",
        length: "shorter reads",
        storytellingType: "plot-driven",
        plot:"A plot-driven tale of fate and redemption as a Marine, Logan Thibault, returns from Iraq on a quest to find the woman in a photograph that kept him safe during the war."
    },

    {
        img : {
            url: "./images/our impossible love.jpg",
            alt: "Our Impossible Love"
        },
        title: "Our Impossible Love",
        author: "Durjoy Datta",
        genre: "romance",
        length: "longer Epics",
        storytellingType: "character-driven",
        plot:"A poignant narrative of unrequited love and self-discovery as two young individuals navigate the complexities of their relationship, exploring themes of love, friendship, and societal expectations."
    },
    {
        img : {
            url: "./images/when only love remains.jpg",
            alt: "When Only Love Remains"
        },
        title: "When Only Love Remains",
        author: "Durjoy Datta",
        genre: "romance",
        length: "longer Epics",
        storytellingType: "plot-driven",
        plot:"A contemporary romance exploring the complexities of love, loss, and second chances as Avanti and Dev embark on a journey of healing and self-discovery."
    },
    {
        img : {
            url: "./images/if its not forever.jpg",
            alt: "If It's Not Forever"
        },
        title: "If It's Not Forever",
        author: "Durjoy Datta",
        genre: "romance",
        length: "shorter reads",
        storytellingType: "character-driven",
        plot:"A character-driven romance novel driven by suspense and mystery as Deb and Avantika embark on a journey to uncover the truth behind a tragic incident that changes their lives forever."
    },
    {
        img : {
            url: "./images/worlds best boyfriend.jpg",
            alt: "World's Best Boyfriend"
        },
        title: "World's Best Boyfriend",
        author: "Durjoy Datta",
        genre: "romance",
        length: "shorter reads",
        storytellingType: "plot-driven",
        plot:"A plot-driven romance filled with twists and turns as a young man struggles to win back the love of his life after a series of misunderstandings."
    },

    {
        img : {
            url: "./images/murder in the orient express.jpg",
            alt: "Murder on the Orient Express"
        },
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        genre: "mystery/thriller",
        length: "longer Epics",
        storytellingType: "character-driven",
        plot:"A classic whodunit featuring detective Hercule Poirot, where the focus is on unraveling the psychological motivations of the passengers aboard the train."
    },
    {
        img : {
            url: "./images/death on nile.jpg",
            alt: "Death on the Nile"
        },
        title: "Death on the Nile",
        author: "Agatha Christie",
        genre: "mystery/thriller",
        length: "longer Epics",
        storytellingType: "plot-driven",
        plot:"A gripping mystery set aboard a luxurious cruise ship on the Nile River, filled with twists and turns as Hercule Poirot investigates a murder amidst a web of deceit and betrayal."
    },
    {
        img : {
            url: "./images/murder of roger ackroyd.jpg",
            alt: "The Murder of Roger Ackroyd"
        },
        title: "The Murder of Roger Ackroyd",
        author: "Agatha Christie",
        genre: "mystery/thriller",
        length: "shorter reads",
        storytellingType: "character-driven",
        plot:"A character-driven mystery masterpiece where the intricate plot revolves around the development of the characters, leading to a shocking revelation at the end."
    },
    {
        img : {
            url: "./images/and then there were none.jpg",
            alt: "And Then There Were None"
        },
        title: "And Then There Were None",
        author: "Agatha Christie",
        genre: "mystery/thriller",
        length: "shorter reads",
        storytellingType: "plot-driven",
        plot:"A fast-paced, plot-driven thriller where ten strangers are lured to an isolated island and begin to die one by one, leading to a thrilling race to uncover the killer's identity"
    },

    {
        img : {
            url: "./images/someone we know.jpg",
            alt: "Someone We Know"
        },
        title: "Someone We Know",
        author: "shari Lapena",
        genre: "mystery/thriller",
        length: "longer Epics",
        storytellingType: "character-driven",
        plot:"A contemporary psychological thriller delving into the complex dynamics of a suburban neighborhood as dark secrets are unearthed and neighbors become suspects in a series of crimes."
    },
    {
        img : {
            url: "./images/stranger in house.jpg",
            alt: "A Stranger in the House"
        },
        title: "A Stranger in the House",
        author: "shari Lapena",
        genre: "mystery/thriller",
        length: "longer Epics",
        storytellingType: "plot-driven",
        plot:"A gripping suspense novel filled with unexpected twists and turns as a woman's life is turned upside down when she wakes up with no memory of a night that ends in tragedy, leading to a race to uncover the truth before it's too late."
    },
    {
        img : {
            url: "./images/unwanted guest.jpg",
            alt: "An Unwanted Guest"
        },
        title: "An Unwanted Guest",
        author: "shari Lapena",
        genre: "mystery/thriller",
        length: "shorter reads",
        storytellingType: "character-driven",
        plot:"A character-driven thriller set in a remote hotel, where tensions rise and secrets are revealed as guests trapped by a snowstorm become suspects in a murder investigation."
    },
    {
        img : {
            url: "./images/couple next door.jpg",
            alt: "The Couple Next Door"
        },
        title: "The Couple Next Door",
        author: "shari Lapena",
        genre: "mystery/thriller",
        length: "shorter reads",
        storytellingType: "plot-driven",
        plot:"A fast-paced thriller driven by its suspenseful plot twists as a couple's life unravels when their baby disappears during a dinner party, leading to shocking revelations and betrayals."
    },
];

var userBook = {
    title: "",
    author: "",
    genre: "",
    length: "",
    storytellingType: "",
};

window.onload = pageLoad;
function pageLoad() {
// $("label").hide();
    // $(".option").on("click",function(){
    //     $(this).css("border","2px solid grey");
    // });
    var formHandle = document.forms.bookForm;

    $("section").hide();
    $("#submit").hide();
    

    $("#continue").on("click", function () {
        // $("h2").fadeOut(200);
        // $("#continue").fadeOut(200);
        $("#home-head").fadeOut();
        $("#genre-form").delay(1000).fadeIn(300);

        if (formHandle.genre.value !== null) {
            $("#genre-to-auth").on("click", function () {
                $("#genre-form").hide();
                $("#authors").show();
                if (formHandle.genre.value === "romance") {
                    $("#romance-authors").show();
                } else {
                    $("#mystery-thriller-authors").show();
                }

                $("#auth-to-length").on("click", function () {
                    $("#authors").hide();
                    $("#book-length-form").show();
                    if (formHandle.length.value !== null) {
                        $("#length-to-story").on("click", function () {
                            $("#book-length-form").hide();
                            $("#book-storytelling").show();
                            $("#submit").show();
                            $("#submit").on("click", check);
                        });
                    }
                    //   return false;
                });

                // return false;
            });
        }
        // return false;

        


    });

    
    function check() {
        // $("#submit").hide();
        // alert("ww");
        userBook.genre = formHandle.genre.value;
        userBook.author = formHandle.author.value;
        userBook.length = formHandle.length.value;
        userBook.storytellingType = formHandle.storytelling.value;
        // console.log(formHandle.genre.value);
        // console.log(books[1].genre);
        books.forEach(function (index) {
            // console.log(index.genre);
            // console.log(genreInput);
            // console.log(userBook);

            if (
                index.genre.toLowerCase() === userBook.genre.toLowerCase() &&
                index.author.toLowerCase() === userBook.author.toLowerCase() &&
                index.length.toLowerCase() === userBook.length.toLowerCase() &&
                index.storytellingType.toLowerCase() === userBook.storytellingType.toLowerCase()
            ) {
                // console.log(index.genre+" "+ userBook.genre);
                // console.log(index.author+" "+ userBook.author);
                userBook = index;
                // console.log(index);
                console.log(userBook);
            } else {
                console.log("non");
            }
            // showBook;

        });
        showBook();

        return false;
    }
    
    

function showBook() {
    $("section").hide();
    console.log(userBook.title);
    if(userBook.img.url !== ""){
    $("img").attr("src",userBook.img.url);
}
    else{
        $("img").attr("alt",userBook.img.alt);

    }
 $("#book-name").html(userBook.title);
 $("#plot").html(userBook.plot);
        $("#recommended-book-info").show();
    


}
return false;
}