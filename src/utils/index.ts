export const GetDoubleValue = (value: string): string => {
    return Number(value).toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export const ConvertToDateFormat = (date: string): Date => {
    const [day, month, year] = date.split(".");
    return new Date(`${year}-${month}-${day}`);
}

export const GetTwoDateDiff = (startDate: string): string => {
    const date1 = ConvertToDateFormat(startDate);
    const date2 = ConvertToDateFormat(GetTodayDate());
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays.toString();
}

const GetTodayDate = (): string => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0'); // Gün kısmı, 2 haneli olacak
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Ay kısmı, 2 haneli olacak
    const year = today.getFullYear(); // Yıl kısmı

    return `${day}.${month}.${year}`; // "dd.MM.yyyy" formatında döndür
}