import { bgBlue, red, bold, italic } from 'https://deno.land/std/fmt/colors.ts';


const logger = (text: string) => console.log(bgBlue(italic(red(bold(text)))));

export {
  logger,
};
