import {render, screen, fireEvent} from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas del componente <GifItem/>', () => { 
    
    //data
    const gifItemData =  {
        "id": "fSvqyvXn1M3btN8sDh",
        "title": "Detective Pikachu Reaction GIF",
        "url": "https://media2.giphy.com/media/fSvqyvXn1M3btN8sDh/giphy.gif?cid=7669ae4fg546m2iz6lssyqsqgznd2k5uv1ffgmw5ov8scbw5&rid=giphy.gif&ct=g"
    }

    test('snapshot test', () => { 
        const {container} = render(<GifItem {...gifItemData} />);
        expect(container).toMatchSnapshot();
     })

    test('debe mostrar el url y el alt', () => { 
        render(<GifItem {...gifItemData} />);
        // screen.debug();      

        expect(screen.getByRole('img').src).toBe(gifItemData.url);
        expect(screen.getByRole('img').alt).toBe(gifItemData.title);

      })

    test('debe mostrar el titulo en el componente', () => { 
        render(<GifItem {...gifItemData}/>);
        expect(screen.getByText(gifItemData.title)).toBeTruthy(); 
       })

 })