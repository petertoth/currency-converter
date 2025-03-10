import styled from 'styled-components';

import { keyframes } from 'styled-components';

interface SkeletonProps {
  height?: string;
  width?: string;
}

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Skeleton = styled.div.attrs<SkeletonProps>(props => ({
  style: {
    height: props.height || "14px",
    width: props.width || "80%",
  }
}))<SkeletonProps>`
  display: inline-block;
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(
    90deg,
    #eee,
    #f5f5f5,
    #eee
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
`;
