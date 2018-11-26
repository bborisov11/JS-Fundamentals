function resolve(song) {
    let songName = song[0];
    let singer = song[1];
    let time = song[2];

    console.log(`Now Playing: ${singer} - ${songName} [${time}]`);
}
resolve(['smiley.gif', 'Smiley Face']);