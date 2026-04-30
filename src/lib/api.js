export async function fetchContent(type) {
    return Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        title: `${type} ${i}`,
        thumbnail: 'https://picsum.photos/300/200',
        preview: '/test-preview.pdf'
    }))
}