import json
import pandas as pd
from collections import Counter
import os

# Ruta al archivo Base.json (ajusta si está en otra carpeta)
ruta_json = "Base.json"

# Validar si el archivo existe
if not os.path.exists(ruta_json):
    print(f"❌ No se encontró el archivo: {ruta_json}")
    exit()

# Cargar datos
with open(ruta_json, encoding="utf-8") as f:
    try:
        data = json.load(f)
    except json.JSONDecodeError:
        print("❌ Error al leer el archivo JSON. Verifica su formato.")
        exit()

usuarios = data.get("usuarios", [])
pagos = data.get("pagos", [])

# Mostrar cantidad total de usuarios
print("📋 ANALÍTICA DE EVENTOS GERIZIM")
print("=" * 40)
print(f"\n👥 Total de usuarios registrados: {len(usuarios)}")

# Crear DataFrame de pagos
df_pagos = pd.DataFrame(pagos)

if df_pagos.empty:
    print("\n⚠️ No hay pagos registrados.")
else:
    # Convertir montos a números (por si vienen como texto)
    df_pagos["monto"] = pd.to_numeric(df_pagos["monto"], errors="coerce").fillna(0)

    print("\n📊 Cantidad de pagos por tipo de evento:")
    conteo_eventos = df_pagos["evento"].value_counts()
    print(conteo_eventos.to_string())

    print("\n💰 Monto total pagado por tipo de evento:")
    monto_por_evento = df_pagos.groupby("evento")["monto"].sum().sort_values(ascending=False)
    print(monto_por_evento.to_string(float_format="%.2f"))

    print("\n📄 Total pagado por cada persona:")
    pagos_por_persona = df_pagos.groupby("nombre")["monto"].sum().sort_values(ascending=False)
    print(pagos_por_persona.to_string(float_format="%.2f"))

    print("\n✅ Análisis completado con éxito.\n")
