import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory/>', () => { 
    test('debe cambiar el valor en el input', () => { 
        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target : {value: 'Pokemon'}});

        expect(input.value).toBe('Pokemon');
    });    

    test('debe llamar onNewCategory si el input tiene el valor', () => { 
        const inputValue = 'Pokemon';
        
        const onNewCategory = jest.fn(); //jest functions
        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, {target : {value: inputValue}});
        fireEvent.submit(form);
        // screen.debug();

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

     });

    test('Si el input esta vacio no se debe llamar onNewCategory', () => { 
        const onNewCategory = jest.fn(); //jest functions
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        // expect(onNewCategory).not.toHaveBeenCalled();  Alternativa
    });

 })