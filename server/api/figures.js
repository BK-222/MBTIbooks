import figures from '@/data/figures.json';

const fetchFiguresData = defineEventHandler(async (event) => {
  try {
    const { mbti, enneagram } = getQuery(event); // gets ?mbti= and ?enneagram= query params

    const filteredFigures = figures.figures.filter((figure) => {
      return figure.mbti.includes(mbti) && figure.enneagram.includes(enneagram); //use includes for array comparisons in .json
    });

    const idealResponse = filteredFigures.map(figure => ({
      name: figure.name,
      image: figure.image
    }));

    if (idealResponse.length === 0) { //can change back to filteredFigures.length === 0
      throw createError({ statusCode: 404, message: 'Figures not found'});
    }
    return idealResponse;
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Something went wrong' });
  }
});

export default fetchFiguresData;