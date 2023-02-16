import { classNames } from './classNames';

describe(('ClassNames'), () => {
    test('with 1 param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with 2 param', () => {
        const expected = 'someClass Param1 Param2';
        expect(classNames('someClass', {}, ['Param1', 'Param2'])).toBe(expected);
    });
    test('with mods param', () => {
        const expected = 'someClass Third hovered';
        expect(classNames('someClass', { hovered: true }, ['Third'])).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass Third';
        expect(classNames('someClass', { scroll: false }, ['Third'])).toBe(expected);
    });
});
