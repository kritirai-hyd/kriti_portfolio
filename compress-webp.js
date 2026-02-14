import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetFolder = path.join(__dirname, 'src/assets/');
const jpegQuality = 65;
const pngQuality = 80;

console.log(`📁 Compressing images in: ${targetFolder}`);

if (!fs.existsSync(targetFolder)) {
  console.error('❌ Folder does not exist:', targetFolder);
  process.exit(1);
}

const supportedExtensions = ['.jpg', '.jpeg', '.png'];

const files = fs
  .readdirSync(targetFolder)
  .filter(file => supportedExtensions.includes(path.extname(file).toLowerCase()));

if (files.length === 0) {
  console.log('⚠️ No supported image files found to compress.');
  process.exit(0);
}

async function compressImages() {
  for (const file of files) {
    const filePath = path.join(targetFolder, file);
    const ext = path.extname(file).toLowerCase();
    const tempPath = path.join(targetFolder, `temp-${file}`);

    let pipeline = sharp(filePath);

    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: jpegQuality, mozjpeg: true });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ quality: pngQuality, compressionLevel: 9, palette: true });
    }

    try {
      await pipeline.toFile(tempPath);

      const originalSize = fs.statSync(filePath).size;
      const newSize = fs.statSync(tempPath).size;

      if (newSize < originalSize) {
        fs.renameSync(tempPath, filePath);
        console.log(`✅ Compressed ${file}: ${Math.round(originalSize / 1024)}KB → ${Math.round(newSize / 1024)}KB`);
      } else {
        fs.unlinkSync(tempPath);
        console.log(`⚠️ Skipped ${file}, compression did not reduce size`);
      }
    } catch (err) {
      console.error(`❌ Error compressing ${file}:`, err);
    }
  }
}

compressImages();
