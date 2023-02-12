import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';

export const GifGalleryApp = () => {

    const [categories, setCategories] = useState(['Pokemon']);

    const onAddCategory = (newCategory) => {
        // My first solution xddd
        // const newCategories = categories.map(category => category);
        // newCategories.push('valorant');

        // setCategories( () => newCategories );

        // setCategories(['valorant',...categories]);

        // categories.push(newCategory);
        if( categories.includes(newCategory) )
            return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gif Gallery App</h1>

            <AddCategory 
                onNewCategory={ value => onAddCategory(value) }
            />

            {categories.map( category => 
                (
                    <GifGrid 
                        key={category}    
                        category={category}
                    />
                )
            )}
        </>
    )
}
