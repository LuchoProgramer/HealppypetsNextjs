import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - HealppyPets',
  description: 'Términos y condiciones de uso de los servicios veterinarios de HealppyPets en Carcelén, Quito.',
  alternates: {
    canonical: 'https://www.healppypets.com/terminos',
  },
  openGraph: {
    title: 'Términos y Condiciones | HealppyPets',
    description: 'Términos y condiciones de uso de servicios veterinarios en HealppyPets, Carcelén.',
    url: 'https://www.healppypets.com/terminos',
    type: 'website',
    locale: 'es_EC',
  },
};

export default function TerminosPage() {
  const lastUpdate = '5 de noviembre de 2025';

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Términos y Condiciones
        </h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-gray-500 mb-8">
            Última actualización: {lastUpdate}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="text-gray-600 mb-4">
              Al acceder y utilizar los servicios de HealppyPets, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con estos términos, por favor no utilice nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Servicios Veterinarios
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                2.1. Los servicios veterinarios son proporcionados por profesionales calificados y con licencia para ejercer en Ecuador.
              </p>
              <p>
                2.2. Las citas deben ser programadas con anticipación y están sujetas a disponibilidad.
              </p>
              <p>
                2.3. Los precios de los servicios pueden variar y están sujetos a cambios sin previo aviso.
              </p>
              <p>
                2.4. En caso de emergencia, haremos todo lo posible por atender a su mascota, pero no podemos garantizar la disponibilidad inmediata.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Responsabilidades del Cliente
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                3.1. Proporcionar información precisa y completa sobre el historial médico de su mascota.
              </p>
              <p>
                3.2. Mantener el control de su mascota durante la visita a nuestras instalaciones.
              </p>
              <p>
                3.3. Cumplir con los planes de tratamiento y seguimiento recomendados.
              </p>
              <p>
                3.4. Realizar los pagos según lo acordado por los servicios prestados.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Políticas de Pago
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                4.1. Los pagos deben realizarse al momento de prestar el servicio.
              </p>
              <p>
                4.2. Aceptamos efectivo y principales tarjetas de crédito/débito.
              </p>
              <p>
                4.3. Algunos tratamientos pueden requerir un depósito previo.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Cancelaciones y Reprogramaciones
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                5.1. Se requiere un aviso de al menos 24 horas para cancelar o reprogramar una cita.
              </p>
              <p>
                5.2. Las cancelaciones sin previo aviso pueden estar sujetas a un cargo.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Privacidad y Confidencialidad
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                6.1. Protegemos la información personal de nuestros clientes y sus mascotas.
              </p>
              <p>
                6.2. No compartimos información con terceros sin consentimiento previo.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Limitación de Responsabilidad
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                7.1. Realizamos nuestro trabajo con el máximo profesionalismo y cuidado.
              </p>
              <p>
                7.2. No podemos garantizar resultados específicos en todos los tratamientos.
              </p>
              <p>
                7.3. No nos hacemos responsables por complicaciones inherentes a los riesgos normales de los procedimientos veterinarios.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Modificaciones a los Términos
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                8.1. Nos reservamos el derecho de modificar estos términos en cualquier momento.
              </p>
              <p>
                8.2. Los cambios entrarán en vigor inmediatamente después de su publicación.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. Contacto
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Para cualquier pregunta sobre estos términos y condiciones, puede contactarnos:
              </p>
              <ul className="list-disc pl-6">
                <li>Teléfono: {SITE_CONFIG.phoneInternational}</li>
                <li>Email: {SITE_CONFIG.email}</li>
                <li>Dirección: {SITE_CONFIG.address.full}</li>
              </ul>
            </div>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} HealppyPets. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}