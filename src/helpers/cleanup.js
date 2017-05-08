module.exports.cleanupName = (name) => {
    return name.replace(/u[A-Z0-9]{4}-/, '');
};

module.exports.cleanupSvg = (svg) => {
    return svg
    .replace(/width="\d+"/, '')
    .replace(/height="\d+"/, '')
    .replace(/fill-rule="#?\w+"/g, '')
    .replace(/clip-rule="#?\w+"/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/class="\w+"/g, match => match.replace(/class/g, 'className'))
    .replace(/xmlns:xlink="[\S]+"/g, match => match.replace(/xmlns:xlink/g, 'xmlnsXlink'))
    .replace(/xlink:href="[\S]+"/g, match => match.replace(/xlink:href/g, 'xlinkHref'))
    .replace(/<style>.*<\/style>/g, match => match.replace(/<style>/g, '<style>{ `').replace(/<\/style>/g, '` }</style>'))
    .replace(/viewBox/, 'fill={color} height={height || size} width={width || size} onClick={onClick} style={style} className={className} viewBox');
};
