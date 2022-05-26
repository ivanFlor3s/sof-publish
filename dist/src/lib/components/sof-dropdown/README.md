## Dropdown component

Componente para esconder o mostrar contenido con un dropdown, el contenido se muestra de forma animada

El componente tiene un input ```collapsed``` que por default tiene el valor en ```false```
- collapsed en false, indica que el contenido no esta collapsado por lo que la primera vez que se muestre el componente se va a mostrar todo el contenido
- collapsed en true, se renderiza el componente con el contenido oculto

Propiedades necesarias para mostrar en la proyeccion:
- headerClickeable
- header
- content

### Ejemplo de uso
```
<sh-sof-dropdown>
    <div headerClickeable>
     <!-- Titulo que acompana al drop-down icon -->
    </div>
    <div header
    <!-- Se deja este espacio para agregar,en el caso de que se necesite, mas contenido al header -->
    </div>
  
    <div content>
      <!-- Aca va el contenido que se va a esconder o mostrar en el dropdown -->
    </div>
  </sh-sof-dropdown>
  
```