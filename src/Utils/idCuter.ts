export const extractDocumentId = (fullPath: string) => {
    const regex = /[^/]+$/; // Найти последовательность символов, не содержащих '/'
    const match = fullPath.match(regex);
    return match ? match[0] : ""; // Возвращаем найденный ID или null, если совпадения не найдено
}