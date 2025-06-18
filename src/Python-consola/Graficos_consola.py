import json
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

sns.set_theme(style='whitegrid', palette='pastel')

# Ruta JSON
ruta_json = "Base.json"

if not os.path.exists(ruta_json):
    print(f"❌ No se encontró el archivo: {ruta_json}")
    exit()

with open(ruta_json, encoding="utf-8") as f:
    try:
        data = json.load(f)
    except json.JSONDecodeError:
        print("❌ Error al leer el archivo JSON.")
        exit()

usuarios = data.get("usuarios", [])
pagos = data.get("pagos", [])

df = pd.DataFrame(pagos)
df["monto"] = pd.to_numeric(df["monto"], errors="coerce").fillna(0)

if df.empty:
    print("⚠️ No hay pagos registrados.")
    exit()

# Gráfico 1: Total por evento
total_por_evento = df.groupby("evento")["monto"].sum().reset_index()
plt.figure(figsize=(8,5))
sns.barplot(data=total_por_evento, x="evento", y="monto")
plt.title("💰 Total Pagado por Tipo de Evento")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("grafico_total_evento.png")
plt.close()

# Gráfico 2: Distribución de eventos
plt.figure(figsize=(6,6))
df["evento"].value_counts().plot(kind="pie", autopct="%1.1f%%", pctdistance=0.85)
plt.title("📊 Distribución de Tipos de Eventos")
plt.ylabel("")
plt.tight_layout()
plt.savefig("grafico_pie_evento.png")
plt.close()

# Gráfico 3: Total por persona
total_por_persona = df.groupby("nombre")["monto"].sum().reset_index()
plt.figure(figsize=(8,5))
sns.barplot(data=total_por_persona, x="nombre", y="monto")
plt.title("💳 Total Pagado por Persona")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("grafico_total_persona.png")
plt.close()

# Plantilla HTML
with open("template.html", "r", encoding="utf-8") as f:
    template = f.read()

html_filled = template.format(
    usuarios=len(usuarios),
    tabla_total_evento=total_por_evento.to_html(index=False, classes="table table-striped"),
    tabla_total_persona=total_por_persona.to_html(index=False, classes="table table-striped"),
)

with open("reporte_gerizim.html", "w", encoding="utf-8") as f:
    f.write(html_filled)

print("✅ Reporte generado: abre 'reporte_gerizim.html' en tu navegador.")
