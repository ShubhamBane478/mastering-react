import { useEffect, useState } from 'react';

import './Pagination.css';

const PaginationIQ = () => {

  const [productsData, setProductsData] = useState([]);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);
  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`);
    const data = await res.json()
    if(data && data.products){
      setProductsData(data.products)
      setTotalPages(Math.ceil(data.total / 10))
    }
  }
  useEffect(() => {
    fetchProducts()
    console.log(productsData.length);
  }, [page])


  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
      setPage(selectedPage)
    }
  }

  return (
<>

      {productsData.length > 0 && (
        <div className='product-container '>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {productsData.map((product) => {
            return (
              <>
              <div key={product.id} className="mx-auto mt-11 transform overflow-hidden rounded-lg shadow-md duration-300 hover:scale-105 hover:shadow-lg">
              <img className="h-48 w-full object-cover object-center" src={product.thumbnail ? product.thumbnail   : "https://placehold.co/600x400"} alt="Product Image" />
              <div className="p-4  bg-white dark:bg-slate-800 ">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.title}</h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{product.description}</p>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${product.price}</p>
                  <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">${(product.price / (1 - product.discountPercentage  /100)).toFixed(2)}</p>
                  <p className="ml-auto text-base font-medium text-green-500">{product.discountPercentage}% off</p> 
                </div>
              </div>
            </div>
            </>
            )
          })}
                </div>
         </div>
      )}
      {productsData.length >0  &&  (
        <div className='pagination'>
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>
        {
            [...Array(totalPages )].map((_, i) => {
              return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
            })}

          
       
<span onClick={() => selectPageHandler(page + 1)} className={page < totalPages ? "" : "pagination__disable"}>▶</span>
       </div>
      )}

        </>
      )
      }

      export default PaginationIQ;