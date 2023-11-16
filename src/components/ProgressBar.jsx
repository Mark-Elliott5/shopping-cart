import { ProductsContext } from '../context/ProductsContextProvider';
import { useContext, useEffect, useState } from 'react';

function ProgressBar() {
  const { allProductsIsLoading, allCategoriesIsLoading } =
    useContext(ProductsContext);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let newProgress = 10;
    if (!allProductsIsLoading) {
      newProgress += 45;
    }
    if (!allCategoriesIsLoading) {
      newProgress += 45;
    }
    setProgress(newProgress);
  }, [allProductsIsLoading, allCategoriesIsLoading]);

  return (
    <div
      id="progress-bar"
      style={{
        height: '4px',
        width: '100%',
      }}
    >
      <div
        id="progress-bar-fill"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
