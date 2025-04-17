export interface TechItemProps {
    name: string;
    icon: React.ElementType;
  }

  export interface TechCategoryProps {
    title: string;
    items: TechItemProps[];
  }