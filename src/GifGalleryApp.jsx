import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifGalleryApp = () => {

    const [categories, setCategories] = useState(['Pokemon','Dragon Ball']);

    const onAddCategory = () => {
        // My first solution xddd
        // const newCategories = categories.map(category => category);
        // newCategories.push('valorant');

        // setCategories( () => newCategories );

        setCategories(['valorant',...categories]);
    }

    return (
        <>
            {/* Title */}
            <h1>Gif Gallery App</h1>

            {/* Input */}
            <AddCategory setCategories={ setCategories }/>

            {/* Gif List */}
                <ol>
                    {/* <li>Abc</li> */}
                    {categories.map( category => {
                        return <li key={ category }> {category} </li>
                    })}
                </ol>

                {/* Gif Item */}
        </>
    )
}
