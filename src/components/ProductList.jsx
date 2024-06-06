import React, { useState } from 'react';
import data from '../Data/Data.js';
import FilterBar from './FilterBar.jsx';

const ProductList = () => {
    const [filters, setFilters] = useState({ reviews: [], categories: [], colors: [], companies: [] });

    // Obtener las categorías, colores, compañías y revisiones únicas del conjunto de datos
    const categories = [...new Set(data.map((item) => item.category))];
    const colors = [...new Set(data.map((item) => item.color))];
    const companies = [...new Set(data.map((item) => item.company))];
    const reviews = [...new Set(data.map((item) => item.star))];

    // Función para filtrar los datos basados en los filtros seleccionados
    const filteredData = data.filter((item) => {
        const categoryFilter = filters.categories.length === 0 || filters.categories.includes(item.category);
        const colorFilter = filters.colors.length === 0 || filters.colors.includes(item.color);
        const companyFilter = filters.companies.length === 0 || filters.companies.includes(item.company);
        const reviewsFilter = filters.reviews.length === 0 || filters.reviews.includes(item.star);
        return categoryFilter && colorFilter && companyFilter && reviewsFilter;
    });

    // Función para manejar cambios en los filtros
    const handleFilterChange = (filterType, values) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filterType]: values }));
    };

    // Función para limpiar todos los filtros
    const handleClearFilters = () => {
        setFilters({ reviews: [], categories: [], colors: [], companies: [] });
    };

    // Función para manejar el cambio de estado de la descripción
    const handleDescriptionToggle = (index) => {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.toggle('active');
            } else {
                card.classList.remove('active');
            }
        });
    };

    return (
        <div className='flex relative  z-0 '>
            <FilterBar
                categories={categories}
                colors={colors}
                companies={companies}
                reviews={reviews}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
            />
            <div  className={`max-w-[1340px] mx-auto mt-3  flex-auto h-fit pt-4 gap-3 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] `}>
                {filteredData.map((item, index) => (
                    <div className='container'>
                        <div className='card' key={index}>
                            {/* Renderizar los detalles del producto aquí */}
                            <div className='imgBx'>
                                <img className='' src={item.img} alt={item.title} />
                            </div>

                            <div className='contentBx'>
                                <h2 className=''>{item.title}</h2>
                                <div class="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div class="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>

                            {/* Otros detalles del producto */}

                            {/* Manejar el evento onMouseEnter y onMouseLeave para mostrar/ocultar la descripción */}
                            <div onMouseEnter={() => handleDescriptionToggle(index)} onMouseLeave={() => handleDescriptionToggle(index)}></div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default ProductList;
