# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Для того щоб виглядати професіоналом при роботі зі styled-components, 
важливо використовувати зрозумілі, семантичні імена для ваших компонентів,
 які відображають їхню роль або контекст на сторінці. Ось кілька 
 рекомендацій щодо іменування:

Семантичність імен:

Використовуйте назви, що описують функцію елемента. Наприклад, замість Div назвіть компонент Container, Wrapper або Section залежно від його ролі.
Для заголовків: Title, Heading, SectionTitle, PageTitle.
Для текстових елементів: Text, Paragraph, Description, Caption.
Уникання технічних термінів:

Не використовуйте імен, які безпосередньо відображають HTML-тег (на кшталт Div, P, H1), краще використовувати значення на рівні контенту.
Компоненти з контекстом:

Якщо компонент специфічний для певної частини сайту (наприклад, інтернет-магазину), уточнюйте його роль. Наприклад:
ProductCard, ProductDescription, ProductImage для сторінок товарів.
CartItem, CartTotal, CheckoutButton для корзини покупок.
Модифікатори та стани:

Якщо компонент змінює стан (наприклад, активність кнопки чи відкриття/закриття списку), можна використовувати назви, які включають стан: ButtonActive, MenuOpen.
З такими іменами код виглядатиме чистіше, і легше буде орієнтуватися в структурі.
