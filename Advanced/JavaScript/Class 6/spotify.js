const databank = require("./history.json");

//Ex1
let twoThousandSeventeen = databank.filter(data => new Date(data.ts.$date).getFullYear() === 2017)
let months = new Map();
for (let data of twoThousandSeventeen)
{
    let month = new Date(data.ts.$date).getMonth()
    months.set(month,(months.get(month)??0)+1)
}
console.log("Ex 1:")
console.log([...months.entries()].reduce((a,b)=>b[1]>a[1] ? b: a))
console.log([...months.entries()].reduce((a,b)=>b[1]<a[1] ? b: a))

//Ex2
let artists = new Map();
for (let data of databank)
{
    let artist = data.master_metadata_album_artist_name;
    artists.set(artist,(artists.get(artist)??0)+1)
}
let topArtists = new Map([...artists.entries()].sort((a, b) => b[1] - a[1]).slice(0,5));
console.log("Ex 2:")
console.log(topArtists)

//Ex3
let msArtists = new Map();
for (let data of databank)
{
    let artist = data.master_metadata_album_artist_name;
    msArtists.set(artist,(msArtists.get(artist)??0)+data.ms_played)
}
let topMsArtists = new Map([...msArtists.entries()].sort((a, b) => b[1] - a[1]).slice(0,6));
console.log("Ex 3.1:")
console.log(topMsArtists)

let fourWeeks = databank.filter(data => new Date().getTime() - new Date(data.ts.$date).getTime() < 4 * 7 * 24 * 60 * 60 * 1000)
let msFourWeeksArtists = new Map();
for (let data of fourWeeks)
{
    let artist = data.master_metadata_album_artist_name;
    msFourWeeksArtists.set(artist,(msFourWeeksArtists.get(artist)??0)+data.ms_played)
}
let topMsFourWeeksArtists = new Map([...msFourWeeksArtists.entries()].sort((a, b) => b[1] - a[1]).slice(0,6));
console.log("Ex 3.2:")
console.log(topMsFourWeeksArtists)

let sixMonths = databank.filter(data => new Date().getTime() - new Date(data.ts.$date).getTime() < 6 * 30 * 24 * 60 * 60 * 1000)
let msSixMonthsArtists = new Map();
for (let data of sixMonths)
{
    let artist = data.master_metadata_album_artist_name;
    msSixMonthsArtists.set(artist,(msSixMonthsArtists.get(artist)??0)+data.ms_played)
}
let topMsSixMonthsArtists = new Map([...msSixMonthsArtists.entries()].sort((a, b) => b[1] - a[1]).slice(0,6));
console.log("Ex 3.3:")
console.log(topMsSixMonthsArtists)

//Ex4
//let twoThousandTwentyTwo = databank.filter(data => new Date(data.ts.$date).getFullYear() === 2022)
let sum = 0;
let meses = 0;
let monthsMap = new Map();
for (let data of databank)
{
    sum += data.ms_played;
    let string = "" + new Date(data.ts.$date).getFullYear() + new Date(data.ts.$date).getMonth()
    if(monthsMap.has(string))
    {
        continue;
    }
    meses++;
    monthsMap.set(string, 1)
}
let hours = sum / (60 * 60 * 1000)
console.log("Ex 4:")
console.log(hours/meses)


//Ex5
let singleMap = new Map()
for (let data of databank)
{
    let song = data.master_metadata_track_name
    singleMap.set(song, (msSixMonthsArtists.get(song) ?? 0) + 1)
}
let singles = new Map([...singleMap.entries()].filter(value => value[1] === 1))
console.log("Ex 5.1:")
console.log(singles)

let albumsMap = new Map()
for (let data of databank)
{
    let album = data.master_metadata_album_album_name
    if(album === null)
    {
        continue
    }
    albumsMap.set(album, (albumsMap.get(album) ?? 0) + data.ms_played)
}
let topAlbum = [...albumsMap.entries()].reduce((a,b)=>b[1]>a[1] ? b: a)
let albumSingles = new Map()
for (let data of databank)
{
    let album = data.master_metadata_album_album_name
    let songName = data.master_metadata_track_name
    if(album !== topAlbum[0])
    {
        continue
    }
    albumSingles.set(songName, (albumSingles.get(songName) ?? 0) + data.ms_played)
}
let topSong = [...albumSingles.entries()].reduce((a,b)=>b[1]>a[1] ? b: a)
console.log("Ex 5.2:")
console.log(topSong)
