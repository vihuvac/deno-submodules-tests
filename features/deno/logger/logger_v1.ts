import { bgBlue, red, bold } from 'https://deno.land/std/fmt/colors.ts';


const logger = (text) => console.log(bgBlue(red(bold(text))));

export {
  logger,
};
