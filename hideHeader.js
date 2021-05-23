const timeDelta = 1000;
var scrollPositionTimeDeltaAgo = 0;
const header = document.getElementsByTagName('devsite-header')[0];
const nav = document.getElementsByTagName('devsite-book-nav')[0];
const height = header.scrollHeight;


document.addEventListener('scroll', (event) => {
    const scrollY = window.scrollY;
    const delta = scrollY - scrollPositionTimeDeltaAgo;

    if (!header || !nav) return;

    setTimeout(() => scrollPositionTimeDeltaAgo = scrollY, timeDelta);

    if (scrollY > height && delta + height > 0) {
        nav.style['max-height'] = '100%';
        header.style.transition = 'transform 0.5s ease-in 0s';
        header.style.transform = `translateY(-${height}px)`;
        nav.style.transition = 'transform 0.5s ease-in 0s';
        nav.style.transform = `translateY(-${height}px)`;
    } else {
        nav.style['max-height'] = `calc(100% - ${height}px)`;
        header.style.transition = 'transform 0.5s ease-out 0s';
        header.style.transform = 'translateY(0px)';
        nav.style.transition = 'transform 0.5s ease-out 0s';
        nav.style.transform = 'translateY(0px)';
    }
});
