import type { Comic } from "../types/comic";

// export default async function fetchBook(isbn: string) {
//     const res = await fetch(`https://api.openbd.jp/v1/get?isbn=${isbn}&pretty`);
//     const data = await res.json();
//     // const data = (await res.json()) as Type;
//     return data;
// }

export async function fetchTypicalVolume(title: string) {
    const params = new URLSearchParams({
        q:          `intitle:${title}`,
        maxResults: '1',
        orderBy:    'relevance',
    });

    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?${params}`);
    const data = await res.json();

    const books: Comic[] = data.items?.map((item: any) => {
        const vi = item.volumeInfo;
        return {
            title:       vi.title,
            description: vi.description,
            link:        vi.infoLink,
            image:       vi.imageLinks?.thumbnail ?? null,
        };
    }) ?? [];
    
    return books;
}