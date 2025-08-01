import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function RegistroLote() {
    return (
        <AppLayout>
            <Head title="Registro de Lote" />
            <div className="p-6 space-y-6 text-sm text-gray-700">
                <div className="text-center">
                    <img src="/logo.png" alt="Logo" className="mx-auto h-16" />
                    <h1 className="text-2xl font-bold">BATCH RECORD</h1>
                    <p className="text-sm font-medium">(REGISTRO DE LOTE)</p>
                </div>

                {/* Datos Generales */}
                <div className="grid grid-cols-2 gap-4 border p-4 rounded-xl shadow">
                    <div className="grid grid-cols-2 gap-2">
                        <label>CÓDIGO:</label>
                        <input className="border p-1" />
                        <label>PRODUCTO:</label>
                        <input className="border p-1" />
                        <label>OP:</label>
                        <input className="border p-1" />
                        <label>LOTE:</label>
                        <input className="border p-1" />
                        <label>TAMAÑO (mL):</label>
                        <input className="border p-1" />
                        <label>PRESENTACIÓN (mL):</label>
                        <input className="border p-1" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <label>CANTIDAD (UN):</label>
                        <input className="border p-1" />
                        <label>FECHA DE VENCIMIENTO:</label>
                        <input className="border p-1" type="date" />
                        <label>FECHA DE INICIO:</label>
                        <input className="border p-1" type="date" />
                        <label>FECHA DE FINALIZACIÓN:</label>
                        <input className="border p-1" type="date" />
                    </div>
                </div>

                {/* Documentación Contenida */}
                <div>
                    <h2 className="font-semibold text-lg">DOCUMENTACIÓN CONTENIDA</h2>
                    <table className="w-full border mt-2 text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-1">DOCUMENTO</th>
                                <th className="border p-1">RESPONSABLE</th>
                                <th className="border p-1">FECHA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                'EMISIÓN ORDEN DE PRODUCCIÓN Y EMPAQUE',
                                'DESPEJE DISPENSADO',
                                'ETIQUETAS DISPENSADO MATERIA PRIMA',
                                'ESTADOS DE LIMPIEZA ÁREA Y EQUIPOS DISPENSADO',
                                'DESPEJE Y PROCEDIMIENTO DE FABRICACIÓN',
                                'ESTADOS DE LIMPIEZA ÁREA Y EQUIPOS DE FABRICACIÓN',
                                'TARJETA DE APROBACIÓN GRANEL',
                                'ORDEN DE TRABAJO CODIFICADO',
                                'DESPEJE DE LÍNEA CODIFICADO',
                                'CONTROLES DE PROCESO CODIFICADO',
                                'DESPEJE Y PROCEDIMIENTO ENVASADO',
                                'ESTADOS DE LIMPIEZA ÁREA Y EQUIPOS ENVASADO',
                                'ETIQUETAS MATERIAL EMPAQUE',
                                'CONTROLES EN PROCESO LÍNEA DE ENVASADO',
                                'DESPEJE Y PROCEDIMIENTO ACONDICIONAMIENTO',
                                'ESTADOS DE LIMPIEZA ÁREA Y EQUIPOS ACONDICIONAMIENTO',
                                'CONTROLES EN PROCESO ACONDICIONAMIENTO',
                                'CONCILIACIÓN ORDEN DE PRODUCCIÓN',
                                'FORMATO ENTREGA PRODUCTO TERMINADO ALMACÉN',
                                'CERTIFICADO DE ANÁLISIS PRODUCTO TERMINADO',
                                'RÓTULO APROBADO PRODUCTO TERMINADO',
                                'OTROS:'
                            ].map((item, i) => (
                                <tr key={i}>
                                    <td className="border p-1">{item}</td>
                                    <td className="border p-1"><input className="w-full p-1 border" /></td>
                                    <td className="border p-1"><input className="w-full p-1 border" type="date" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Cantidad producida */}
                <div className="grid grid-cols-2 gap-4 border p-4 rounded-xl shadow">
                    <div>
                        <Label>CANTIDAD PRODUCIDA:</Label>
                        <Input
                            autoFocus
                            id="proveedor"
                            name="proveedor"
                            required
                            placeholder="PROVEEDOR"
                        />
                    </div>
                    <div>
                        <Label>FECHA:</Label>
                        <Input
                            type="date"
                            autoFocus
                            id="proveedor"
                            name="proveedor"
                            required
                            placeholder="PROVEEDOR"
                        />
                    </div>
                </div>

                {/* Firmas */}
                <div className="grid grid-cols-3 gap-4 border p-4 rounded-xl shadow">
                    <div>
                        <label>REVISADO POR:</label>
                        <input className="border p-1 w-full" />
                        <label>FECHA:</label>
                        <input className="border p-1 w-full" type="date" />
                    </div>
                    <div>
                        <label>APROBADO POR (GESTIÓN DE CALIDAD):</label>
                        <input className="border p-1 w-full" />
                        <label>FECHA:</label>
                        <input className="border p-1 w-full" type="date" />
                    </div>
                    <div>
                        <label>LIBERADO POR (DIRECCIÓN TÉCNICA):</label>
                        <input className="border p-1 w-full" />
                        <label>FECHA:</label>
                        <input className="border p-1 w-full" type="date" />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
