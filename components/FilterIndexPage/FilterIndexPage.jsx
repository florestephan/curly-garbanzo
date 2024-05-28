"use client";

import {useState, useEffect} from 'react';
import ProductList from './ProductList';
import {sanityFetch} from "@/sanity/lib/client";
import {Input} from "@/components/ui/input";

import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationLink,
    PaginationEllipsis
} from "@/components/ui/pagination";

const PRODUCTS_PER_PAGE = 10;

const FilterIndexPage = ({count, informationsProducts, initialProducts, collections, jewelryTypes, stones}) => {
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);
    const [filters, setFilters] = useState({collection: '', jewelryType: '', stone: '', search: ''});
    const [currentPage, setCurrentPage] = useState(0);
    const [totalFilteredProducts, setTotalFilteredProducts] = useState(count);

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            const {collection, jewelryType, stone, search} = filters;
            const start = currentPage * PRODUCTS_PER_PAGE;
            const end = start + PRODUCTS_PER_PAGE;

            const queryFilters = [];
            if (collection) queryFilters.push(`collection._ref == $collection`);
            if (jewelryType) queryFilters.push(`type._ref == $jewelryType`);
            if (stone) queryFilters.push(`stone._ref == $stone`);
            if (search) queryFilters.push(`title match $search`);

            const filterQuery = queryFilters.length > 0 ? queryFilters.join(' && ') : 'true';

            const filteredProducts = await sanityFetch({
                query: `
                *[_type == "product" && ${filterQuery}]
                | order(_createdAt desc)[$start...$end] {
                  _id,
                  title,
                  slug,
                  "collection": collection->title,
                  "type": type->title,
                  "stone": stone->title,
                  larefe,
                  price,
                  image,
                  keyvalueoption
                }
            `,
                params: {collection, jewelryType, stone, search: `${search}*`, start, end},
                tags: ['product']
            });

            const totalFilteredProducts = await sanityFetch({
                query: `
                count(*[_type == "product" && ${filterQuery}])
            `,
                params: {collection, jewelryType, stone, search: `${search}*`},
                tags: ['product']
            });

            setFilteredProducts(filteredProducts);
            setTotalFilteredProducts(totalFilteredProducts || 0);
        };

        fetchFilteredProducts();
    }, [filters, currentPage]);

    const handleSearchChange = (e) => {
        setFilters({...filters, search: e.target.value});
        setCurrentPage(0); // Reset to the first page on new search
    };

    const handleFilterChange = (e) => {
        const {name, value} = e.target;
        setFilters({...filters, [name]: value});
        setCurrentPage(0); // Reset to the first page on new filter change
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalFilteredProductsNumber = Number.isFinite(totalFilteredProducts) ? totalFilteredProducts : 0;
    const totalPages = Math.ceil(totalFilteredProductsNumber / PRODUCTS_PER_PAGE);

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const visiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
        let endPage = startPage + visiblePages - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - visiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <PaginationItem key={i} className="cursor-pointer">
                    <PaginationLink className={i === currentPage + 1 ? 'text-Black' : 'text-GreyP'}
                                    onClick={() => handlePageChange(i - 1)}>{i}</PaginationLink>
                </PaginationItem>
            );
        }

        if (startPage > 1) {
            pageNumbers.unshift(
                <PaginationItem key="1" className="cursor-pointer">
                    <PaginationLink onClick={() => handlePageChange(0)}>1</PaginationLink>
                </PaginationItem>,
                <PaginationItem key="ellipsis-start" className="cursor-pointer">
                    <PaginationEllipsis/>
                </PaginationItem>
            );
        }

        if (endPage < totalPages) {
            pageNumbers.push(
                <PaginationItem key="ellipsis-end" className="cursor-pointer">
                    <PaginationEllipsis/>
                </PaginationItem>,
                <PaginationItem key={totalPages} className="cursor-pointer">
                    <PaginationLink onClick={() => handlePageChange(totalPages - 1)}>{totalPages}</PaginationLink>
                </PaginationItem>
            );
        }

        return pageNumbers;
    };

    return (
        <>
            <form className="col-span-12 grid grid-cols-12 mt-20 mb-16 gap-10">
                <Input className="col-span-6"
                       type="text"
                       name="search"
                       placeholder="Search..."
                       value={filters.search}
                       onChange={handleSearchChange}/>

                <p className="text-12 col-start-7 col-end-12">{informationsProducts}</p>

                <select
                    className="text-Black col-span-4 border-[1px] border-Grey"
                    name="collection"
                    value={filters.collection}
                    onChange={handleFilterChange}
                >
                    <option value="">Collections</option>
                    {collections.map((collection) => (
                        <option key={collection._id} value={collection._id}>
                            {collection.title}
                        </option>
                    ))}
                </select>
                <select
                    className="text-Black col-span-4 border-[1px] border-Grey"
                    name="jewelryType"
                    value={filters.jewelryType}
                    onChange={handleFilterChange}
                >
                    <option value="">Types</option>
                    {jewelryTypes.map((type) => (
                        <option key={type._id} value={type._id}>
                            {type.title}
                        </option>
                    ))}
                </select>
                <select
                    className="text-Black col-span-4 border-[1px] border-Grey"
                    name="stone"
                    value={filters.stone}
                    onChange={handleFilterChange}
                >
                    <option value="">Pierres</option>
                    {stones.map((stone) => (
                        <option key={stone._id} value={stone._id}>
                            {stone.title}
                        </option>
                    ))}
                </select>
            </form>

            <span className="mb-10 col-span-12 text-12">
                {filters.collection || filters.jewelryType || filters.stone || filters.search ? `${totalFilteredProductsNumber} articles trouvés` : `${count.length} articles trouvés`}
            </span>

            <ProductList
                className="cursor-pointer hover:shadow-custom transition-all duration-300 hover:text-opacity-50  relative border-[1px] border-Grey text-Black col-span-3 mb-11 aspect-[320/320] p-5"
                products={filteredProducts}/>

            <div className="col-span-12">
                {totalPages > 0 && (
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem className="cursor-pointer">
                                <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} className={
                                    currentPage === 0 ? "pointer-events-none opacity-50" : undefined
                                }/>
                            </PaginationItem>
                            {renderPageNumbers()}
                            <PaginationItem className="cursor-pointer">
                                <PaginationNext onClick={() => handlePageChange(currentPage + 1)}
                                                className={
                                                    currentPage >= totalPages - 1 ? "pointer-events-none opacity-50" : undefined
                                                }/>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                )}
            </div>
        </>
    );
}

export default FilterIndexPage;
