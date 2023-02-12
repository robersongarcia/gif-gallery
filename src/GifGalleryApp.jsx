import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

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
            <h1 className="title">GIF GALLERY</h1>

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
