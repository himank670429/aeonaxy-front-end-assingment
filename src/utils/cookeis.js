export function setCookie(cookieName, cookieValue, expiratonSeconds){
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + expiratonSeconds * 1000);
    const cookieString = `${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)}; expires=${expirationDate.toUTCString()}; path=/`
    document.cookie = cookieString;
}

export function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
  
export function getCookie(cookieName){
    let cookieValue = null;
    document.cookie.split(';').forEach(item => {
        const [name, value] = item.split('=');
        const trimmedName = name.trim();
        if (trimmedName === cookieName){
            cookieValue = decodeURIComponent(value);
        }
    })
    return cookieValue;
}