import { getGifs } from '../../src/helpers/getGifs';

describe('getGifs Tests', () => { 

    test('debe retornar los gifs', async () => { 
        const gifs = await getGifs('Pokemon');
        // console.log(gifs);

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
        
     })

 })