export function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
