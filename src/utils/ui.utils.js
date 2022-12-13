import cx from 'classnames';

export const getButtonClassNames = ({
  className,
  color,
  size,
  loading,
  disabled,
}) =>
  cx(
    className,
    `button button-${color} button-${size} content-align-center cursor-pointer transition relative font-500`,
    {
      loading,
      'pointer-events-none': loading || disabled,
      disabled,
    }
  );

/**
 * Facilitates `cx` usage:
 * ... `cx({ 'f-column': column, 'f-row': !column })
 * ... becomes `getClass('f-column', 'f-row')`
 */
export const createClassName = (condition) => (first, second) =>
  condition ? first : second;

export const getModalClassNames = (className = 'modal') => {
  const getClassName = createClassName(className);
  const getName = (element) => getClassName(`${className}__${element}`);

  return {
    modal: className,
    backdrop: `${className}-backdrop`,
    closeButton: getName('close-button'),
    container: getName('container'),
    content: getName('content'),
  };
};
