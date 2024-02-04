export const generateMovie = ({
    title, 
    year,  
    rated, 
    runtime, 
    countries,
    genres, 
    director, 
    writers,
    actors,
    plot, 
    poster, 
    imdb, 
    tomato,
    metacritic,
    awards,
    type
}) => {

    const day = new Date();
    let currentYear = day.getFullYear();

    if (!title || typeof title !== 'string' || title.length === 0) {
    throw new Error("Title is required");
    };

    if (!year || typeof year !== 'number' || year < 1888 || year > currentYear) {
        throw new Error("Invalid year. It must be a number between 1888 and " + currentYear);
    };

    if (!runtime || typeof runtime !== 'number' || runtime < 1) {
        throw new Error("Invalid runtime. It must be a number greater than 0");
    };

    if (!genres || genres.length < 1) {
        throw new Error("At least one genre required");
    };

    if (!director || typeof director !== 'string' || director.length === 0) {
        throw new Error("Director is required");
    };

    if (!plot || typeof plot !== 'string' || plot.length === 0 ) {
        throw new Error("Plot is required");
    };

    if (!poster || typeof poster !== 'string' || poster.includes("http") === false) {
        throw new Error("Invalid poster URL. It must start with 'http'");
    };

    if (!imdb || typeof imdb.rating !== 'number' || imdb.rating < 1 || imdb.rating > 10) {
        throw new Error("IMDb rating is required and must be between 1 and 10");
    };

    return {
        title,
        year,
        rated,
        runtime,
        countries,
        genres,
        director,
        writers,
        actors,
        plot,
        poster,
        imdb,
        tomato,
        metacritic,
        awards,
        type
    }
};
