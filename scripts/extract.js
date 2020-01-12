const path = require('path');
const fs = require('fs-extra');
const cheerio = require('cheerio');

const main = async () => {
  const outDir = path.resolve(__dirname, '..', 'out');
  const blocksDir = path.resolve(__dirname, '..', 'blocks');

  const dir = await fs.readdir(outDir, { withFileTypes: true });
  const files = dir
    .filter(file => file.isFile())
    .filter(file => file.name !== '404.html');

  await Promise.all(
    files.map(async file => {
      const filePath = path.join(outDir, file.name);
      const blockPath = path.join(blocksDir, file.name);

      const content = await fs.readFile(filePath);
      const $ = cheerio.load(content);

      const block = [$.html('style[data-styled]'), $('#__next').html()].join(
        '',
      );

      await fs.ensureFile(blockPath);
      await fs.writeFile(blockPath, block);
    }),
  );
};

main().catch(err => {
  console.error(err);
  process.exit(1);
});
