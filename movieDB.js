var movies = 
    [{
    title: "Spiderman",
    rating: 3.5,
    watched: true
    },
    {
    title: "Jumanji",
    rating: 5,
    watched: true
    },
    {
    title: "The Greatest Showman",
    rating: 4.5,
    watched: false
    },
    {
    title: "Gladiator",
    rating: 5,
    watched: false
    }];
// for (var i =0; i < movies.length; i++){
//     if (movies[i].watched == true){
//     console.log( "You have watched"+ "\" " + movies[i].title +"\" " + "-" +  movies[i].rating  +" stars");
//     }else
//     {
//     console.log( "You have not watched"+ "\" " + movies[i].title +"\" " + "-" +  movies[i].rating  +" stars");
// }
// };
movies.forEach(function(movies){
    console.log(buildMovie(movies));
});

function buildMovie(movies){
    var result = "You have";
    if (movies.watched){
        result += "watched";
    }else{
        result += " not watched";
    }
    result += "\" "+ movies.title + " \" " + movies.rating + " Stars ";
    return result;
}