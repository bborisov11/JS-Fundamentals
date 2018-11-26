function username(arr) {
    let set = new Set(arr);
    Array.from(set).sort((a, b) => a.length - b.length || a.localeCompare(b)).forEach(x => console.log(x));
}
username(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);