<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Reporte de Recepción de Materiales</title>
    <style>
        body { font-family: sans-serif; font-size: 12px; margin: 20px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
        th, td { border: 1px solid #000; padding: 6px; vertical-align: top; }
        .no-border td { border: none; }
        .title { text-align: center; font-weight: bold; font-size: 16px; margin-bottom: 20px; }
        .subtitle { text-align: center; font-weight: bold; font-size: 12px; margin-bottom: 20px; }
        .section-title { font-weight: bold; background-color: #eee; padding: 4px; }
        .checkbox { text-align: center; }
        .obs { height: 60px; }

        .page-break {
            page-break-before: always;
        }
    </style>
</head>
<body>

    <div class="title">REPORTE DE RECEPCIÓN DE MATERIALES encabezado logo y encabezado</div>

    <table class="no-border">
        <tr>
            <td><strong>Código:</strong> F-BO-01-06</td>
            <td><strong>Fecha Emisión:</strong> {{ $item->fecha_emision ?? '21-11-2023' }}</td>
            <td><strong>Página:</strong> 1 de 2</td>
        </tr>
    </table>

    <table>
        <tr>
            <td class="section-title"><strong>Fecha Ingreso:</strong></td>
            <td colspan="3">{{ $item->created_at ?? '' }}</td>
        </tr>
        <tr>
            <td colspan="4" class="section-title subtitle">DESCRIPCION</td>
        </tr>
        <tr>
            <td><strong>Código:</strong></td>
            <td>{{ $item->codigo ?? '' }}</td>
            <td><strong>Nombre:</strong></td>
            <td>{{ $item->nombre ?? '' }}</td>
        </tr>
    </table>

    <table>
        <tr><td colspan="4" class="section-title subtitle">DATOS DE COMPRA</td></tr>
        <tr>
            <td><strong>Proveedor</strong></td>
            <td>{{ $item->proveedor ?? '' }}</td>
            <td><strong>Fabricante</strong></td>
            <td>{{ $item->fabricante ?? '' }}</td>
        </tr>
        <tr>
            <td><strong>Dirección Proveedor</strong></td>
            <td colspan="3">{{ $item->direccion ?? '' }}</td>
        </tr>
            <td><strong>Orden de Compra</strong></td>
            <td>{{ $item->orden_compra ?? '' }}</td>
            <td><strong>Factura/Remisión</strong></td>
            <td>{{ $item->factura ?? '' }}</td>
        </tr>
        <tr>
            <td><strong>Lote Proveedor</strong></td>
            <td>{{ $item->lote ?? '' }}</td>
            <td><strong>Fecha Vencimiento</strong></td>
            <td>{{ $item->fecha_vencimiento ?? '' }}</td>
        </tr>
    </table>
    
    <table>
        <tr><td colspan="4" class="section-title subtitle">INFORMACIÓN MATERIAL</td></tr>
        <tr>
            <td><strong>Lote NMD</strong></td>
            <td>{{ $item->lote_nmd ?? '' }}</td>
            <td><strong>Cantidad Total</strong></td>
            <td>{{ $item->cantidad_total ?? '' }}</td>
        </tr>
        <tr>
            <td><strong>Cantidad por Contenedor</strong></td>
            <td>{{ $item->cantidad_contenedor ?? '' }}</td>
            <td><strong>N.º Contenedores</strong></td>
            <td>{{ $item->n_contenedores ?? '' }}</td>
        </tr>
        <tr>
            <td><strong>Unidad de Medida</strong></td>
            <td>{{ $item->unidad_medida ?? '' }}</td>
            <td><strong>Valor de Conversión</strong></td>
            <td>{{ $item->valor_conversion ?? '' }}</td>
        </tr>
    </table>

    <table>
        <tr>
            <td colspan="8" class="section-title subtitle">CONTENEDOR</td>
        </tr>
        <tr>
            <td colspan="4">MATERIAL</td>
            <td colspan="4">DESCRIPCION</td>
        </tr>
        <tr>
            <td>Papel</td>
            <td class="checkbox">{{ $item->material == 'PAPEL' ? 'X' : '' }}</td>
            <td>Polietileno</td>
            <td class="checkbox">{{ $item->material == 'POLIETILENO' ? 'X' : '' }}</td>
            <td>Saco</td>
            <td class="checkbox">{{ $item->descripcion == 'SACO' ? 'X' : '' }}</td>
            <td>Caja</td>
            <td class="checkbox">{{ $item->descripcion == 'CAJA' ? 'X' : '' }}</td>
        </tr>
        <tr>
            <td rowspan="2">Cartón</td>
            <td rowspan="2" class="checkbox">{{ $item->material == 'CARTON' ? 'X' : '' }}</td>
            <td rowspan="2">Otro ¿Cuál?</td>
            <td  rowspan="2" class="checkbox">{{ $item->material == 'OTRO' ? 'X' : '' }}</td>
            <td>Tambor</td>
            <td class="checkbox">{{ $item->descripcion == 'TAMBOR' ? 'X' :'' }}</td>
            <td>Bulto</td><td class="checkbox">{{ $item->descripcion == 'BULTO' ? 'X' : '' }}</td>
        </tr>
        <tr>
            <td>Bolsa</td>
            <td class="checkbox">{{ $item->descripcion == 'BOLSA' ? 'X' : '' }}</td>
            <td>Otro ¿Cuál?</td>
            <td>{{ $item->descripcion == 'OTRO' ? 'X' : '' }}</td>
        </tr>
        <tr>
            <td colspan="2">CERTIFICADO DE ANÁLISIS</td>
            <td>SI</td>
            <td class="checkbox">{{ $item->certificado_analisis == '1' ? 'X' : '' }}</td>
            <td>NO</td>
            <td class="checkbox">{{ $item->certificado_analisis == '0' ? 'X' : '' }}</td>
            <td colspan="2"></td>
        </tr>
        <tr>
            <td colspan="2">¿ALMACENAR EN CONDICIONES ESPECIALES?</td>
            <td>SI</td>
            <td class="checkbox">{{ $item->almacenar_especial == '1' ? 'X' : '' }}</td>
            <td>NO</td>
            <td class="checkbox">{{ $item->almacenar_especial == '0' ? 'X' : '' }}</td>
            <td>T (ºC) =</td>
            <td class="checkbox">{{ $item->t_c ?? '' }}</td>
        </tr>
    </table>

    <table>
        <tr><td class="section-title subtitle">OBSERVACIONES</td></tr>
        <tr><td class="obs">{{ $item->observaciones ?? '' }}</td></tr>
    </table>

    <div class="page-break"></div>

    <div class="title">REPORTE DE RECEPCIÓN DE MATERIALES</div>

    <table class="no-border">
        <tr>
            <td><strong>Código:</strong> F-BO-01-06</td>
            <td><strong>Fecha Emisión:</strong> {{ $item->fecha_emision ?? '21-11-2023' }}</td>
            <td><strong>Página:</strong> 2 de 2</td>
        </tr>
    </table>

    <table>
        <tr>
            <td colspan="4" class="section-title subtitle">LISTA DE VERIFICACIÓN</td>
        </tr>
        <tr>
            <td class="section-title subtitle">ESTADO DE LOS COTENEDORES Y MATERIALES</td>
            <td class="section-title subtitle">SI</td>
            <td class="section-title subtitle">NO</td>
            <td class="section-title subtitle">OBSERVACIONES</td>
        </tr>
        <tr>
            <td> ¿EL CONTENEDOR ESTA DEBIDAMENTE IDENTIFICADO, SELLADO Y ETIQUETADO? </td>
            <td class="checkbox">{{ $item->contenedor_identificado == '1' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->contenedor_identificado == '0' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->contenedor_identificado_obs ?? '' }}</td>
        </tr>
        <tr>
            <td> ¿EL CONTENEDOR PRESENTA SUCIEDAD? </td>
            <td class="checkbox">{{ $item->contendor_sucio == '1' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->contendor_sucio == '0' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->contendor_sucio_obs ?? '' }}</td>
        </tr>
        <tr>
            <td> ¿EL CONTENEDOR PRESENTA SIGNOS DE HUMEDAD? </td>
            <td class="checkbox">{{ $item->contenedor_humedo == '1' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->contenedor_humedo == '0' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->contenedor_humedo_obs ?? '' }}</td>
        </tr>
        <tr>
            <td> ¿EL MATERIAL PRESENTA OLOR EXTRAÑO? </td>
            <td class="checkbox">{{ $item->olor_extrano == '1' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->olor_extrano == '0' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->olor_extrano_obs ?? '' }}</td>
        </tr>
        <tr>
            <td> ¿EL CONTENEDOR PRESENTA DERRAME POR RASGADURA O PERFORACIÓN? </td>
            <td class="checkbox">{{ $item->contenedor_derrame == '1' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->contenedor_derrame == '0' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->contenedor_derrame_obs ?? '' }}</td>
        </tr>
        <tr>
            <td> ¿EL CONTENEDOR ESTA GOLPEADO? </td>
            <td class="checkbox">{{ $item->contenedor_golpeado == '1' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->contenedor_golpeado == '0' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->contenedor_golpeado_obs ?? '' }}</td>
        </tr>
        <tr>
            <td> ¿EL CONTENEDOR ESTA ROTO, PERFORADO O RASGADO? </td>
            <td class="checkbox">{{ $item->contenedor_roto == '1' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->contenedor_roto == '0' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->contenedor_roto_obs ?? '' }}</td>
        </tr>
        <tr>
            <td> ¿EL MATERIAL PRESENTA MENOR CANTIDAD DE LA DECLARADA EN LA ORDEN DE COMPRA? (FALTANTE) </td>
            <td class="checkbox">{{ $item->material_menor_cantidad == '1' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->material_menor_cantidad == '0' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->material_menor_cantidad_obs ?? '' }}</td>
        </tr>
        <tr>
            <td> ¿EL MATERIAL PRESENTA MAYOR CANTIDAD DE LA DECLARADA EN LA ORDEN DE COMPRA? (EXCESO) </td>
            <td class="checkbox">{{ $item->material_mayor_cantidad == '1' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->material_mayor_cantidad == '0' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->material_mayor_cantidad_obs ?? '' }}</td>
        </tr>
        <tr>
            <td> ¿LA FECHA DE VENCIMIENTO ESTA VIGENTE? (NO MENOR A 12 MESES) </td>
            <td class="checkbox">{{ $item->_fecha_vigente == '1' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->_fecha_vigente == '0' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->_fecha_vigente_obs ?? '' }}</td>
        </tr>
        <tr>
            <td> ¿EL MATERIAL VIENE ACOMPAÑADO DE FACTURA Y/O REMISION? </td>
            <td class="checkbox">{{ $item->material_factura == '1' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->material_factura == '0' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->material_factura_obs ?? '' }}</td>
        </tr>
        <tr>
            <td> ¿LA DESCRIPCION Y LA CANTIDAD DEL MATERIAL CORRESPONDE A LA ORDEN DE COMPRA? </td>
            <td class="checkbox">{{ $item->descripcion_corresponde == '1' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->descripcion_corresponde == '0' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->descripcion_corresponde_obs ?? '' }}</td>
        </tr>
        <tr>
            <td> ¿EL MATERIAL VIENE CON SU CERTIFICADO DE ANALISIS? </td>
            <td class="checkbox">{{ $item->material_certificado == '1' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->material_certificado == '0' ? 'X' : '' }}</td>
            <td class="checkbox">{{ $item->material_certificado_obs ?? '' }}</td>
        </tr>
    </table>

    <table>
        <tr>
            <td class="section-title"><strong>Realizado por:</strong></td>
            <td>{{ $item->creator->name ?? '' }}</td>
            <td class="section-title"><strong>Fecha:</strong></td>
            <td>{{ $item->created_at ?? '' }}</td>
        </tr>
        <tr>
            <td class="section-title"><strong>Verificado por:</strong></td>
            <td>{{ $item->approver->name ?? '' }}</td>
            <td class="section-title"><strong>Fecha:</strong></td>
            <td>{{ $item->approved_at ??  '' }}</td>
        </tr>
    </table>

</body>
</html>
