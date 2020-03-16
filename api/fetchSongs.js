export default (searchTerm) => {
  return new Promise( async(resolve, reject) => {
    try {
      const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=song`)
      const { results } = await response.json();

      const songs = results.map((item) => ({ artist: item.artistName, song: item.trackName, image: item.artworkUrl100, preview: item.previewUrl }));

      resolve(songs)
    } catch(err) {
      reject(err);
    }
  })
}