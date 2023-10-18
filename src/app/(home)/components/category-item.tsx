import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/contants/category-icon";
import { Category } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div>
        <Badge
          variant="outline"
          className="flex items-center justify-center gap-2 rounded-lg py-3 cursor-pointer"
        >
          {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
          <span className="text-xs font-bold">{category.name}</span>
        </Badge>
      </div>
    </Link>
  );
};

export default CategoryItem;
