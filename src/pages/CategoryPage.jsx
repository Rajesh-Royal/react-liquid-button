import { useEffect, useRef, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { componentMap } from '../constants/Components';
import { decodeLabel } from '../utils/utils';
import { Helmet } from 'react-helmet-async';
import { Box } from '@chakra-ui/react';

import BackToTopButton from '../components/common/BackToTopButton';

const CategoryPage = () => {
  const { subcategory } = useParams();
  const scrollRef = useRef(null);

  const SubcategoryComponent = subcategory ? lazy(componentMap[subcategory]) : null;

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, [subcategory]);

  return (
    <Box className='category-page' ref={scrollRef}>
      <Helmet>
        <title>Liquid Button - {decodeLabel(subcategory)}</title>
      </Helmet>
      {/* <h1 className='main-category'>{decodeLabel(category)}</h1> */}
      <h2 className='sub-category'>{decodeLabel(subcategory)}</h2>
      {SubcategoryComponent ? (
        <Suspense>
          <SubcategoryComponent />
        </Suspense>
      ) : (
        <p className='coming-soon'>This component is work in progress. <br />
          Follow the project on <a href="https://github.com/DavidHDev/react-bits" target="_blank" rel="noreferrer">GitHub</a> for regular updates.
        </p>
      )}

      <BackToTopButton />
    </Box>
  );
};

export default CategoryPage;
