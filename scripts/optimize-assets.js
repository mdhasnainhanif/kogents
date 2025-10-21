#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Performance optimization script for Kogents AI website
console.log('🚀 Kogents AI Performance Optimization Script\n');

// Check for large files that need optimization
const publicDir = path.join(__dirname, '../public');
const outDir = path.join(__dirname, '../out');

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function scanDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      scanDirectory(filePath, fileList);
    } else {
      const size = stat.size;
      if (size > 100 * 1024) { // Files larger than 100KB
        fileList.push({
          path: filePath.replace(publicDir, '').replace(outDir, ''),
          size: size,
          formattedSize: formatFileSize(size)
        });
      }
    }
  });
  
  return fileList;
}

console.log('📁 Scanning for large files...\n');

const largeFiles = scanDirectory(publicDir);
largeFiles.sort((a, b) => b.size - a.size);

if (largeFiles.length > 0) {
  console.log('⚠️  Large files found that need optimization:\n');
  
  largeFiles.forEach(file => {
    const status = file.size > 1024 * 1024 ? '🔴 CRITICAL' : 
                   file.size > 500 * 1024 ? '🟡 WARNING' : '🟢 MODERATE';
    
    console.log(`${status} ${file.path} - ${file.formattedSize}`);
  });
  
  console.log('\n📋 Optimization Recommendations:\n');
  
  largeFiles.forEach(file => {
    if (file.path.includes('.svg')) {
      console.log(`• ${file.path}: Use SVGO to optimize SVG (target: < 100KB)`);
    } else if (file.path.includes('.png') || file.path.includes('.jpg')) {
      console.log(`• ${file.path}: Convert to WebP format and optimize (target: < 200KB)`);
    } else if (file.path.includes('.css')) {
      console.log(`• ${file.path}: Use PurgeCSS to remove unused styles (target: < 100KB)`);
    }
  });
  
  console.log('\n🛠️  Tools to use:');
  console.log('• SVGO: npm install -g svgo');
  console.log('• PurgeCSS: npm install -g purgecss');
  console.log('• ImageOptim: https://imageoptim.com/');
  console.log('• WebP conversion: Use online tools or ImageMagick');
  
} else {
  console.log('✅ No large files found! Your assets are already optimized.');
}

console.log('\n📊 Performance Targets:');
console.log('• Document request latency: < 200ms (current: 1126ms)');
console.log('• Compression savings: > 80%');
console.log('• Asset sizes: 50-70% reduction');
console.log('• Overall performance score: > 90');

console.log('\n🔧 Next steps:');
console.log('1. Optimize the large files identified above');
console.log('2. Rebuild and redeploy your site');
console.log('3. Test with Google PageSpeed Insights');
console.log('4. Monitor performance improvements');

console.log('\n✨ Happy optimizing!');
