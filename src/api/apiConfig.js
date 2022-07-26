const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ef9901c0aae168da85a5f8cd5a8c1f08',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;