const client_id = 'fa2d5300f15e44ef90f1494e396990e1';
const redirect_uri = 'http://localhost:3000/';
const scope = 'playlist-modify-private playlist-modify-public';

let url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

let accessToken;

const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
        } else {
            window.location = url
        }
    },

    search(searchInput) {
        if (searchInput=== "") {
            return
        } else {
            const accessToken = Spotify.getAccessToken();
            return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchInput}`, {
                headers: {
                  Authorization: `Bearer ${accessToken}`
                }
              }).then(response => {
                return response.json();
              }).then(jsonResponse => {
                if (!jsonResponse.tracks) {
                  return [];
                }
                return jsonResponse.tracks.items.map(track => ({
                  id: track.id,
                  name: track.name,
                  artist: track.artists[0].name,
                  album: track.album.name,
                  uri: track.uri
                }));
              });
        }
    }

}
 
export default Spotify