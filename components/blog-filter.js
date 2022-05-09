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

    if (item.slug.toLowerCase() === "alla") {
      if (activeFilters.length > 0) {
        onSelectFilters([]);
      }
    } else {
      if (filteredList.length > 0) {
        onSelectFilters((prevItem) => [
          ...prevItem.filter((filterItem) => filterItem.slug !== item.slug),
        ]);
      } else {
        if (item.slug.toLowerCase() === "alla") {
          onSelectFilters([]);
        } else {
          onSelectFilters((prevItem) => [...prevItem, item]);
        }
      }
    }
  };

  const isActive = (item) => {
    if (item.slug.toLowerCase() === "alla" && activeFilters.length < 1) {
      return true;
    }
    return activeFilters.find((x) => x.slug.toLowerCase() === item.slug);
  };

  return (
    <section className="py-4 relative mb-2">
      <div className="flex flex-wrap gap-4">
        {allFilters.map((filterItem) => {
          return (
            <div
              key={filterItem.slug}
              href={`blogg/${filterItem.slug}`}
              onClick={() => onFilterClick(filterItem)}
              className={`${
                isActive(filterItem) && "font-bold bg-beige-light-hover"
              } border-1 border-black px-6 text-xs uppercase pt-2 pb-1 cursor-pointer hover:bg-beige-light-hover transition-all duration-200`}
            >
              {filterItem.name}
            </div>
          );
        })}
      </div>
    </section>
  );
}
