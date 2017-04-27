import {removeLineBreaks, removeWhitespace, toTitleCase} from '../strings';


describe('String Utils', () => {

  describe('Remove Line Breaks', () => {
    test('Does not change input of single line string', () => {
      const str = 'Some String';
      expect(removeLineBreaks(str)).toBe(str);
    });

    test('Removes line breaks between paragraphs, using "\\n"', () => {
      const str = 'First Paragraph \n' +
        'Second Paragraph';
      expect(removeLineBreaks(str)).toBe('First Paragraph Second Paragraph');
    });

    test('Removes line breaks between paragraphs, using template strings', () => {
      const str =
`First Paragraph
 Second Paragraph`;
      expect(removeLineBreaks(str)).toBe('First Paragraph Second Paragraph');
    });
  });

  describe('Remove White Space', () => {
    test('Remove Spaces between Words', () => {
      const str = 'This is a sentence.';
      expect(removeWhitespace(str)).toBe('Thisisasentence.');
    });

    test('Remove Spaces at the beginning of a string', () => {
      const str = '    test';
      expect(removeWhitespace(str)).toBe('test');
    });

    test('Remove Spaces at the end of a string', () => {
      const str = 'test    ';
      expect(removeWhitespace(str)).toBe('test');
    });
  });

  describe('To Title Case', () => {
    const output = 'An Example String';

    test('Do not effect a Title Case string', () => {
      const input = 'An Example String';
      expect(toTitleCase(input)).toBe(output);
    });

    test('Change lowercase string to title case', () => {
      const input = 'an example string';
      expect(toTitleCase(input)).toBe(output);
    });

    test('Change UPPPERCASE string to title case', () => {
      const input = 'AN EXAMPLE STRING';
      expect(toTitleCase(input)).toBe(output);
    });

    test('Change MixeD string to title case', () => {
      const input = 'An eXAMpLe STrInG';
      expect(toTitleCase(input)).toBe(output);
    });
  })
});
