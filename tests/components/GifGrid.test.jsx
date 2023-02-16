
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

    const category = 'Pokemon'
    
    test('Debe de mostrar el loading inicialmente', () => {   
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render(<GifGrid  category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
     });

    test('Debe de mostrar items cuando se cargan las imagenes con el useFetchGifs', () => { 
    
        const gifs =  [{
            "id": "fSvqyvXn1M3btN8sDh",
            "title": "Detective Pikachu Reaction GIF",
            "url": "https://media2.giphy.com/media/fSvqyvXn1M3btN8sDh/giphy.gif?cid=7669ae4fg546m2iz6lssyqsqgznd2k5uv1ffgmw5ov8scbw5&rid=giphy.gif&ct=g",
        },
        {
            "id": "fSvqyvXn1M3btN8sDs",
            "title": "Detective Pikachu Reaction GIF",
            "url": "https://media2.giphy.com/media/fSvqyvXn1M3btN8sDh/giphy.gif?cid=7669ae4fg546m2iz6lssyqsqgznd2k5uv1ffgmw5ov8scbw5&rid=giphy.gif&ct=g",
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid  category={category} />);

        expect(screen.getAllByRole('img')).toHaveLength(2);

      })

 })