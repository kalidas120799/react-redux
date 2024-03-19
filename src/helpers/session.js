export const tokenKeyName = "sygy656sgsdgs77sdysudy";

export const getToken = () => {
    const token = localStorage.getItem(tokenKeyName);
    return (token && token !== null ? token : null);
}