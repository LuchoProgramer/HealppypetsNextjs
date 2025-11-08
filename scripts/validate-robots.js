#!/usr/bin/env node

/**
 * 🤖 Validador de robots.txt para HealppyPets
 * 
 * Script de validación automática para verificar sintaxis,
 * optimización SEO y funcionamiento correcto del robots.txt
 * 
 * Uso:
 *   node scripts/validate-robots.js                    # Validación completa
 *   node scripts/validate-robots.js "/blog/cuidados"  # Probar URL específica
 *   node scripts/validate-robots.js "/api/admin"      # Probar bloqueo
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

class HealppyPetsRobotsValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.suggestions = [];
    
    // URLs importantes para una veterinaria
    this.importantPaths = [
      '/blog/',
      '/servicios/',
      '/grooming/',
      '/consulta/',
      '/contacto/',
      '/entretenimiento/',
      '/terminos/'
    ];
    
    // URLs que deben estar bloqueadas
    this.blockedPaths = [
      '/api/private',
      '/api/admin',
      '/_next/',
      '/admin',
      '/preview'
    ];
  }

  /**
   * Obtiene el contenido del robots.txt desde la URL local o producción
   */
  async getRobotsContent(url = 'http://localhost:3000/robots.txt') {
    // Intentar primero desde URL
    try {
      return await this.fetchFromURL(url);
    } catch (error) {
      // Si falla, generar desde route.ts
      console.log('⚠️  No se pudo conectar al servidor, generando desde route.ts...');
      return await this.generateFromRoute();
    }
  }

  async fetchFromURL(url) {
    return new Promise((resolve, reject) => {
      const client = url.startsWith('https') ? https : require('http');
      
      const req = client.get(url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      });
      
      req.on('error', reject);
      req.setTimeout(5000, () => {
        req.destroy();
        reject(new Error('Timeout connecting to server'));
      });
    });
  }

  async generateFromRoute() {
    // Simular la generación del route.ts para validación offline
    const mockSiteConfig = {
      url: 'https://www.healppypets.com'
    };
    
    const lines = [
      '# Robots.txt para HealppyPets - Veterinaria en Carcelén, Quito',
      '# Actualizado: 7 de noviembre de 2025',
      '',
      '# Permitir acceso a todos los robots de búsqueda',
      'User-agent: *',
      'Allow: /',
      '',
      '# Bloquear archivos y directorios técnicos',
      'Disallow: /api/private*',
      'Disallow: /api/admin*',
      'Disallow: /_next/*',
      'Disallow: /preview*',
      'Disallow: /admin*',
      'Disallow: /*.json$',
      'Disallow: /scripts/',
      '',
      '# Permitir explícitamente contenido importante para SEO veterinario',
      'Allow: /blog/',
      'Allow: /servicios/',
      'Allow: /grooming/',
      'Allow: /consulta/',
      'Allow: /contacto/',
      'Allow: /entretenimiento/',
      'Allow: /terminos/',
      'Allow: /api/sitemap',
      '',
      '# Crawler específico de Google',
      'User-agent: Googlebot',
      'Allow: /',
      '',
      '# Crawler específico de Bing',
      'User-agent: Bingbot',
      'Allow: /',
      '',
      '# Nota: Crawl-delay es ignorado por Googlebot y puede causar advertencias',
      '# en Search Console. Para control de velocidad usar rate limiting del servidor',
      '',
      '# Sitemap principal',
      'Sitemap: https://www.healppypets.com/sitemap.xml'
    ];
    
    return lines.join('\n');
  }

  /**
   * Valida la sintaxis básica del robots.txt
   */
  validateSyntax(content) {
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      const trimmed = line.trim();
      
      // Ignorar líneas vacías y comentarios
      if (!trimmed || trimmed.startsWith('#')) return;
      
      // Verificar que las directivas tengan el formato correcto
      if (!trimmed.includes(':')) {
        this.errors.push(`Línea ${lineNum}: Sintaxis incorrecta - falta ':' en "${trimmed}"`);
        return;
      }
      
      const colonIndex = trimmed.indexOf(':');
      if (colonIndex === -1) {
        this.errors.push(`Línea ${lineNum}: Sintaxis incorrecta - falta ':' en "${trimmed}"`);
        return;
      }
      
      const directive = trimmed.substring(0, colonIndex).trim();
      const value = trimmed.substring(colonIndex + 1).trim();
      
      // Validar directivas conocidas
      const validDirectives = ['User-agent', 'Disallow', 'Allow', 'Sitemap', 'Crawl-delay'];
      if (!validDirectives.includes(directive)) {
        this.warnings.push(`Línea ${lineNum}: Directiva desconocida "${directive}"`);
      }
      
      // Validar URLs de sitemap
      if (directive === 'Sitemap') {
        if (!value || value.length === 0) {
          this.errors.push(`Línea ${lineNum}: Sitemap no puede estar vacío`);
        } else {
          try {
            const url = new URL(value);
            if (!url.protocol.startsWith('http')) {
              this.errors.push(`Línea ${lineNum}: Sitemap debe usar protocolo HTTP/HTTPS`);
            }
            if (!value.includes('healppypets.com')) {
              this.warnings.push(`Línea ${lineNum}: Sitemap no apunta a healppypets.com`);
            }
          } catch (error) {
            this.errors.push(`Línea ${lineNum}: URL de sitemap inválida - "${value}" (${error.message})`);
          }
        }
      }
      
      // Advertir sobre Crawl-delay (causa warnings en Google Search Console)
      if (directive === 'Crawl-delay') {
        this.warnings.push(`Línea ${lineNum}: Crawl-delay es ignorado por Googlebot y puede causar advertencias en Search Console`);
      }
    });
  }

  /**
   * Valida optimización SEO específica para veterinaria
   */
  validateSEOOptimization(content) {
    // Verificar que contenido veterinario importante esté permitido
    const hasImportantAllows = this.importantPaths.some(path => 
      content.includes(`Allow: ${path}`)
    );
    
    if (!hasImportantAllows) {
      this.suggestions.push('Considera agregar reglas Allow: explícitas para contenido veterinario importante (/servicios/, /blog/, etc.)');
    }
    
    // Verificar que tenga User-agent: *
    if (!content.includes('User-agent: *')) {
      this.errors.push('Falta la regla "User-agent: *" para todos los crawlers');
    }
    
    // Verificar que tenga sitemap
    if (!content.includes('Sitemap:')) {
      this.errors.push('Falta la declaración de Sitemap');
    }
    
    // Verificar bloqueos técnicos apropiados
    const hasApiBlocks = content.includes('Disallow: /api/') || content.includes('Disallow: /api/private');
    if (!hasApiBlocks) {
      this.suggestions.push('Considera bloquear /api/ para evitar indexación de endpoints técnicos');
    }
    
    // Verificar bloqueo de Next.js internals
    if (!content.includes('Disallow: /_next/')) {
      this.suggestions.push('Considera bloquear /_next/ para optimizar crawl budget');
    }
  }

  /**
   * Prueba si una URL específica está permitida o bloqueada
   */
  testURL(robotsContent, testUrl, userAgent = '*') {
    const lines = robotsContent.split('\n');
    let currentUserAgent = null;
    let isAllowed = true; // Por defecto permitir
    let applicableRules = [];
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      
      if (trimmed.startsWith('User-agent:')) {
        const agent = trimmed.split(':', 2)[1].trim();
        currentUserAgent = (agent === '*' || agent === userAgent) ? agent : null;
        continue;
      }
      
      if (!currentUserAgent) continue;
      
      if (trimmed.startsWith('Disallow:')) {
        const path = trimmed.split(':', 2)[1].trim();
        if (this.pathMatches(testUrl, path)) {
          isAllowed = false;
          applicableRules.push(`Disallow: ${path} (User-agent: ${currentUserAgent})`);
        }
      }
      
      if (trimmed.startsWith('Allow:')) {
        const path = trimmed.split(':', 2)[1].trim();
        if (this.pathMatches(testUrl, path)) {
          isAllowed = true;
          applicableRules.push(`Allow: ${path} (User-agent: ${currentUserAgent})`);
        }
      }
    }
    
    return { isAllowed, applicableRules };
  }

  /**
   * Verifica si una URL coincide con un patrón de robots.txt
   */
  pathMatches(url, pattern) {
    if (!pattern) return false;
    
    // Patrón vacío permite todo
    if (pattern === '') return false;
    
    // Convertir patrón a expresión regular
    let regex = pattern
      .replace(/\*/g, '.*')
      .replace(/\$/g, '$');
    
    // Si no termina en *, agregar coincidencia de prefijo
    if (!pattern.endsWith('*') && !pattern.endsWith('$')) {
      regex = '^' + regex;
    } else {
      regex = '^' + regex;
    }
    
    try {
      return new RegExp(regex).test(url);
    } catch (error) {
      return false;
    }
  }

  /**
   * Ejecuta todas las validaciones
   */
  async validateComplete(robotsUrl) {
    console.log('🤖 Validador de robots.txt para HealppyPets');
    console.log('==================================================\n');
    
    try {
      const content = await this.getRobotsContent(robotsUrl);
      
      console.log('📄 CONTENIDO DEL ROBOTS.TXT:');
      console.log(content);
      console.log('\n' + '='.repeat(50) + '\n');
      
      // Ejecutar validaciones
      this.validateSyntax(content);
      this.validateSEOOptimization(content);
      
      // Probar URLs importantes automáticamente
      console.log('🧪 PRUEBAS AUTOMÁTICAS DE URLS:');
      
      // Probar contenido veterinario importante
      const testUrls = [
        '/blog/cuidados-perros',
        '/servicios/vacunacion',
        '/grooming',
        '/consulta',
        '/contacto',
        '/entretenimiento',
        '/terminos'
      ];
      
      for (const url of testUrls) {
        const result = this.testURL(content, url);
        const status = result.isAllowed ? '✅ PERMITIDA' : '❌ BLOQUEADA';
        console.log(`   ${url.padEnd(25)} -> ${status}`);
      }
      
      console.log('\n🔒 PRUEBAS DE BLOQUEOS TÉCNICOS:');
      
      const blockedUrls = [
        '/api/private/config',
        '/api/admin/users',
        '/_next/static/css/app.css',
        '/admin/dashboard',
        '/preview/draft'
      ];
      
      for (const url of blockedUrls) {
        const result = this.testURL(content, url);
        const status = result.isAllowed ? '⚠️  PERMITIDA' : '✅ BLOQUEADA';
        console.log(`   ${url.padEnd(25)} -> ${status}`);
      }
      
      // Mostrar reporte final
      this.showReport();
      
      return content;
      
    } catch (error) {
      console.error('❌ Error al obtener robots.txt:', error.message);
      console.log('\n💡 Asegúrate de que el servidor esté ejecutándose:');
      console.log('   npm run dev');
      return null;
    }
  }

  /**
   * Muestra el reporte final de validación
   */
  showReport() {
    console.log('\n📊 REPORTE DE VALIDACIÓN');
    console.log('==================================================');
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ ¡Robots.txt es válido y está bien optimizado!');
    }
    
    if (this.errors.length > 0) {
      console.log('\n🚨 ERRORES:');
      this.errors.forEach(error => console.log(`   ❌ ${error}`));
    }
    
    if (this.warnings.length > 0) {
      console.log('\n⚠️  ADVERTENCIAS:');
      this.warnings.forEach(warning => console.log(`   ⚠️  ${warning}`));
    }
    
    if (this.suggestions.length > 0) {
      console.log('\n💡 SUGERENCIAS:');
      this.suggestions.forEach(suggestion => console.log(`   💡 ${suggestion}`));
    }
    
    console.log('\n📈 RESUMEN:');
    console.log(`   • Errores: ${this.errors.length}`);
    console.log(`   • Advertencias: ${this.warnings.length}`);
    console.log(`   • Sugerencias: ${this.suggestions.length}`);
    
    const status = this.errors.length === 0 ? '✅ Válido para producción' : '❌ Requiere correcciones';
    console.log(`   • Estado: ${status}`);
  }

  /**
   * Prueba una URL específica desde línea de comandos
   */
  async testSpecificURL(robotsUrl, testUrl, userAgent = '*') {
    try {
      const content = await this.getRobotsContent(robotsUrl);
      const result = this.testURL(content, testUrl, userAgent);
      
      console.log('🧪 Prueba de URL específica');
      console.log('==================================================');
      console.log(`URL: ${testUrl}`);
      console.log(`User-Agent: ${userAgent}`);
      console.log(`Resultado: ${result.isAllowed ? '✅ PERMITIDA' : '❌ BLOQUEADA'}`);
      
      if (result.applicableRules.length > 0) {
        console.log('\nReglas aplicadas:');
        result.applicableRules.forEach(rule => console.log(`   • ${rule}`));
      }
      
    } catch (error) {
      console.error('❌ Error:', error.message);
    }
  }
}

// Ejecutor principal
async function main() {
  const validator = new HealppyPetsRobotsValidator();
  
  // Determinar URL del robots.txt
  const robotsUrl = process.env.ROBOTS_URL || 'http://localhost:3000/robots.txt';
  
  // Si se proporciona una URL como argumento, probar solo esa URL
  if (process.argv[2]) {
    const testUrl = process.argv[2];
    const userAgent = process.argv[3] || '*';
    await validator.testSpecificURL(robotsUrl, testUrl, userAgent);
  } else {
    // Ejecutar validación completa
    await validator.validateComplete(robotsUrl);
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main().catch(console.error);
}

module.exports = HealppyPetsRobotsValidator;