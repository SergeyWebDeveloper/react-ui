import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useToast } from '#src/components/Toast/useToast';
import type { PositionToasts } from '#src/components/Toast/ToastProvider';
import type { IdentifyToast } from '#src/components/Toast/type';
import { Notification } from '#src/components/Notification';

const Container = styled.div<{ position: PositionToasts }>`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 384px;
  z-index: ${({ theme }) => theme.zIndex.notification};
  ${(p) => p.position === 'top-right' && 'top: 16px'};
  ${(p) => (p.position === 'bottom-right' || p.position === 'bottom-left') && 'bottom: 16px'};
  ${(p) => (p.position === 'top-right' || p.position === 'bottom-right') && 'right: 16px'};
  ${(p) => p.position === 'bottom-left' && 'left: 16px'};
  pointer-events: none;
  > * {
    pointer-events: initial;
  }
`;
const fadeInRight = keyframes`
  from {
    transform: translateX(100%);

  }
  to {
    transform: translateX(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    transform: translateX(-100%);

  }
  to {
    transform: translateX(0);
  }
`;

const fadeMixin = css<{ position?: PositionToasts }>`
  animation-name: ${({ position }) => {
    if (position === 'bottom-left') return fadeInLeft;
    return fadeInRight;
  }};
`;

const Transition = styled.div<{ position?: PositionToasts }>`
  margin-bottom: 16px;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  ${fadeMixin}
`;

export interface ToastTransitionProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: PositionToasts;
}

const StyledNotification = styled(Notification)`
  ${(props) => props.theme.shadow['Shadow 08']}
`;

export const Toast = ({ position = 'top-right', ...props }: ToastTransitionProps) => {
  const { toasts, removeToast } = useToast();

  function renderDefaultNotification(item: IdentifyToast) {
    const handleOnClose = () => {
      removeToast(item);
    };

    return (
      <StyledNotification {...item} onClose={item.onClose || handleOnClose}>
        {item.children}
      </StyledNotification>
    );
  }
  return (
    <Container position={position} {...props}>
      {!!toasts?.length &&
        toasts.map(({ renderToast, ...item }) => {
          return (
            <Transition key={item.id} position={position}>
              {renderToast ? renderToast() : renderDefaultNotification(item)}
            </Transition>
          );
        })}
    </Container>
  );
};

export * from './useToast';
export * from './ToastProvider';

Toast.displayName = 'Toast';
