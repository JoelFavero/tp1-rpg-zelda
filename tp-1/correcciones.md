- **TODOS los `var` deberían ser `const` o `let`** dependiendo el caso. Ya no se usa más `var` para asignar variables. [Más info acá](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

- Muy buenas las funciones `showPicture()` y `UnShowPicture()` aunque la segunda debería empezar en minúscula (todas las functions deben escribirse en **camelCase**). [Más info](https://www.robinwieruch.de/javascript-naming-conventions)

- Está poco claro en el juego qué es lo que está pasando. No entiendo bien cuál es mi ataque y cuál el del enemigo, tampoco me indica qué ataques me está haciendo el enemigo ni cuándo tiene activado el **shield** (_shild está mal escrito_) para usar mi **Final Attack** e ignorarlo. Le faltan un par de retoques al diseño, pero la funcionalidad está bien.

  - Después de leer el código entendí que el texto de **Last Action** indica cuál fue la última acción del enemigo. Ahora entiendo mejor el juego, pero sin haber leído el código no hubiera podido. Quizás con cambiar ese texto por **Last Enemy Action** quedaría más claro.

- Estás usando algunas variables, como por ejemplo `tutorialCount`, `playerShield` o `updateButtonsCount` como si fueran `booleans` pero con números. En esos casos en los que necesitas utilizar variables para que funcionen como una especie de _switch de ON u OFF_, utilizar booleanos (true/false).

- Aunque Javascript haga que funcione por cómo está hecho, tratar de llamar a las funciones **después de haberlas declarado**, para facilitar la comprensión del código. Por ejemplo: `start()` se llama antes de su declaración.

- No marqué todos porque son varios, pero en muchos lugares podrías haber utilizado **template literals** en vez de strings comunes.

- También en varias ocasiones podrías haber utilizado **arrow functions** para ahorrarte la keyword `function` y simplemente escribir `() =>`. Tampoco marqué todos los casos, solo un par.
