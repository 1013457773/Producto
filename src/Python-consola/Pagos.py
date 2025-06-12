import pandas as pd

pagos = []

def registrar_pagos(nombre, metodo, monto):
    pago = {"nombre": nombre, "metodo": metodo, "monto": monto}
    pagos.append(pago)
    print(f"\n✅ Pago registrado: {nombre} pagó ${monto} por {metodo}\n")

def mostrar_pagos():
    if not pagos:
        print("\n❌ No hay pagos registrados.\n")
        return
    print("\n📋 Pagos registrados:")
    for i, pago in enumerate(pagos, 1):
        print(f"{i}. {pago['nombre']} - {pago['metodo']} - ${pago['monto']}")
    print()

def buscar_por_nombre(nombre):
    encontrados = [p for p in pagos if p["nombre"].lower() == nombre.lower()]
    if encontrados:
        print(f"\n🔍 Resultados para '{nombre}':")
        for pago in encontrados:
            print(f"- {pago['metodo']} - ${pago['monto']}")
    else:
        print(f"\n❌ No se encontraron pagos de '{nombre}'.")

# Menú para probarlo
while True:
    print("\n1. Registrar pago\n2. Mostrar pagos\n3. Buscar por nombre\n4. Salir")
    opcion = input("Selecciona una opción: ")
    
    if opcion == "1":
        nombre = input("Nombre: ")
        metodo = input("Método de pago: ")
        monto = float(input("Monto: "))
        registrar_pagos(nombre, metodo, monto)
    elif opcion == "2":
        mostrar_pagos()
    elif opcion == "3":
        nombre = input("Nombre a buscar: ")
        buscar_por_nombre(nombre)
    elif opcion == "4":
        break
    else:
        print("Opción inválida.")
