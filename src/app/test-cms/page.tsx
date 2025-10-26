/**
 * Test de comunicación entre HealppyPets y CMS Headless
 */

export default async function TestCMSPage() {
    let cmsData = null;
    let error = null;

    try {
        // Intentar conectar con el CMS local - endpoint real
        const response = await fetch('http://localhost:3001/api/tenants', {
            cache: 'no-store'
        });
        
        if (response.ok) {
            cmsData = await response.json();
        } else {
            error = `HTTP ${response.status}: ${response.statusText}`;
        }
    } catch (err: any) {
        error = `Error de conexión: ${err.message}`;
    }

    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
            <div style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                overflow: 'hidden'
            }}>
                <div style={{ 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    padding: '20px' 
                }}>
                    <h2 style={{ margin: 0 }}>
                        🔗 Test de Conexión CMS Headless
                    </h2>
                </div>
                <div style={{ padding: '20px' }}>
                    {error ? (
                        <div style={{ 
                            backgroundColor: '#f8d7da', 
                            color: '#721c24', 
                            padding: '15px', 
                            borderRadius: '4px',
                            marginBottom: '20px'
                        }}>
                            <h5>❌ Error de Conexión</h5>
                            <p style={{ margin: 0 }}>{error}</p>
                            <hr />
                            <small>
                                <strong>Posibles causas:</strong>
                                <ul style={{ marginBottom: 0, marginTop: '10px' }}>
                                    <li>El servidor CMS no está ejecutándose en localhost:3000</li>
                                    <li>Hay un problema de red</li>
                                    <li>El endpoint /api/tenants no existe</li>
                                </ul>
                            </small>
                        </div>
                    ) : cmsData ? (
                        <div style={{ 
                            backgroundColor: '#d4edda', 
                            color: '#155724', 
                            padding: '15px', 
                            borderRadius: '4px' 
                        }}>
                            <h5>✅ Conexión Exitosa</h5>
                            <p>Se conectó correctamente al CMS Headless</p>
                            
                            <h6 style={{ marginTop: '20px' }}>📊 Datos recibidos:</h6>
                            <pre style={{ 
                                backgroundColor: '#f8f9fa', 
                                padding: '15px', 
                                borderRadius: '4px',
                                overflow: 'auto'
                            }}>
                                {JSON.stringify(cmsData, null, 2)}
                            </pre>
                            
                            {cmsData.tenants && cmsData.tenants.length > 0 ? (
                                <div style={{ marginTop: '20px' }}>
                                    <h6>🏢 Tenants disponibles:</h6>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                                        {cmsData.tenants.map((tenant: any) => (
                                            <div key={tenant.id} style={{ 
                                                flex: '1 1 300px',
                                                border: '1px solid #17a2b8',
                                                borderRadius: '4px',
                                                padding: '15px'
                                            }}>
                                                <h6 style={{ margin: '0 0 10px 0' }}>{tenant.name}</h6>
                                                <p style={{ 
                                                    fontSize: '14px', 
                                                    color: '#6c757d',
                                                    margin: '5px 0'
                                                }}>
                                                    ID: {tenant.id}
                                                </p>
                                                {tenant.description && (
                                                    <p style={{ margin: '10px 0 0 0' }}>{tenant.description}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div style={{ 
                                    backgroundColor: '#fff3cd', 
                                    color: '#856404', 
                                    padding: '15px', 
                                    borderRadius: '4px',
                                    marginTop: '20px'
                                }}>
                                    <h6>⚠️ No hay tenants configurados</h6>
                                    <p>Necesitas crear un tenant para HealppyPets en el CMS.</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center' }}>
                            <div>🔄 Cargando...</div>
                            <p style={{ marginTop: '15px' }}>Conectando con CMS...</p>
                        </div>
                    )}
                    
                    <hr style={{ margin: '30px 0' }} />
                    
                    <div style={{ 
                        backgroundColor: '#f8f9fa', 
                        padding: '15px', 
                        borderRadius: '4px' 
                    }}>
                        <h6>🔧 Configuración Actual:</h6>
                        <ul style={{ marginBottom: 0 }}>
                            <li><strong>CMS URL:</strong> {process.env.NEXT_PUBLIC_CMS_URL || 'No configurado'}</li>
                            <li><strong>Tenant ID:</strong> {process.env.NEXT_PUBLIC_CMS_TENANT_ID || 'No configurado'}</li>
                        </ul>
                    </div>
                    
                    <div style={{ marginTop: '20px' }}>
                        <a 
                            href="http://localhost:3001/migration" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                padding: '12px 20px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '4px',
                                textAlign: 'center'
                            }}
                        >
                            🚀 Abrir CMS Headless (Migración)
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}