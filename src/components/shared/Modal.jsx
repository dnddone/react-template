import React, { Children, cloneElement, useCallback, useState } from 'react';
import ModalComponent from '@restart/ui/Modal';
import { faCircleXmark } from '@fortawesome/pro-light-svg-icons';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getModalClassNames } from '@utils';

import { Button, IconBox, Render, Transition } from '@components';

const propTypes = {
  defaultOpen: PropTypes.bool,
  showCloseIcon: PropTypes.bool,
  containerClassName: PropTypes.string,
  /**
   * Use it for default button component
   *
   * todo: add shared button type
   */
  button: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  content: PropTypes.node,
  children: PropTypes.node,
};
const defaultProps = {
  defaultOpen: false,
  showCloseIcon: true,
  containerClassName: null,
  button: null,
  content: null,
  children: null,
};

export const Modal = ({
  defaultOpen,
  showCloseIcon,
  containerClassName,
  button,
  content,
  children,
  ...props
}) => {
  const [open, setOpen] = useState(defaultOpen);

  const modalContent = content ?? children;
  const classNames = getModalClassNames();

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const closeIcon = (
    <Render if={showCloseIcon}>
      <Button
        theme
        className={cx(classNames.closeButton, 'grey-4')}
        onClick={handleClose}
      >
        <IconBox icon={faCircleXmark} />
      </Button>
    </Render>
  );

  const renderModalTrigger = () => {
    if (typeof button === 'string') {
      return <Button onClick={handleOpen}>{button}</Button>;
    }

    /**
     * todo: add modal trigger for `button` as `node`
     */

    if (children) {
      return cloneElement(children, { onClick: handleOpen });
    }

    return null;
  };

  const renderBackdrop = (backdropProps) => (
    <div {...backdropProps} className={classNames.backdrop} />
  );

  return (
    <>
      <Transition mountOnEnter unmountOnExit in={open} className="fade">
        <ModalComponent
          role="dialog"
          show={open}
          className={cx(
            classNames.modal,
            classNames.container,
            containerClassName
          )}
          renderBackdrop={renderBackdrop}
          onHide={handleClose}
        >
          <div>
            {closeIcon}
            {Children.map(modalContent, (child) =>
              cloneElement(child, { ...props, onHide: handleClose })
            )}
          </div>
        </ModalComponent>
      </Transition>
      {renderModalTrigger()}
    </>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
