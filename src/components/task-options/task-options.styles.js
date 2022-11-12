import styled from 'styled-components';

import UnstyledCheckbox from '@/components/checkbox';

export const Options = styled.div`
  display: flex;
  align-items: center;
`;

export const Drag = styled.div`
  height: 20px;
  width: 15px;
  margin-right: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: grab;

  div {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.fg.delta};
    border-radius: 50px;

    &:not(:first-child) {
      margin-top: 3px;
    }
  }
`;

export const Pinned = styled.div`
  margin-right: 8px;
  font-size: 16px;
  line-height: 0;
  color: ${({ theme }) => theme.fg.delta};
  cursor: pointer;
  transition: color 0.4s;

  &.pinned {
    color: #fecd6d;
  }
`;

export const Checkbox = styled(UnstyledCheckbox)`
  margin-right: 10px;
`;
