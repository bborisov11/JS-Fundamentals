function extractLinks(str) {
    let regex = /www\.[A-Za-z0-9-]+[A-Za-z.]*\.[a-z]+/g;
    let match;
    while(match = regex.exec(str)) {
        console.log(match[0]);
    }
}
extractLinks(['Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg',
    '"Best Hotel Services!" - www.rebel21.sedecrem.moc']
);