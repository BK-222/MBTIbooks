import figures from '@/data/famousFigures.json';

const fetchFiguresData = defineEventHandler(async (event) => {
  try {
    const { mbti } = getQuery(event);

    const filteredFigures = figures.figures.filter((figure) => {
      return figure.mbti.includes(mbti); //use includes for array comparisons in .json
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