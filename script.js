function scrollPage() {
    const pageHeight = window.innerHeight;
    const currentPosition = window.scrollY;
    const targetPosition = currentPosition + pageHeight;
    const animationDuration = 750; // You can adjust the duration as needed (in milliseconds)
    const startTime = performance.now();

    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < animationDuration) {
            const nextPosition = currentPosition + (targetPosition - currentPosition) * (elapsedTime / animationDuration);
            window.scrollTo(0, nextPosition);
            requestAnimationFrame(scrollAnimation);
        } else {
            window.scrollTo(0, targetPosition);
        }
    }

    requestAnimationFrame(scrollAnimation);
}