function outer() {
    let movie = 'Amadeus';
    
    function inner() {
        let movie = 'Ace Ventura 2'
        

        function extraInner() {
            console.log(movie.toUpperCase());
        }
        extraInner();
    }
    inner();
}