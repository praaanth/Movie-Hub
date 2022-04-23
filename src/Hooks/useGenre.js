// inorder to get the data based on the selected Genres we need to convert the 
// seleted id of the geners in to string and then pass it in the url
const useGenre=(selectedGenres)=>{
      if(selectedGenres.length<1) return "";
      // copy the seletd geners in to temp variable to convert the the into resultant string
  const GenreIds=selectedGenres.map(genre=>genre.id);
  // convert to string 
    const genreforURL=GenreIds.join(",");
    return genreforURL;
};
export default useGenre;