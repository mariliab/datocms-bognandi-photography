import Link from "next/link";

export default function BlogFilter({
  activeFilters,
  allFilters,
  onSelectFilters,
}) {
  const onFilterClick = (item) => {
    const filteredList = activeFilters.filter(
      (filterItem) => filterItem.slug === item.slug
    );

    if (item.slug.toLowerCase() === "all") {
      if (activeFilters.length > 0) {
        onSelectFilters([]);
      }
    } else {
      if (filteredList.length > 0) {
        onSelectFilters((prevItem) => [
          ...prevItem.filter((filterItem) => filterItem.slug !== item.slug),
        ]);
      } else {
        if (item.slug.toLowerCase() === "all") {
          onSelectFilters([]);
        } else {
          onSelectFilters((prevItem) => [...prevItem, item]);
        }
      }
    }
  };

  const isActive = (item) => {
    if (item.slug.toLowerCase() === "all" && activeFilters.length < 1) {
      return true;
    }
    return activeFilters.find((x) => x.slug.toLowerCase() === item.slug);
  };

  return (
    <section className="py-4 relative mb-2">
      <div className="flex flex-wrap space-x-4 space-y-4 items-end">
        {allFilters.map((filterItem) => {
          return (
            <div
              key={filterItem.slug}
              href={`blog/${filterItem.slug}`}
              onClick={() => onFilterClick(filterItem)}
              className={`text-xs uppercase bg-green-darker text-white pt-2 pb-1 px-3 cursor-pointer transition-all duration-200 ${
                isActive(filterItem) && "font-bold bg-green-olive"
              } `}
            >
              {filterItem.name}
            </div>
          );
        })}
      </div>
    </section>
  );
}
