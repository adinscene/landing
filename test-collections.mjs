import { getCollection } from 'astro:content';

const solutions = await getCollection('solutions');
console.log('Solutions collection entries:');
solutions.forEach(entry => {
  console.log(`- ID: ${entry.id}, Slug: ${entry.slug}`);
});

const features = await getCollection('features');
console.log('\nFeatures collection entries:');
features.forEach(entry => {
  console.log(`- ID: ${entry.id}, Slug: ${entry.slug}`);
});