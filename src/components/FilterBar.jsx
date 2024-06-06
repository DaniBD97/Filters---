import React, { useState } from 'react';

const FilterBar = ({ categories, colors, companies, reviews, onFilterChange, onClearFilters }) => {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedReviews, setSelectedReviews] = useState([]);

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onFilterChange("categories", updatedCategories);
  };

  const handleReviewsChange = (reviews) => {
    const updatedReviews = selectedReviews.includes(reviews)
      ? selectedReviews.filter((c) => c !== reviews)
      : [...selectedReviews, reviews];

    setSelectedReviews(updatedReviews);
    onFilterChange("reviews", updatedReviews);
  };

  const handleColorChange = (color) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];

    setSelectedColors(updatedColors);
    onFilterChange("colors", updatedColors);
  };

  const handleCompanyChange = (company) => {
    const updatedCompanies = selectedCompanies.includes(company)
      ? selectedCompanies.filter((c) => c !== company)
      : [...selectedCompanies, company];

    setSelectedCompanies(updatedCompanies);
    onFilterChange("companies", updatedCompanies);
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedCompanies([]);
    setSelectedReviews([]);
    onFilterChange("categories", []);
    onFilterChange("colors", []);
    onFilterChange("companies", []);
    onFilterChange("reviews", []);
    onClearFilters();
  };

  return (
    <div className='flex w-[200px] items-center  flex-col p-2  '>
      <div className='flex flex-col text-xl gap-2 '>
        {categories && categories.length > 0 && (
          <div className='mt-5 p-2 bg-[#232323] text-white rounded-xl'>
            <p className='text-lg font-bold'>Category</p>
            {categories.map((category) => (
              <div className='flex text-white gap-2 text-[15px]' key={category}>
                <input
                  
                  type="checkbox"
                  name="category"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </div>
            ))}
          </div>
        )}

        {companies && companies.length > 0 && (
          <div className='p-2 bg-[#232323] text-white rounded-xl'>
            <p className='text-lg font-bold'>Company</p>
            {companies.map((company) => (
              <div className='flex text-[15px] gap-2' key={company}>
                <input
                  type="checkbox"
                  name="company"
                  value={company}
                  checked={selectedCompanies.includes(company)}
                  onChange={() => handleCompanyChange(company)}
                />
                {company}
              </div>
            ))}
          </div>
        )}

        {colors && colors.length > 0 && (
          <div className='p-2 bg-[#232323] text-white rounded-xl'>
            <p className='text-lg font-bold'>Color</p>
            <div className='flex gap-1'>
              {colors.map((color) => (

                <button
                  key={color}
                  className="flex w-6 h-6 items-center border-white border-[1px] gap-2 p-2 rounded-md "
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                >
                  {/* <span className="w-4 h-4 border border-gray-300 rounded-full"></span>
                <span>{color}</span> */}
                </button>

              ))}
            </div>
          </div>
        )}


        {reviews && reviews.length > 0 && (
          <div className='p-2 bg-[#232323] text-white rounded-xl'>
            <p className='text-lg font-bold'>Star</p>
            {reviews
              .sort((a, b) => parseFloat(a.length) - parseFloat(b.length))
              .map((review) => (
                <div className='flex ' key={review}>
                  <input
                    type="checkbox"
                    name="reviews"
                    value={review}
                    checked={selectedReviews.includes(review)}
                    onChange={() => handleReviewsChange(review)}
                  />
                  {review}
                </div>
              ))
            }
          </div>
        )}
      </div>
      {(selectedCategories.length > 0 || selectedColors.length > 0 || selectedCompanies.length > 0 || selectedReviews.length > 0) && (
        <button className="block mt-2 p-2 rounded-lg bg-black text-white" onClick={handleClearFilters}>Limpiar Filtros</button>
      )}
    </div>
  );
};

export default FilterBar;
