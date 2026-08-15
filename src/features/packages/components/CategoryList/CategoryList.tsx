interface CategoryListProps {
    categories: string[];
    selectedCategory: string;
    onSelect: (category: string) => void;
  }
  
  import styles from './CategoryList.module.scss';
  
  export function CategoryList({
    categories,
    selectedCategory,
    onSelect,
  }: CategoryListProps) {
    return (
      <aside className={styles.sidebar}>
        <h2>Categories</h2>
  
        <nav aria-label="Package categories">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
  
            return (
              <button
                key={category}
                type="button"
                className={isActive ? styles.active : ''}
                onClick={() => onSelect(category)}
              >
                {category}
              </button>
            );
          })}
        </nav>
      </aside>
    );
  }