
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { renderHook, waitFor } from '@testing-library/react';

describe('Pruebas en useFetchGifs Hook', () => { 
    
    test('debe de regresar el estado inicial', () => { 
        const {result} = renderHook(() => useFetchGifs('Pokemon'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('debe de retornar un arreglo de imagenes y el isLoading en false',async () => { 
        const {result} = renderHook(() => useFetchGifs('Pokemon'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        )

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

     })

 })