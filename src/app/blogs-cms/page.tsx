'use client';

import { useState, useEffect } from 'react';

interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  authorId: string;
  categoryId: string;
  tags: string[];
  featuredImage: string;
  status: 'draft' | 'published' | 'archived';
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export default function BlogsCMSPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001';
        const TENANT_ID = process.env.NEXT_PUBLIC_CMS_TENANT_ID || 'EdLQ4SMjykM2kZoJ6iSK';
        
        console.log('Fetching blogs from:', `${CMS_URL}/api/blogs?tenant=${TENANT_ID}`);
        
        const response = await fetch(`${CMS_URL}/api/blogs?tenant=${TENANT_ID}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          // Agregar opciones adicionales para debugging
          cache: 'no-cache',
          mode: 'cors'
        });
        
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Response error text:', errorText);
          throw new Error(`HTTP Error: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        console.log('Blogs fetched successfully:', data);
        
        setBlogs(data.blogs || []);
      } catch (err) {
        console.error('Detailed error fetching blogs:', err);
        if (err instanceof TypeError && err.message.includes('fetch')) {
          setError('Error de conexión: No se puede conectar al servidor CMS. Verifica que esté corriendo en localhost:3001');
        } else {
          setError(err instanceof Error ? err.message : 'Error desconocido');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Cargando blogs del CMS...</h1>
        <div style={{ marginTop: '20px' }}>⏳ Conectando con el CMS...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>❌ Error al cargar blogs</h1>
        <div style={{ 
          backgroundColor: '#fee', 
          border: '1px solid #fcc', 
          padding: '15px', 
          borderRadius: '5px',
          margin: '20px 0'
        }}>
          <strong>Error:</strong> {error}
        </div>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007cba',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          🔄 Reintentar
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        📰 Blogs desde CMS Headless
      </h1>
      
      <div style={{ 
        backgroundColor: '#e7f3ff', 
        border: '1px solid #b3d9ff', 
        padding: '15px', 
        borderRadius: '5px',
        marginBottom: '30px'
      }}>
        <strong>✅ Conexión exitosa:</strong> Se encontraron {blogs.length} blog(s) en el CMS
      </div>

      {blogs.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h2>📝 No hay blogs disponibles</h2>
          <p>Crea un blog en el CMS para verlo aquí.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {blogs.map((blog) => (
            <article 
              key={blog.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                <h2 style={{ margin: '0', color: '#333' }}>{blog.title}</h2>
                <span style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: blog.status === 'published' ? '#d4edda' : '#fff3cd',
                  color: blog.status === 'published' ? '#155724' : '#856404',
                  border: `1px solid ${blog.status === 'published' ? '#c3e6cb' : '#ffeaa7'}`
                }}>
                  {blog.status}
                </span>
              </div>
              
              {blog.excerpt && (
                <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '15px' }}>
                  {blog.excerpt}
                </p>
              )}
              
              <div style={{ 
                color: '#888', 
                fontSize: '14px',
                borderTop: '1px solid #eee',
                paddingTop: '15px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '10px'
              }}>
                <div><strong>ID:</strong> {blog.id}</div>
                <div><strong>Slug:</strong> {blog.slug}</div>
                {blog.tags.length > 0 && (
                  <div><strong>Tags:</strong> {blog.tags.join(', ')}</div>
                )}
                <div><strong>Creado:</strong> {new Date(blog.createdAt).toLocaleDateString()}</div>
              </div>
              
              {blog.content && (
                <details style={{ marginTop: '15px' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                    📄 Ver contenido completo
                  </summary>
                  <div 
                    style={{ 
                      marginTop: '10px', 
                      padding: '15px', 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '4px',
                      maxHeight: '300px',
                      overflow: 'auto'
                    }}
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </details>
              )}
            </article>
          ))}
        </div>
      )}
      
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <a 
          href="/test-cms"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#007cba',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          🔗 Ver página de conexión CMS
        </a>
      </div>
    </div>
  );
}