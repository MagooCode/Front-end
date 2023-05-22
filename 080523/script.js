function Car(brand,mark,currentFuel){
    this.brand = brand
    this.mark = mark
    this.currentFuel = currentFuel
}

Car.prototype.Refuel = function(fuelAmount){
    console.log(`${this.brand} is currently being refueled.`)
    this.currentFuel += this.currentFuel
}

Car.prototype.Drive = function(length){
    console.log(`${this.brand} is moving towards destination`)
    this.currentFuel -= this.currentFuel
}

Car.prototype.Stop = function(){
    console.log(`${this.brand} has stopped.`)
}

console.log(`========================================================`);

class Car {
    constructor(brand,mark,currentFuel){
        this.brand = brand
        this.mark = mark
        this.currentFuel = currentFuel
    }

    Refuel(fuelAmount) {
        console.log(`${this.brand} is currently being refueled.`)
        this.currentFuel += this.currentFuel
    }

    Drive(length) {
        console.log(`${this.brand} is moving towards destination`)
        this.currentFuel -= this.currentFuel
    }

    Stop() {
        console.log(`${this.brand} has stopped.`)
    }
}

console.log(`========================================================`);

function Playlist(songName, artistName, songDuration) {
    this.songName = songName
    this.artistName = artistName
    this.songDuration = songDuration
}

Playlist.prototype.playBackTheSong = function(){
    console.log(`${this.songName} is being played back`)
}

Playlist.prototype.stopTheSong = function(){
    console.log(`${this.songName} has been stopped`)
}

Playlist.prototype.longestSong = function(songs){
    const sortedByLongestDuration = songs.sort((a,b) => {
        return a.songDuration - b.songDuration
    })

    return sortedByLongestDuration[Playlist.length - 1].songName
}

console.log(`========================================================`);

class Playlist {
    constructor(songName, artistName, songDuration){
        this.songName = songName
        this.artistName = artistName
        this.songDuration = songDuration
    }

    playBackTheSong() {
        console.log(`${this.songName} is being played back`)
    }

    stopTheSong() {
        console.log(`${this.songName} has been stopped`)
    }

    static longestSong(songs) {
        const sortedByLongestDuration = songs.sort((a,b) => {
            return a.songDuration - b.songDuration
        })

        return sortedByLongestDuration[Playlist.length - 1].songName
    }
}