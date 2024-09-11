import books from '@/data/books.json';

const fetchBooksData = defineEventHandler(async (event) => {
  try {
    const { mbti, enneagram } = getQuery(event); // gets ?mbti= and ?enneagram= query params

    const filteredBooks = books.books.filter((book) => {
      return book.mbti.includes(mbti) && book.enneagram.includes(enneagram); //use includes for array comparisons in .json
    });

    const idealResponse = filteredBooks.map(book => ({
      title: book.title,
      link: book.link
    }));

    if (idealResponse.length === 0) { //can change back to filteredFigures.length === 0
      throw createError({ statusCode: 404, message: 'Books not found'});
    }
    return idealResponse;
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Something went wrong' });
  }
});

export default fetchBooksData;