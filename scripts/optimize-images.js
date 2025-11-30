import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const outputDir = publicDir; // Overwrite or save alongside? Let's save alongside with .webp extension

const imagesToOptimize = [
    { name: 'josi-souza-profile.png', width: 1080, quality: 80 },
    { name: 'josi-souza-profile2.png', width: 800, quality: 80 },
    { name: 'gallery-natural-finish.jpg', width: 1200, quality: 80 },
    { name: 'experience-treatment.jpg', width: 800, quality: 80 },
    { name: 'gallery-art-technique.jpg', width: 800, quality: 80 },
    { name: 'gallery-classic-elegance.jpg', width: 800, quality: 80 },
    { name: 'gallery-details.jpg', width: 800, quality: 80 },
    { name: 'gallery-professional-care.jpg', width: 800, quality: 80 },
    { name: 'gallery-real-beauty.jpg', width: 800, quality: 80 },
    { name: 'gallery-sophisticated.jpg', width: 800, quality: 80 },
    { name: 'gallery-transparencia.jpg', width: 800, quality: 80 },
    { name: 'experience-clean-environment.jpg', width: 800, quality: 80 },
    { name: 'experience-products.jpg', width: 800, quality: 80 },
    { name: 'experience-space-detail.jpg', width: 800, quality: 80 },
    { name: 'experience-special-care.jpg', width: 800, quality: 80 },
    { name: 'experience-tools.jpg', width: 800, quality: 80 },
    { name: 'hero-bg-detail.jpg', width: 1920, quality: 80 },
];

async function optimize() {
    for (const img of imagesToOptimize) {
        const inputPath = path.join(publicDir, img.name);
        const outputPath = path.join(outputDir, img.name.replace(/\.(png|jpg|jpeg)$/, '.webp'));

        if (!fs.existsSync(inputPath)) {
            console.warn(`Image not found: ${img.name}`);
            continue;
        }

        try {
            console.log(`Optimizing ${img.name}...`);
            await sharp(inputPath)
                .resize({ width: img.width, withoutEnlargement: true })
                .webp({ quality: img.quality })
                .toFile(outputPath);
            console.log(`Saved to ${path.basename(outputPath)}`);
        } catch (error) {
            console.error(`Error optimizing ${img.name}:`, error);
        }
    }
}

optimize();
