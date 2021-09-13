import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Portal from '@material-ui/core/Portal'
import { RootState } from '../../store/store'

const Loader = (props: any) => {
  const showLoader = useSelector(({ main }: RootState) => main.showLoader)

  if (!showLoader && !props.show) { return null; }

  return (
    <Portal>
      <StyledLoader src={`${process.env.PUBLIC_URL}/loader.svg`} alt="loader" />
    </Portal>
  )
}

const loaderSize = 150;
const StyledLoader = styled.img`
  width: ${loaderSize}px;
  height: ${loaderSize}px;
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
`;

Loader.propTypes = {
  show: PropTypes.bool,
}

Loader.defaultProps = {
  show: false,
}

export default memo(Loader)