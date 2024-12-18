"use client"
import { useState, useEffect } from 'react';
import CategoryResult from "@/components/CategoryResult";

const categories = ["G", "SJ", "S", "SS"];

const Page = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCategory(prevCategory => {
        const currentIndex = categories.indexOf(prevCategory);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex];
      });
    }, 5000);

    return () => clearInterval(intervalId); 
  }, []);

  return <CategoryResult category={currentCategory} />;
};

export default Page;
