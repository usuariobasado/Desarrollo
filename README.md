Perfecto, aquí lo tienes corregido con los nombres reales:

---

# Desarrollo – Documentación del Proyecto

## 1. Diseño

### **Arquitectura Cliente-Servidor (explicación corta)**

La aplicación sigue el modelo **cliente-servidor**, donde:

* **Cliente:** el navegador del usuario que pide la página web.
* **Servidor:** GitHub Pages, que entrega los archivos HTML, CSS y JS.

No hay backend propio; el servidor solo entrega los archivos y el cliente los ejecuta.

---

## 2. Desarrollo y uso de Branches

Para organizar el trabajo, creamos **tres branches**:

* `hugo`
* `JJ`
* `ivan`

Cada uno desarrollaba sus partes en su propia rama. Después:

1. Hacíamos los cambios.
2. Comprobábamos que todo funcionaba.
3. Hacíamos **merge a main** desde GitHub Desktop o VS Code.
4. Probábamos la web tras el merge.

Este método evitó pisarnos el código y permitió trabajar de forma organizada.

---

## 3. Despliegue (GitHub Pages)

Nuestra experiencia con GitHub Pages:

* Activamos la opción desde **Settings → Pages**.
* Elegimos la rama **main**.
* El enlace **fallaba al principio** porque faltaba un `index.html` en la raíz.
* Tras añadirlo, la web cargó correctamente.
* Algunas veces tardaba unos segundos en actualizarse, típico de Pages.

---

## 4. Mantenimiento

### **Errores encontrados**

* Rutas relativas mal puestas (`./`, `../`).
* CSS mal vinculado por mover carpetas.
* Conflictos de merge entre nuestras ramas.
* Página en blanco por nombres de archivo mal escritos.

### **Mejoras futuras**

* Crear más páginas dentro del proyecto.
* Reordenar y optimizar la hoja de estilos.
* Añadir interacciones con JavaScript.
* Mejorar la estructura visual general.

---

## 5. Conclusión

El proyecto nos ayudó a practicar trabajo en equipo con GitHub: uso de branches, merges, organización del código y despliegue con GitHub Pages. También aprendimos a solucionar errores típicos y a estructurar un proyecto web básico.

El resultado final es una web sencilla, clara y con un proceso de desarrollo completo.

---

Si quieres, lo dejo más corto, más formal o más visual.
